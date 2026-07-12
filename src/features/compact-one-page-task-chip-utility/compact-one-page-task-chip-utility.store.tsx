import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  DEFAULT_ACTIVE_PANEL,
  DEFAULT_ACTIVE_SURFACE,
  type AppPanelId,
  type AppShellSnapshot,
  type AppSurfaceId,
  type TaskRecord,
  type TaskStatus,
} from './compact-one-page-task-chip-utility.types';
import {
  clearTasks as clearPersistedTasks,
  deriveCounts,
  loadTasks,
  saveTasks,
} from './compact-one-page-task-chip-utility.repo';

/**
 * App shell store.
 *
 * Owns the bootstrap state described in the US-001 contract:
 *   - active surface, active panel, selected record
 *   - storage status, last error, item counts
 *   - persisted task list with corrupted-data recovery
 *
 * Stable navigation handlers (navigateToSurface, setActivePanel, selectRecord)
 * are exposed so screen-owner stories can wire actions without reaching into
 * store internals.
 */

export interface AppShellState extends AppShellSnapshot {
  readonly navigateToSurface: (surface: AppSurfaceId) => void;
  readonly setActivePanel: (panel: AppPanelId) => void;
  readonly selectRecord: (id: string | null) => void;
  readonly addTask: (input: { title: string; description?: string }) => TaskRecord | null;
  readonly updateTask: (
    id: string,
    patch: Partial<Pick<TaskRecord, 'title' | 'description' | 'status'>>,
  ) => boolean;
  readonly deleteTask: (id: string) => boolean;
  readonly setTaskStatus: (id: string, status: TaskStatus) => boolean;
  readonly clearCache: () => void;
}

const AppShellContext = createContext<AppShellState | null>(null);

function nowMs(): number {
  return typeof globalThis !== 'undefined' && typeof globalThis.Date === 'function'
    ? globalThis.Date.now()
    : 0;
}

function makeId(): string {
  const stamp = nowMs().toString(36);
  const random = Math.random().toString(36).slice(2, 8);
  return `task-${stamp}-${random}`;
}

export interface AppShellProviderProps {
  children?: ReactNode;
  /** Optional injection point for tests; defaults to `loadTasks`. */
  loadInitial?: () => ReturnType<typeof loadTasks>;
}

export function AppShellProvider({
  children,
  loadInitial = loadTasks,
}: AppShellProviderProps) {
  const initial = useMemo(() => loadInitial(), [loadInitial]);

  const [tasks, setTasks] = useState<TaskRecord[]>(() => [...initial.tasks]);
  const [activeSurface, setActiveSurface] = useState<AppSurfaceId>(DEFAULT_ACTIVE_SURFACE);
  const [activePanel, setActivePanelState] = useState<AppPanelId>(DEFAULT_ACTIVE_PANEL);
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null);
  const [storageStatus, setStorageStatus] = useState<AppShellState['storageStatus']>(initial.status);
  const [lastError, setLastError] = useState<string | null>(initial.error);

  // Persist on every task mutation. We use a ref so that consumers calling
  // mutation handlers during render still trigger a save on the next tick.
  const tasksRef = useRef<TaskRecord[]>(tasks);
  const isFirstRender = useRef(true);
  useEffect(() => {
    tasksRef.current = tasks;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const ok = saveTasks(tasks);
    if (!ok && storageStatus !== 'corrupted') {
      setStorageStatus('empty');
      setLastError('localStorage is unavailable; changes are not persisted.');
    }
  }, [tasks, storageStatus]);

  const counts = useMemo(() => deriveCounts(tasks), [tasks]);

  const navigateToSurface = useCallback((surface: AppSurfaceId) => {
    setActiveSurface(surface);
  }, []);

  const setActivePanel = useCallback((panel: AppPanelId) => {
    setActivePanelState(panel);
  }, []);

  const selectRecord = useCallback((id: string | null) => {
    setSelectedRecordId(id);
  }, []);

  const addTask = useCallback<AppShellState['addTask']>(({ title, description }) => {
    const trimmed = title.trim();
    if (trimmed.length === 0) {
      setLastError('Task title is required.');
      return null;
    }
    const stamp = nowMs();
    const record: TaskRecord = {
      id: makeId(),
      title: trimmed,
      description: description ?? '',
      status: 'active',
      createdAt: stamp,
      updatedAt: stamp,
    };
    setTasks((prev) => [record, ...prev]);
    setSelectedRecordId(record.id);
    setLastError(null);
    setStorageStatus('ready');
    return record;
  }, []);

  const updateTask = useCallback<AppShellState['updateTask']>((id, patch) => {
    const exists = tasksRef.current.some((task) => task.id === id);
    if (!exists) return false;
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;
        return {
          ...task,
          ...(patch.title !== undefined ? { title: patch.title } : {}),
          ...(patch.description !== undefined ? { description: patch.description } : {}),
          ...(patch.status !== undefined ? { status: patch.status } : {}),
          updatedAt: nowMs(),
        };
      }),
    );
    setLastError(null);
    return true;
  }, []);

  const deleteTask = useCallback<AppShellState['deleteTask']>((id) => {
    const exists = tasksRef.current.some((task) => task.id === id);
    if (!exists) return false;
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setSelectedRecordId((current) => (current === id ? null : current));
    setLastError(null);
    return true;
  }, []);

  const setTaskStatus = useCallback<AppShellState['setTaskStatus']>((id, status) => {
    return updateTask(id, { status });
  }, [updateTask]);

  const clearCache = useCallback(() => {
    const ok = clearPersistedTasks();
    if (!ok) {
      setLastError('localStorage is unavailable; nothing to clear.');
      return;
    }
    const next = loadTasks();
    setTasks([...next.tasks]);
    setStorageStatus(next.status);
    setLastError(next.error);
    setSelectedRecordId(null);
  }, []);

  const value = useMemo<AppShellState>(
    () => ({
      activeSurface,
      activePanel,
      selectedRecordId,
      counts,
      storageStatus,
      lastError,
      tasks,
      navigateToSurface,
      setActivePanel,
      selectRecord,
      addTask,
      updateTask,
      deleteTask,
      setTaskStatus,
      clearCache,
    }),
    [
      activeSurface,
      activePanel,
      selectedRecordId,
      counts,
      storageStatus,
      lastError,
      tasks,
      navigateToSurface,
      setActivePanel,
      selectRecord,
      addTask,
      updateTask,
      deleteTask,
      setTaskStatus,
      clearCache,
    ],
  );

  return <AppShellContext.Provider value={value}>{children}</AppShellContext.Provider>;
}

export function useAppShell(): AppShellState {
  const ctx = useContext(AppShellContext);
  if (!ctx) {
    throw new Error('useAppShell must be used inside an <AppShellProvider>.');
  }
  return ctx;
}

/**
 * Read-only snapshot of the shell state. Safe to pass to screen-owner
 * stories that only need to render, not mutate.
 */
export function useAppShellSnapshot(): AppShellSnapshot {
  const { activeSurface, activePanel, selectedRecordId, counts, storageStatus, lastError, tasks } =
    useAppShell();
  return {
    activeSurface,
    activePanel,
    selectedRecordId,
    counts,
    storageStatus,
    lastError,
    tasks,
  };
}
