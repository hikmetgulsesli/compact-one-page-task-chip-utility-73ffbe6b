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
 * Persist the current draft. When the shell already has a selected record
 * this updates that record in place; otherwise it creates a new task.
 * Returns the affected record on success or `null` on rejection.
 *
 * On success the module-level draft is cleared and the shell is
 * navigated back to the operations surface so the user can see the
 * change reflected in the list.
 */
export function actSaveRecord(shell: AppShellState): TaskRecord | null {
  if (shell.selectedRecordId) {
    const ok = shell.updateTask(shell.selectedRecordId, {
      title: draft.title,
      description: draft.description,
    });
    if (ok) {
      clearSaveRecordDraft();
      shell.navigateToSurface('short-operations');
      return (
        shell.tasks.find((t) => t.id === shell.selectedRecordId) ?? null
      );
    }
    return null;
  }
  const result = shell.addTask({
    title: draft.title,
    description: draft.description,
  });
  if (result) {
    clearSaveRecordDraft();
    shell.navigateToSurface('short-operations');
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
  if (shell.selectedRecordId) {
    const ok = shell.updateTask(shell.selectedRecordId, {
      title: input.title,
      description: input.description,
    });
    if (ok) {
      clearSaveRecordDraft();
      shell.navigateToSurface('short-operations');
      return (
        shell.tasks.find((t) => t.id === shell.selectedRecordId) ?? null
      );
    }
    draft = previous;
    return null;
  }
  const result = shell.addTask({ title: input.title, description: input.description });
  if (result) {
    clearSaveRecordDraft();
    shell.navigateToSurface('short-operations');
  } else {
    draft = previous;
  }
  return result;
}