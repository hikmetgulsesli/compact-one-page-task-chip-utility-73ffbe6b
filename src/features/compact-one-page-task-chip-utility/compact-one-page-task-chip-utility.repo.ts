import { FIXTURE_PERSISTENCE_SCHEMA } from '../../__fixtures__/compact-one-page-task-chip-utility.fixture';
import {
  PERSISTENCE_STORAGE_KEY,
  PERSISTENCE_VERSION,
  type PersistenceSchema,
  type StorageLoadResult,
  type TaskRecord,
  type TaskStatus,
} from './compact-one-page-task-chip-utility.types';

export type { StorageLoadResult } from './compact-one-page-task-chip-utility.types';

/**
 * Persistence adapter for the Compact One Page Task Chip Utility.
 *
 * Goals:
 * - Never throw from `load` or `save`; surface failures as a typed
 *   `StorageLoadResult` so the React shell can drive the Empty and Error
 *   Recovery surface.
 * - Treat malformed JSON or wrong-shaped data as `corrupted` rather than
 *   silently dropping user data.
 * - Behave deterministically when localStorage is unavailable (SSR, jsdom
 *   without storage, private mode) by returning the fixture data.
 */

type StorageLike = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;

function resolveStorage(): StorageLike | null {
  try {
    if (typeof globalThis === 'undefined') return null;
    const candidate = (globalThis as { localStorage?: StorageLike }).localStorage;
    if (!candidate) return null;
    // Smoke-test the API. Some environments expose `localStorage` but throw on
    // first access (e.g. Safari private mode).
    const probeKey = '__compact_one_page_task_chip_utility_probe__';
    candidate.getItem(probeKey);
    return candidate;
  } catch {
    return null;
  }
}

function isTaskRecord(value: unknown): value is TaskRecord {
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.id === 'string' &&
    typeof record.title === 'string' &&
    typeof record.description === 'string' &&
    (record.status === 'active' || record.status === 'done') &&
    typeof record.createdAt === 'number' &&
    typeof record.updatedAt === 'number'
  );
}

function isPersistenceSchema(value: unknown): value is PersistenceSchema {
  if (!value || typeof value !== 'object') return false;
  const schema = value as Record<string, unknown>;
  if (schema.version !== PERSISTENCE_VERSION) return false;
  if (!Array.isArray(schema.tasks)) return false;
  return schema.tasks.every(isTaskRecord);
}

/**
 * Load the persisted task list. Falls back to the fixture when storage is
 * empty or unavailable. Returns `corrupted` (with empty tasks) when stored
 * JSON is malformed or schema-incompatible so the shell can offer recovery.
 */
export function loadTasks(): StorageLoadResult {
  const storage = resolveStorage();
  if (!storage) {
    return {
      status: 'empty',
      tasks: [...FIXTURE_PERSISTENCE_SCHEMA.tasks],
      error: null,
    };
  }

  let raw: string | null;
  try {
    raw = storage.getItem(PERSISTENCE_STORAGE_KEY);
  } catch (cause) {
    return {
      status: 'corrupted',
      tasks: [],
      error: `localStorage.getItem failed: ${(cause as Error)?.message ?? 'unknown'}`,
    };
  }

  if (raw === null || raw === '') {
    return {
      status: 'empty',
      tasks: [...FIXTURE_PERSISTENCE_SCHEMA.tasks],
      error: null,
    };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (cause) {
    return {
      status: 'corrupted',
      tasks: [],
      error: `Stored JSON could not be parsed: ${(cause as Error)?.message ?? 'unknown'}`,
    };
  }

  if (!isPersistenceSchema(parsed)) {
    return {
      status: 'corrupted',
      tasks: [],
      error: 'Stored payload did not match the expected persistence schema.',
    };
  }

  return {
    status: 'ready',
    tasks: parsed.tasks.map((task) => ({ ...task })),
    error: null,
  };
}

/**
 * Persist the task list. Returns `true` on success and `false` when storage
 * is unavailable or rejects the write (e.g. quota exceeded). Never throws.
 */
export function saveTasks(tasks: readonly TaskRecord[]): boolean {
  const storage = resolveStorage();
  if (!storage) return false;

  const payload: PersistenceSchema = {
    version: PERSISTENCE_VERSION,
    tasks: tasks.map((task) => ({ ...task })),
  };

  try {
    storage.setItem(PERSISTENCE_STORAGE_KEY, JSON.stringify(payload));
    return true;
  } catch {
    return false;
  }
}

/**
 * Remove the persisted task list. Used by the Empty and Error Recovery
 * surface when the user explicitly clears the cache.
 */
export function clearTasks(): boolean {
  const storage = resolveStorage();
  if (!storage) return false;
  try {
    storage.removeItem(PERSISTENCE_STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}

/**
 * Normalize a status string into the closed `TaskStatus` union. Returns
 * `'active'` for anything unrecognised so the UI never lands in an
 * unrenderable state.
 */
export function normalizeStatus(value: unknown): TaskStatus {
  return value === 'done' ? 'done' : 'active';
}

/**
 * Pure helper for tests and the store: derive counts from a task list
 * without coupling to React.
 */
export function deriveCounts(tasks: readonly TaskRecord[]): {
  total: number;
  active: number;
  done: number;
} {
  let active = 0;
  let done = 0;
  for (const task of tasks) {
    if (task.status === 'done') done += 1;
    else active += 1;
  }
  return { total: active + done, active, done };
}
