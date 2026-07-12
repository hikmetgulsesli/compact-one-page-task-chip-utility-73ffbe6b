import type { AppShellState } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';
import { clearSaveRecordDraft } from './act_save_record';

/**
 * Short Editor - act_cancel_edit
 *
 * Implements ACT_CANCEL_EDIT for SURF_SHORT_EDITOR. Discards the current
 * editor draft (if any) and navigates back to the operations surface so
 * the user lands somewhere they can verify the cancel was effective.
 *
 * Exposed as a pure function so it stays trivially testable without
 * rendering React, matching the rest of the act_* modules in the
 * project.
 */

export interface CancelEditResult {
  readonly discarded: boolean;
  readonly navigatedTo: AppShellState['activeSurface'];
}

export function actCancelEdit(shell: AppShellState): CancelEditResult {
  clearSaveRecordDraft();
  shell.selectRecord(null);
  shell.navigateToSurface('short-operations');
  return {
    discarded: true,
    navigatedTo: 'short-operations',
  };
}