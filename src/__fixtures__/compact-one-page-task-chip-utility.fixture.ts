import type { PersistenceSchema, TaskRecord } from '../features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';
import { PERSISTENCE_VERSION } from '../features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';

/**
 * Deterministic fixture used by the persistence adapter when localStorage is
 * empty or unavailable. Timestamps are pinned so tests can assert on ordering
 * without flake.
 */
export const FIXTURE_TASK_RECORDS: readonly TaskRecord[] = [
  {
    id: 'task-fixture-001',
    title: 'Wire app shell and store',
    description: 'Bootstrap the React store, persistence adapter, and window.app test bridge.',
    status: 'active',
    createdAt: 1_700_000_000_000,
    updatedAt: 1_700_000_000_000,
  },
  {
    id: 'task-fixture-002',
    title: 'Seed fixture tasks',
    description: 'Provide deterministic sample tasks so the operations surface renders without manual setup.',
    status: 'active',
    createdAt: 1_700_000_060_000,
    updatedAt: 1_700_000_060_000,
  },
  {
    id: 'task-fixture-003',
    title: 'Document persistence keys',
    description: 'Lock down the localStorage key and version so future migrations stay safe.',
    status: 'done',
    createdAt: 1_700_000_120_000,
    updatedAt: 1_700_000_180_000,
  },
] as const;

export const FIXTURE_PERSISTENCE_SCHEMA: PersistenceSchema = {
  version: PERSISTENCE_VERSION,
  tasks: FIXTURE_TASK_RECORDS.map((task) => ({ ...task })),
};
