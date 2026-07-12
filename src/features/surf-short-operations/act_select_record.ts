import type { AppShellState } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';

/**
 * Short Operations - act_select_record
 *
 * Implements ACT_SELECT_RECORD for SURF_SHORT_OPERATIONS. Selects a
 * record by id and optionally navigates to the editor surface so the
 * user can view or edit it.
 */

export interface SelectRecordResult {
  readonly selectedId: string | null;
  readonly navigatedTo: 'short-editor' | null;
}

export function actSelectRecord(
  shell: AppShellState,
  id: string,
  options: { navigateToEditor?: boolean } = {},
): SelectRecordResult {
  shell.selectRecord(id);
  if (options.navigateToEditor) {
    shell.navigateToSurface('short-editor');
    return {
      selectedId: id,
      navigatedTo: 'short-editor',
    };
  }
  return {
    selectedId: id,
    navigatedTo: null,
  };
}
