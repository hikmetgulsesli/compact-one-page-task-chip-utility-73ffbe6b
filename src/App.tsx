import { useEffect, useMemo, type ComponentType } from 'react';
import {
  AppShellProvider,
  useAppShell,
  type AppShellState,
} from './features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';
import {
  EmptyAndErrorRecoveryCompactOnePageTaskChipUtility,
  SettingsAndPreferencesCompactOnePageTaskChipUtility,
  ShortEditorCompactOnePageTaskChipUtility,
  ShortOperationsCompactOnePageTaskChipUtility,
  type ShortEditorCompactOnePageTaskChipUtilityActionId,
  type ShortOperationsCompactOnePageTaskChipUtilityActionId,
} from './screens';
import type { AppSurfaceId } from './features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';
import { actSaveRecord, clearSaveRecordDraft, setSaveRecordDraft } from './features/surf-short-editor/act_save_record';
import { actCancelEdit } from './features/surf-short-editor/act_cancel_edit';
import { actCreateRecord } from './features/surf-short-operations/act_create_record';
import { actSelectRecord } from './features/surf-short-operations/act_select_record';
import { actRetryLoad } from './features/surf-short-operations/act_retry_load';
import { clearSearchQuery, setSearchQuery } from './features/surf-short-operations/act_search_records';
import type { AppShellSnapshot } from './features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';

/**
 * App shell.
 *
 * Renders the generated Compact One Page Task Chip Utility surface as the
 * visual viewport root. No diagnostic, status, debug, or session chrome is
 * rendered in the DOM — smoke/test-only state is exposed via
 * `window.app` / `globalThis.app` for harnesses that need to inspect the
 * shell without polluting the visible UI.
 *
 * Surface-owner stories will extend the SURFACE_COMPONENTS map and wire
 * generated action IDs through the `actions` prop. This story owns the
 * shell, state, and persistence plumbing only; no generated screen source
 * is read here.
 */

type SurfaceComponent = ComponentType<Record<string, never>>;

/**
 * Download the shell's current task list as a JSON file. Shared by every
 * surface that exposes the "Export JSON" action so the file format and
 * cleanup of the temporary object URL stay in lockstep.
 */
function exportTasksToJson(shell: AppShellState): void {
  const blob = new Blob([JSON.stringify(shell.tasks, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tasks.json';
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Short Operations surface wrapper.
 * Wires the generated actions prop to the shared app shell.
 */
function ShortOperationsSurface(): JSX.Element {
  const shell = useAppShell();
  const actions = useMemo<Partial<Record<ShortOperationsCompactOnePageTaskChipUtilityActionId, () => void>>>(
    () => ({
      'notifications-1': () => shell.navigateToSurface('short-operations'),
      'help-outline-2': () => shell.navigateToSurface('short-operations'),
      'new-task-3': () => actCreateRecord(shell),
      'menu-4': () => shell.navigateToSurface('short-operations'),
      'export-json-5': () => exportTasksToJson(shell),
      'clear-cache-6': () => shell.clearCache(),
      'retry-load-7': () => actRetryLoad(shell),
      'all-8': () => shell.setActivePanel('all'),
      'active-9': () => shell.setActivePanel('active'),
      'done-10': () => shell.setActivePanel('done'),
      'edit-11': () => {
        const id = shell.selectedRecordId;
        if (id) actSelectRecord(shell, id, { navigateToEditor: true });
      },
      'operations-1': () => shell.navigateToSurface('short-operations'),
      'editor-2': () => shell.navigateToSurface('short-editor'),
      'settings-3': () => shell.navigateToSurface('settings-and-preferences'),
      'recovery-4': () => shell.navigateToSurface('empty-and-error-recovery'),
    }),
    [shell],
  );
  return <ShortOperationsCompactOnePageTaskChipUtility actions={actions} />;
}

/**
 * Short Editor surface wrapper.
 * Wires the generated actions prop to the shared app shell.
 */
function ShortEditorSurface(): JSX.Element {
  const shell = useAppShell();
  const actions = useMemo<Partial<Record<ShortEditorCompactOnePageTaskChipUtilityActionId, () => void>>>(
    () => ({
      'export-json-1': () => exportTasksToJson(shell),
      'menu-2': () => shell.navigateToSurface('short-operations'),
      'notifications-3': () => shell.navigateToSurface('short-operations'),
      'help-outline-4': () => shell.navigateToSurface('short-operations'),
      'new-task-5': () => {
        // Clear the selected record so the editor opens empty rather than
        // prefilled with the previously selected task's values.
        shell.selectRecord(null);
        shell.navigateToSurface('short-editor');
      },
      'cancel-6': () => actCancelEdit(shell),
      'save-task-7': () => actSaveRecord(shell),
      'operations-1': () => shell.navigateToSurface('short-operations'),
      'editor-2': () => shell.navigateToSurface('short-editor'),
      'settings-3': () => shell.navigateToSurface('settings-and-preferences'),
      'recovery-4': () => shell.navigateToSurface('empty-and-error-recovery'),
      'clear-cache-5': () => shell.clearCache(),
    }),
    [shell],
  );
  return <ShortEditorCompactOnePageTaskChipUtility actions={actions} />;
}

const SURFACE_COMPONENTS: Record<AppSurfaceId, SurfaceComponent> = {
  'short-operations': ShortOperationsSurface as unknown as SurfaceComponent,
  'short-editor': ShortEditorSurface as unknown as SurfaceComponent,
  'settings-and-preferences': SettingsAndPreferencesCompactOnePageTaskChipUtility as unknown as SurfaceComponent,
  'empty-and-error-recovery': EmptyAndErrorRecoveryCompactOnePageTaskChipUtility as unknown as SurfaceComponent,
};

function CurrentSurface() {
  const { activeSurface } = useAppShell();
  const Component = SURFACE_COMPONENTS[activeSurface];
  return (
    <div
      data-setfarm-surface={activeSurface}
      data-testid="setfarm-app-root"
      className="min-h-screen w-full"
    >
      <Component />
    </div>
  );
}

function ShellBridge() {
  const shell = useAppShell();
  useEffect(() => {
    // Expose the live shell for smoke harnesses, QA probes, and integration
    // tests. This intentionally writes to `window` / `globalThis` rather than
    // rendering visible chrome, so the generated surface stays the only
    // viewport root.
    const target = globalThis as { app?: AppShellState };
    target.app = shell;
    if (typeof window !== 'undefined') {
      (window as unknown as { app?: AppShellState }).app = shell;
    }
    return () => {
      if (target.app === shell) {
        delete target.app;
      }
      if (typeof window !== 'undefined') {
        const w = window as unknown as { app?: AppShellState };
        if (w.app === shell) {
          delete w.app;
        }
      }
    };
  }, [shell]);
  return null;
}

export default function App() {
  return (
    <AppShellProvider>
      <ShellBridge />
      <CurrentSurface />
    </AppShellProvider>
  );
}
