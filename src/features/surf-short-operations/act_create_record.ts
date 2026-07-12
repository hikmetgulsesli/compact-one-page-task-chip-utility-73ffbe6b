import type { AppShellState } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';

/**
 * Short Operations - act_create_record
 *
 * Implements ACT_CREATE_RECORD for SURF_SHORT_OPERATIONS. The primary
 * "New Task" action navigates the user to the editor surface so they
 * can input the new record details. If the caller wants an inline
 * quick-add, the optional `quickAdd` flag adds a task with the
 * supplied title and then navigates.
 */

export interface CreateRecordInput {
  readonly title: string;
  readonly description?: string;
}

export interface CreateRecordResult {
  readonly navigatedTo: 'short-editor';
  readonly createdId: string | null;
}

export function actCreateRecord(
  shell: AppShellState,
  input?: CreateRecordInput,
): CreateRecordResult {
  if (input && input.title.trim().length > 0) {
    const record = shell.addTask({ title: input.title, description: input.description });
    if (record) {
      shell.selectRecord(record.id);
    }
    shell.navigateToSurface('short-editor');
    return {
      navigatedTo: 'short-editor',
      createdId: record?.id ?? null,
    };
  }

  // No input – navigate to editor so user fills the form.
  shell.navigateToSurface('short-editor');
  return {
    navigatedTo: 'short-editor',
    createdId: null,
  };
}
