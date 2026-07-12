/**
 * Domain types for the Compact One Page Task Chip Utility.
 *
 * These types are shared between the store, the persistence adapter, the
 * fixture data, and the generated screen wiring. They are intentionally
 * dependency-free so the store can be loaded in tests, the React shell, and
 * the persistence adapter without pulling in a UI library.
 */

/**
 * All surface IDs the app shell knows about. The values match the
 * `componentName` suffixes exported by `src/screens/index.ts`.
 */
export type AppSurfaceId =
  | 'short-operations'
  | 'short-editor'
  | 'settings-and-preferences'
  | 'empty-and-error-recovery';

/**
 * Active panel inside a surface. Used for sub-navigation such as filters or
 * side panes that share the same screen.
 */
export type AppPanelId = 'all' | 'active' | 'done' | 'recovery' | 'settings';

/**
 * Task lifecycle status. `done` covers both `done` and `archived` chips in the
 * generated UI, which collapse to a single bucket for state purposes.
 */
export type TaskStatus = 'active' | 'done';

/**
 * Persisted task record. `id` is stable across edits; `updatedAt` is used to
 * sort and to drive last-write-wins reconciliation.
 */
export interface TaskRecord {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: number;
  updatedAt: number;
}

/**
 * Schema persisted to localStorage. Wrapping the array in an object keeps the
 * door open for future metadata (e.g. `version`, `preferences`) without a
 * breaking migration.
 */
export interface PersistenceSchema {
  version: 1;
  tasks: TaskRecord[];
}

/**
 * Result of attempting to load persisted data. `storageStatus` is consumed by
 * the app shell to drive the Empty and Error Recovery surface.
 */
export type StorageStatus = 'empty' | 'ready' | 'corrupted';

export interface StorageLoadResult {
  status: StorageStatus;
  tasks: TaskRecord[];
  error: string | null;
}

/**
 * Snapshot of app shell state exposed through `window.app` and the React
 * store. Screen-owner stories read from this snapshot to render without
 * depending on store internals.
 */
export interface AppShellSnapshot {
  activeSurface: AppSurfaceId;
  activePanel: AppPanelId;
  selectedRecordId: string | null;
  counts: {
    total: number;
    active: number;
    done: number;
  };
  storageStatus: StorageStatus;
  lastError: string | null;
  tasks: TaskRecord[];
}

/**
 * Default surface on first render. The PRD treats the operations view as the
 * product home, so the shell boots there even when there are no tasks.
 */
export const DEFAULT_ACTIVE_SURFACE: AppSurfaceId = 'short-operations';
export const DEFAULT_ACTIVE_PANEL: AppPanelId = 'all';

export const PERSISTENCE_STORAGE_KEY = 'compact-one-page-task-chip-utility.v1';
export const PERSISTENCE_VERSION = 1 as const;
