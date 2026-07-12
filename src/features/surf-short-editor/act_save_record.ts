import type { AppShellState } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';
import type { TaskRecord } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';

/**
 * Short Editor - act_save_record
 *
 * Implements ACT_SAVE_RECORD for SURF_SHORT_EDITOR. Persists the editor's
 * current draft (title + description) as a new task through the shared
 * app shell. Returns the new record on success or `null` when the title
 * is empty / the shell rejected the write.
 *
 * The draft is captured by the editor screen through a small module-level
 * holder so the generated `actions["save-task-7"]` callback can stay a
 * zero-argument function while still persisting real form values.
 */

export interface SaveRecordDraft {
  title: string;
  description: string;
}

const EMPTY_DRAFT: SaveRecordDraft = { title: '', description: '' };

let draft: SaveRecordDraft = { ...EMPTY_DRAFT };

export function getSaveRecordDraft(): SaveRecordDraft {
  return { title: draft.title, description: draft.description };
}

export function setSaveRecordDraft(next: Partial<SaveRecordDraft>): void {
  draft = {
    title: next.title !== undefined ? next.title : draft.title,
    description: next.description !== undefined ? next.description : draft.description,
  };
}

export function clearSaveRecordDraft(): void {
  draft = { ...EMPTY_DRAFT };
}

/**
 * Persist the current draft as a new task through the shared shell.
 * Returns the created record (with generated id) or `null` on rejection.
 */
export function actSaveRecord(shell: AppShellState): TaskRecord | null {
  const result = shell.addTask({
    title: draft.title,
    description: draft.description,
  });
  if (result) {
    clearSaveRecordDraft();
  }
  return result;
}

/**
 * Convenience: read title/description directly from a caller-supplied
 * snapshot. Useful when the editor wants to flush a specific snapshot
 * without going through the module-level holder (e.g. on blur).
 */
export function actSaveRecordFrom(
  shell: AppShellState,
  input: SaveRecordDraft,
): TaskRecord | null {
  const previous = draft;
  draft = { title: input.title, description: input.description };
  const result = shell.addTask({ title: input.title, description: input.description });
  if (result) {
    clearSaveRecordDraft();
  } else {
    draft = previous;
  }
  return result;
}