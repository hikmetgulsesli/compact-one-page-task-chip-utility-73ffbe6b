// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - Compact One Page Task Chip Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, Bell, CircleHelp, FilterX, History, LayoutDashboard, Pencil, Plus, RefreshCw, Search, SearchX, Settings, Trash2, TriangleAlert } from "lucide-react";


export type EmptyAndErrorRecoveryCompactOnePageTaskChipUtilityActionId = "export-json-1" | "notifications-2" | "help-outline-3" | "new-task-4" | "retry-connection-5" | "view-documentation-6" | "clear-all-filters-7" | "create-first-task-8" | "operations-1" | "editor-2" | "settings-3" | "recovery-4" | "clear-cache-5" | "import-from-json-template-6";

export interface EmptyAndErrorRecoveryCompactOnePageTaskChipUtilityProps {
  actions?: Partial<Record<EmptyAndErrorRecoveryCompactOnePageTaskChipUtilityActionId, () => void>>;

}

export function EmptyAndErrorRecoveryCompactOnePageTaskChipUtility({ actions }: EmptyAndErrorRecoveryCompactOnePageTaskChipUtilityProps) {
  return (
    <>
      {/* SideNavBar (from JSON) */}
      <aside className="bg-surface-container-low h-screen w-64 border-r border-outline-variant flex flex-col py-lg px-md shrink-0 z-50">
      {/* Header */}
      <div className="mb-lg px-sm">
      <h1 className="font-heading-sm text-heading-sm font-bold text-primary">TaskChip</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Utility v1.0</p>
      </div>
      {/* Navigation Tabs */}
      <nav className="flex-1 flex flex-col gap-xs font-body-md text-body-md">
      {/* Inactive Tab: Operations */}
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <LayoutDashboard className="text-[18px]" aria-hidden={true} focusable="false" />
                      Operations
                  </a>
      {/* Inactive Tab: Editor */}
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
                      Editor
                  </a>
      {/* Inactive Tab: Settings */}
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      {/* Active Tab: Recovery */}
      <a className="flex items-center justify-between pl-md pr-sm py-sm rounded-l-lg text-primary font-bold border-r-2 border-primary bg-surface-container cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="recovery-4" onClick={(event) => { event.preventDefault(); actions?.["recovery-4"]?.(); }}>
      <div className="flex items-center gap-sm">
      <History  style={{fontVariationSettings: "'FILL' 1"}} className="text-[18px]" aria-hidden={true} focusable="false" />
                          Recovery
                      </div>
      </a>
      </nav>
      {/* CTA */}
      <div className="mt-auto pt-lg border-t border-outline-variant/50">
      <button className="w-full bg-primary text-on-primary font-body-md text-body-md h-[32px] rounded flex items-center justify-center gap-sm hover:bg-primary-container transition-colors shadow-sm" type="button" data-action-id="export-json-1" onClick={actions?.["export-json-1"]}>
                      Export JSON
                  </button>
      </div>
      {/* Footer Tab */}
      <div className="mt-sm">
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="clear-cache-5" onClick={(event) => { event.preventDefault(); actions?.["clear-cache-5"]?.(); }}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
                      Clear Cache
                  </a>
      </div>
      </aside>
      {/* Main Workspace */}
      <main className="flex-1 flex flex-col h-screen min-w-0 bg-background">
      {/* TopAppBar (from JSON) */}
      <header className="bg-surface top-0 sticky border-b border-outline-variant flex justify-between items-center w-full px-lg h-12 z-40 shrink-0">
      {/* Left Area / Search */}
      <div className="flex items-center gap-md flex-1">
      <span className="font-heading-sm text-heading-sm font-black text-on-surface">TaskChip Utility</span>
      <div className="h-4 w-px bg-outline-variant mx-sm"></div>
      <div className="relative w-64 group">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-[16px] text-outline group-focus-within:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <input className="w-full pl-8 pr-sm py-1 bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary-fixed-dim transition-colors placeholder:text-outline h-[28px]" placeholder="Search tasks..." type="text" />
      </div>
      </div>
      {/* Right Area / Actions */}
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80 duration-150 ease-in-out flex items-center justify-center h-8 w-8 rounded hover:bg-surface-container-low" type="button" aria-label="Notifications" data-action-id="notifications-2" onClick={actions?.["notifications-2"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80 duration-150 ease-in-out flex items-center justify-center h-8 w-8 rounded hover:bg-surface-container-low" type="button" aria-label="Help Outline" data-action-id="help-outline-3" onClick={actions?.["help-outline-3"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="h-4 w-px bg-outline-variant mx-xs"></div>
      <button className="bg-primary text-on-primary font-body-sm text-body-sm px-md h-[28px] rounded hover:bg-primary-container transition-colors shadow-sm ml-xs font-medium" type="button" data-action-id="new-task-4" onClick={actions?.["new-task-4"]}>
                          New Task
                      </button>
      </div>
      </header>
      {/* Canvas Area */}
      <div className="flex-1 overflow-y-auto p-gutter relative">
      {/* Page Header (Contextual) */}
      <div className="mb-gutter flex items-end justify-between">
      <div>
      <h2 className="font-heading-sm text-heading-sm font-bold text-on-surface">Recovery Console</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">System diagnostics and state resolution utility.</p>
      </div>
      <div className="flex items-center gap-sm">
      <span className="inline-flex items-center gap-xs px-2 py-1 rounded bg-surface-container border border-outline-variant font-mono-label text-mono-label text-on-surface-variant">
      <span className="h-1.5 w-1.5 rounded-full bg-outline"></span> Disconnected
                          </span>
      </div>
      </div>
      {/* Bento Grid Layout for States */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start auto-rows-min">
      {/* 1. Error State Panel (Critical Priority - Spans 8 cols) */}
      <section className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded relative overflow-hidden group">
      {/* Feedback Toast Left Bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-error"></div>
      <div className="p-lg pl-[20px]">
      <div className="flex items-start gap-md">
      <div className="flex-shrink-0 h-8 w-8 rounded bg-error-container flex items-center justify-center text-error mt-xs">
      <TriangleAlert className="text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1">
      <h3 className="font-heading-sm text-heading-sm font-bold text-on-surface mb-xs">Data Store Synchronization Failure</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">
                                          The application cannot read from or write to the local database. This is typically caused by insufficient storage quota or strict privacy settings blocking `localStorage` access.
                                      </p>
      {/* Technical Details Box */}
      <div className="bg-surface p-sm rounded border border-outline-variant mb-md">
      <div className="flex justify-between items-center border-b border-outline-variant pb-xs mb-xs">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Exception Trace</span>
      <span className="font-mono-label text-mono-label text-error">DOMException: QuotaExceededError</span>
      </div>
      <code className="font-mono-label text-mono-label text-on-surface block truncate">
                                              at TaskStore.commit (storage.js:142)<br />
                                              at syncQueue.flush (queue.js:88)
                                          </code>
      </div>
      <div className="flex items-center gap-sm mt-md">
      <button className="bg-primary text-on-primary font-body-sm text-body-sm px-md h-[32px] rounded hover:bg-primary-container transition-colors shadow-sm font-medium flex items-center gap-xs" type="button" data-action-id="retry-connection-5" onClick={actions?.["retry-connection-5"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
                                              Retry Connection
                                          </button>
      <button className="bg-surface-container-lowest text-on-surface border border-outline-variant font-body-sm text-body-sm px-md h-[32px] rounded hover:bg-surface-container-low transition-colors font-medium" type="button" data-action-id="view-documentation-6" onClick={actions?.["view-documentation-6"]}>
                                              View Documentation
                                          </button>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 2. Zero State Panel (Filters - Spans 4 cols) */}
      <section className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded flex flex-col h-full min-h-[200px]">
      <div className="p-sm border-b border-outline-variant flex items-center gap-xs bg-surface-container-low/50">
      <FilterX className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      <h3 className="font-heading-sm text-heading-sm font-medium text-on-surface">Filter Results</h3>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-lg text-center">
      <div className="h-10 w-10 rounded-full bg-surface-container flex items-center justify-center mb-md text-outline">
      <SearchX className="text-[24px]" aria-hidden={true} focusable="false" />
      </div>
      <h4 className="font-heading-sm text-heading-sm font-medium text-on-surface mb-xs">No records match criteria</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md max-w-[200px]">
                                  Adjust your query or clear current filters to see available tasks.
                              </p>
      <button className="bg-surface-container-lowest text-on-surface border border-outline-variant font-body-sm text-body-sm px-md h-[28px] rounded hover:bg-surface-container-low transition-colors font-medium flex items-center gap-xs" type="button" data-action-id="clear-all-filters-7" onClick={actions?.["clear-all-filters-7"]}>
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" />
                                  Clear All Filters
                              </button>
      </div>
      </section>
      {/* 3. Empty State Panel (Spans Full Width below) */}
      <section className="lg:col-span-12 bg-surface border border-outline-variant border-dashed rounded relative overflow-hidden flex flex-col items-center justify-center py-[64px] px-lg mt-gutter">
      {/* Subtle background pattern for visual interest without distraction */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: "radial-gradient(#191c1e 1px, transparent 1px)", backgroundSize: "16px 16px"}}></div>
      <div className="relative z-10 flex flex-col items-center text-center max-w-[400px]">
      <div className="h-16 w-16 rounded bg-surface-container border border-outline-variant flex items-center justify-center mb-md text-outline shadow-sm relative">
      <BadgeHelp className="text-[32px]" aria-hidden={true} focusable="false" />
      {/* Decorative element */}
      <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-surface border border-outline-variant flex items-center justify-center">
      <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
      </div>
      </div>
      <h3 className="font-heading-sm text-heading-sm font-bold text-on-surface mb-xs">Workspace Initialization Required</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg leading-relaxed">
                                  The local repository contains zero functional nodes. To begin orchestration, establish the primary operational sequence by creating the first task entity.
                              </p>
      <button className="bg-primary text-on-primary font-body-md text-body-md px-lg h-[32px] rounded hover:bg-primary-container transition-colors shadow-sm font-medium flex items-center gap-xs" type="button" data-action-id="create-first-task-8" onClick={actions?.["create-first-task-8"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                                  Create First Task
                              </button>
      <div className="mt-md font-body-sm text-body-sm text-outline flex items-center gap-xs">
      <span>or</span>
      <a className="text-primary hover:underline underline-offset-2" href="#" data-action-id="import-from-json-template-6" onClick={(event) => { event.preventDefault(); actions?.["import-from-json-template-6"]?.(); }}>import from JSON template</a>
      </div>
      </div>
      </section>
      </div>
      </div>
      </main>
    </>
  );
}
