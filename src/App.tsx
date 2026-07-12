import { useEffect, type ComponentType } from 'react';
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
} from './screens';
import type { AppSurfaceId } from './features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';

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

const SURFACE_COMPONENTS: Record<AppSurfaceId, SurfaceComponent> = {
  'short-operations': ShortOperationsCompactOnePageTaskChipUtility as unknown as SurfaceComponent,
  'short-editor': ShortEditorCompactOnePageTaskChipUtility as unknown as SurfaceComponent,
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
