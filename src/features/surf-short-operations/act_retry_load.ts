import type { AppShellState } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';
import { loadTasks } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.repo';

/**
 * Short Operations - act_retry_load
 *
 * Implements ACT_RETRY_LOAD for SURF_SHORT_OPERATIONS. Re-reads the
 * persisted tasks from localStorage and syncs them into the in-memory
 * shell state so the UI reflects the latest source of truth.
 *
 * Tasks that exist in the shell but not in storage are deleted.
 * Tasks that exist in storage but not in the shell are added (new ids).
 * Tasks that differ are updated so the user does not lose local edits.
 */

export interface RetryLoadResult {
  readonly status: 'ok' | 'empty' | 'corrupted';
  readonly tasksCount: number;
}

export function actRetryLoad(shell: AppShellState): RetryLoadResult {
  const result = loadTasks();

  if (result.status === 'corrupted') {
    shell.clearCache();
    return {
      status: 'corrupted',
      tasksCount: shell.tasks.length,
    };
  }

  const storageMap = new Map(result.tasks.map((t) => [t.id, t]));
  const shellIds = new Set(shell.tasks.map((t) => t.id));

  // Remove tasks that disappeared from storage
  for (const task of shell.tasks) {
    if (!storageMap.has(task.id)) {
      shell.deleteTask(task.id);
    }
  }

  // Sync: update existing, add new
  for (const task of result.tasks) {
    if (shellIds.has(task.id)) {
      const existing = shell.tasks.find((t) => t.id === task.id);
      if (
        existing &&
        (existing.title !== task.title ||
          existing.description !== task.description ||
          existing.status !== task.status)
      ) {
        shell.updateTask(task.id, {
          title: task.title,
          description: task.description,
          status: task.status,
        });
      }
    } else {
      shell.addTask({ title: task.title, description: task.description });
    }
  }

  return {
    status: result.status === 'ready' ? 'ok' : result.status,
    tasksCount: shell.tasks.length,
  };
}
