import type { AppShellState } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';

/**
 * Short Operations - act_search_records
 *
 * Implements ACT_SEARCH_RECORDS for SURF_SHORT_OPERATIONS. Owns the
 * transient search query state and provides a pure filter helper so the
 * screen can derive the visible list without coupling to the shell.
 *
 * The query is kept in a module-level holder so the generated
 * `actions["search_input_persistent"]` callback stays zero-argument.
 */

let query = '';

export function getSearchQuery(): string {
  return query;
}

export function setSearchQuery(next: string): void {
  query = next;
}

export function clearSearchQuery(): void {
  query = '';
}

/**
 * Read the current query and filter the provided records.
 * Case-insensitive match on title or description.
 *
 * Defensive against records with missing or non-string title/description
 * (e.g. from corrupted storage or partial fixtures): such fields are
 * treated as empty strings and the record still survives the filter.
 */
export function filterRecordsByQuery<
  T extends { title?: string; description?: string },
>(records: readonly T[]): T[] {
  const q = query.trim().toLowerCase();
  if (q.length === 0) return [...records];
  return records.filter((r) => {
    const title = (r.title ?? '').toLowerCase();
    const description = (r.description ?? '').toLowerCase();
    return title.includes(q) || description.includes(q);
  });
}

/**
 * Convenience: update the module-level query and immediately
 * return the filtered list from the shell snapshot. Returns a
 * stable object so callers can diff for re-renders.
 */
export function actSearchRecords(shell: AppShellState): ReturnType<typeof filterRecordsByQuery> {
  return filterRecordsByQuery(shell.tasks);
}
