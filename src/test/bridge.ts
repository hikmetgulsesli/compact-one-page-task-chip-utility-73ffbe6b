import { createElement, type ReactElement, type ReactNode } from 'react';
import { render, type RenderOptions, type RenderResult } from '@testing-library/react';
import {
  AppShellProvider,
  useAppShell,
  type AppShellState,
} from '../features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';
import {
  loadTasks,
  type StorageLoadResult,
} from '../features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.repo';

/**
 * Test bridge for the Compact One Page Task Chip Utility.
 *
 * Story-owned tests, hooks, and smoke harnesses import from here so they can
 * spin up the shell with a deterministic persistence snapshot and read the
 * live store through a `useAppShell` consumer.
 *
 * Implemented as plain TypeScript so the file can stay at the
 * `src/test/bridge.ts` scope path without pulling in a `.tsx` build step.
 */

export interface RenderWithShellOptions extends Omit<RenderOptions, 'wrapper'> {
  loadInitial?: () => StorageLoadResult;
}

export interface RenderWithShellResult extends RenderResult {
  readonly shell: AppShellState | null;
}

export function createShellWrapper(
  loadInitial: () => StorageLoadResult = loadTasks,
): React.FC<{ children?: ReactNode }> {
  return function ShellWrapper({ children }) {
    return createElement(AppShellProvider, { loadInitial }, children);
  };
}

export function ShellHarness({ children }: { children?: ReactNode }): ReactElement {
  return createElement(AppShellProvider, null, children);
}

export function CaptureShell(): AppShellState {
  return useAppShell();
}

/**
 * Convenience: render a UI tree inside the shell and capture the live store
 * via a sibling spy component. Returns both the testing-library result and
 * the latest shell snapshot for assertions.
 */
export function renderWithShell(
  ui: ReactElement,
  options: RenderWithShellOptions = {},
): RenderWithShellResult {
  const Wrapper = createShellWrapper(options.loadInitial);
  let captured: AppShellState | null = null;

  function Spy(): null {
    captured = useAppShell();
    return null;
  }

  const renderResult = render(createElement(Wrapper, null, createElement(Spy), ui), options);

  const result = renderResult as RenderResult & { shell: AppShellState | null };
  result.shell = captured;
  return result as RenderWithShellResult;
}

export {
  loadTasks,
  saveTasks,
  clearTasks as clearPersistedTasks,
} from '../features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.repo';
export {
  useAppShell,
  useAppShellSnapshot,
  AppShellProvider,
} from '../features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';
export * from '../features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';
