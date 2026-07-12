// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Short Operations - Compact One Page Task Chip Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, Bell, Check, CircleAlert, CircleHelp, Download, History, LayoutDashboard, Menu, Pencil, Plus, RefreshCw, Search, Settings, Trash2, TriangleAlert, User } from "lucide-react";


export type ShortOperationsCompactOnePageTaskChipUtilityActionId = "notifications-1" | "help-outline-2" | "new-task-3" | "menu-4" | "export-json-5" | "clear-cache-6" | "retry-load-7" | "all-8" | "active-9" | "done-10" | "edit-11" | "operations-1" | "editor-2" | "settings-3" | "recovery-4";

export interface ShortOperationsCompactOnePageTaskChipUtilityProps {
  actions?: Partial<Record<ShortOperationsCompactOnePageTaskChipUtilityActionId, () => void>>;

}

export function ShortOperationsCompactOnePageTaskChipUtility({ actions }: ShortOperationsCompactOnePageTaskChipUtilityProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full px-lg h-12 bg-surface dark:bg-background z-40 border-b border-outline-variant dark:border-outline full-width top-0 sticky">
      <div className="flex items-center gap-sm">
      <span className="font-heading-sm text-heading-sm font-black text-on-surface dark:text-on-primary-fixed">TaskChip Utility</span>
      </div>
      <div className="flex items-center gap-md">
      {/* Search Bar (on_left configuration) */}
      <div className="relative hidden sm:block w-64">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-outline text-[16px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-[28px] pl-7 pr-2 bg-surface-container-low border border-outline-variant rounded text-on-surface font-body-sm text-body-sm focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim focus:outline-none transition-colors placeholder:text-outline" data-action="ACT_SEARCH_RECORDS" placeholder="Search operations..." type="text" />
      </div>
      {/* Trailing Icon Actions */}
      <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container transition-colors text-on-surface-variant hover:text-primary duration-150 ease-in-out" type="button" aria-label="Notifications" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container transition-colors text-on-surface-variant hover:text-primary duration-150 ease-in-out" type="button" aria-label="Help Outline" data-action-id="help-outline-2" onClick={actions?.["help-outline-2"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      {/* Trailing Primary Action */}
      <button className="h-[28px] px-sm bg-primary text-on-primary rounded font-body-md text-body-md hover:bg-primary-container transition-colors shadow-sm flex items-center gap-xs" data-action="ACT_CREATE_RECORD" type="button" data-action-id="new-task-3" onClick={actions?.["new-task-3"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                      New Task
                  </button>
      {/* Mobile Menu Toggle (Visible only md:hidden) */}
      <button className="md:hidden w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-on-surface-variant" type="button" aria-label="Menu" data-action-id="menu-4" onClick={actions?.["menu-4"]}>
      <Menu className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden relative">
      {/* SideNavBar (Hidden on mobile) */}
      <nav className="hidden md:flex bg-surface-container-low dark:bg-surface-container-lowest font-body-md text-body-md h-screen w-64 border-r border-outline-variant flex-col h-full py-lg px-md z-30 w-full md:w-72 md:flex-shrink-0">
      <div className="flex items-center gap-sm mb-lg px-xs">
      <div className="w-8 h-8 rounded bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
      <User className="text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-heading-sm text-heading-sm font-bold text-primary dark:text-primary-fixed-dim">TaskChip</div>
      <div className="text-outline text-[11px] font-mono-label text-mono-label">Utility v1.0</div>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar space-y-1">
      {/* Tabs */}
      {/* Active: Operations */}
      <a className="flex items-center gap-sm px-sm py-[6px] rounded text-primary dark:text-primary-fixed-dim font-bold border-r-2 border-primary bg-surface-container cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <LayoutDashboard className="text-[18px] icon-fill" aria-hidden={true} focusable="false" />
                          Operations
                      </a>
      {/* Inactive Tabs */}
      <a className="flex items-center gap-sm px-sm py-[6px] rounded text-on-surface-variant dark:text-outline hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-variant transition-colors cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
                          Editor
                      </a>
      <a className="flex items-center gap-sm px-sm py-[6px] rounded text-on-surface-variant dark:text-outline hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-variant transition-colors cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
                          Settings
                      </a>
      <a className="flex items-center gap-sm px-sm py-[6px] rounded text-on-surface-variant dark:text-outline hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-variant transition-colors cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="recovery-4" onClick={(event) => { event.preventDefault(); actions?.["recovery-4"]?.(); }}>
      <History className="text-[18px]" aria-hidden={true} focusable="false" />
                          Recovery
                      </a>
      </div>
      <div className="mt-auto pt-sm border-t border-outline-variant flex flex-col gap-sm">
      {/* CTA */}
      <button className="w-full h-[32px] bg-white border border-slate-200 text-slate-900 rounded font-body-md text-body-md hover:bg-slate-50 transition-colors shadow-sm flex items-center justify-center gap-xs" type="button" data-action-id="export-json-5" onClick={actions?.["export-json-5"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
                          Export JSON
                      </button>
      {/* Footer Tabs */}
      <button className="w-full flex items-center gap-sm px-sm py-[6px] rounded text-error hover:bg-error-container transition-colors cursor-pointer active:opacity-80 transition-opacity" type="button" data-action-id="clear-cache-6" onClick={actions?.["clear-cache-6"]}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
                          Clear Cache
                      </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-background">
      {/* Contextual Action Banner (Retry Load) */}
      <div className="bg-surface-container-high border-b border-outline-variant px-md py-xs flex justify-between items-center text-on-surface-variant">
      <div className="flex items-center gap-xs">
      <TriangleAlert className="text-[14px] text-error" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-error">Data sync delayed.</span>
      </div>
      <button className="font-label-caps text-label-caps text-primary hover:text-primary-container uppercase" data-action="ACT_RETRY_LOAD" type="button" data-action-id="retry-load-7" onClick={actions?.["retry-load-7"]}>Retry Load</button>
      </div>
      {/* Page Header & Metrics */}
      <div className="px-md py-sm flex flex-col gap-sm border-b border-outline-variant bg-surface">
      <div className="flex justify-between items-end">
      <div>
      <h1 className="font-heading-sm text-heading-sm font-bold text-on-surface">Short Operations</h1>
      <p className="font-mono-label text-mono-label text-outline">Utility / Active Queue</p>
      </div>
      {/* Status Filters */}
      <div className="flex gap-xs bg-surface-container-low p-[2px] rounded border border-outline-variant">
      <button className="px-sm py-xs text-primary font-body-sm text-body-sm font-bold bg-white rounded shadow-sm" type="button" data-action-id="all-8" onClick={actions?.["all-8"]}>All</button>
      <button className="px-sm py-xs text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm rounded" type="button" data-action-id="active-9" onClick={actions?.["active-9"]}>Active</button>
      <button className="px-sm py-xs text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm rounded" type="button" data-action-id="done-10" onClick={actions?.["done-10"]}>Done</button>
      </div>
      </div>
      {/* Summary Metrics Bar */}
      <div className="flex gap-sm mt-xs">
      <div className="flex-1 bg-white border border-outline-variant rounded p-sm flex items-center justify-between">
      <span className="font-label-caps text-label-caps text-outline uppercase">Active Tasks</span>
      <span className="font-mono-label text-mono-label text-on-surface font-bold">14</span>
      </div>
      <div className="flex-1 bg-white border border-outline-variant rounded p-sm flex items-center justify-between">
      <span className="font-label-caps text-label-caps text-outline uppercase">Done Today</span>
      <span className="font-mono-label text-mono-label text-primary font-bold">8</span>
      </div>
      <div className="flex-1 bg-white border border-outline-variant rounded p-sm flex items-center justify-between">
      <span className="font-label-caps text-label-caps text-outline uppercase">Archived</span>
      <span className="font-mono-label text-mono-label text-outline font-bold">1,024</span>
      </div>
      </div>
      </div>
      {/* Data Area Split (List + Preview) */}
      <div className="flex-1 flex overflow-hidden">
      {/* Task List Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar border-r border-outline-variant bg-white">
      {/* Table Header */}
      <div className="sticky top-0 bg-surface-container-lowest border-b border-outline-variant flex px-md py-[6px] z-10 text-outline font-label-caps text-label-caps uppercase">
      <div className="w-8"></div>
      <div className="flex-1">Task ID &amp; Title</div>
      <div className="w-24">Status</div>
      <div className="w-32 text-right">Last Activity</div>
      </div>
      {/* List Items */}
      {/* Active Selected Item */}
      <div className="flex items-center px-md py-[8px] border-b border-outline-variant hover:bg-slate-50 cursor-pointer bg-primary-fixed-dim/20 transition-colors" data-action="ACT_SELECT_RECORD">
      <div className="w-8 flex justify-center">
      <div className="w-[6px] h-[6px] rounded-full bg-blue-600"></div>
      </div>
      <div className="flex-1 flex flex-col">
      <span className="font-mono-label text-mono-label text-primary">TSK-8821</span>
      <span className="font-body-sm text-body-sm text-on-surface font-bold">Optimize Search Index Payload</span>
      </div>
      <div className="w-24 flex items-center">
      <span className="inline-flex items-center gap-[4px] px-[6px] py-[2px] bg-slate-100 border border-slate-200 rounded text-[10px] font-mono-label text-slate-700">
      <RefreshCw className="text-[10px]" aria-hidden={true} focusable="false" />
                                      In Progress
                                  </span>
      </div>
      <div className="w-32 text-right font-mono-label text-mono-label text-outline">
                                  2m ago
                              </div>
      </div>
      {/* Inactive Items */}
      <div className="flex items-center px-md py-[8px] border-b border-outline-variant hover:bg-slate-50 cursor-pointer transition-colors" data-action="ACT_SELECT_RECORD">
      <div className="w-8 flex justify-center">
      <div className="w-[6px] h-[6px] rounded-full bg-blue-600"></div>
      </div>
      <div className="flex-1 flex flex-col">
      <span className="font-mono-label text-mono-label text-outline">TSK-8820</span>
      <span className="font-body-sm text-body-sm text-on-surface">Update Dependencies (Q3)</span>
      </div>
      <div className="w-24 flex items-center">
      <span className="inline-flex items-center gap-[4px] px-[6px] py-[2px] bg-slate-100 border border-slate-200 rounded text-[10px] font-mono-label text-slate-700">
      <BadgeHelp className="text-[10px]" aria-hidden={true} focusable="false" />
                                      Pending
                                  </span>
      </div>
      <div className="w-32 text-right font-mono-label text-mono-label text-outline">
                                  15m ago
                              </div>
      </div>
      <div className="flex items-center px-md py-[8px] border-b border-outline-variant hover:bg-slate-50 cursor-pointer transition-colors" data-action="ACT_SELECT_RECORD">
      <div className="w-8 flex justify-center">
      <div className="w-[6px] h-[6px] rounded-full bg-green-500"></div>
      </div>
      <div className="flex-1 flex flex-col">
      <span className="font-mono-label text-mono-label text-outline">TSK-8819</span>
      <span className="font-body-sm text-body-sm text-on-surface text-slate-500 line-through">Deploy Cache Worker v2</span>
      </div>
      <div className="w-24 flex items-center">
      <span className="inline-flex items-center gap-[4px] px-[6px] py-[2px] bg-slate-100 border border-slate-200 rounded text-[10px] font-mono-label text-slate-700">
      <Check className="text-[10px]" aria-hidden={true} focusable="false" />
                                      Done
                                  </span>
      </div>
      <div className="w-32 text-right font-mono-label text-mono-label text-outline">
                                  1h ago
                              </div>
      </div>
      <div className="flex items-center px-md py-[8px] border-b border-outline-variant hover:bg-slate-50 cursor-pointer transition-colors" data-action="ACT_SELECT_RECORD">
      <div className="w-8 flex justify-center">
      <div className="w-[6px] h-[6px] rounded-full bg-red-500"></div>
      </div>
      <div className="flex-1 flex flex-col">
      <span className="font-mono-label text-mono-label text-outline">TSK-8818</span>
      <span className="font-body-sm text-body-sm text-on-surface">Investigate Memory Leak #442</span>
      </div>
      <div className="w-24 flex items-center">
      <span className="inline-flex items-center gap-[4px] px-[6px] py-[2px] bg-red-50 border border-red-200 rounded text-[10px] font-mono-label text-red-700">
      <CircleAlert className="text-[10px]" aria-hidden={true} focusable="false" />
                                      Blocked
                                  </span>
      </div>
      <div className="w-32 text-right font-mono-label text-mono-label text-outline">
                                  3h ago
                              </div>
      </div>
      {/* Load More... */}
      <div className="px-md py-[8px] text-center">
      <span className="font-mono-label text-mono-label text-primary hover:underline cursor-pointer">Load more records...</span>
      </div>
      </div>
      {/* Preview Panel (Bento/Glassmorphism feel but professional) */}
      <div className="w-[320px] bg-surface-container-lowest hidden lg:flex flex-col overflow-y-auto no-scrollbar relative shadow-[-4px_0_12px_rgba(0,0,0,0.02)]">
      <div className="p-md border-b border-outline-variant flex justify-between items-center sticky top-0 bg-surface-container-lowest/90 backdrop-blur z-10">
      <span className="font-mono-label text-mono-label text-primary">TSK-8821</span>
      <button className="h-[24px] px-[8px] bg-white border border-slate-200 text-slate-900 rounded font-body-sm text-body-sm hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-[4px]" type="button" data-action-id="edit-11" onClick={actions?.["edit-11"]}>
      <Pencil className="text-[14px]" aria-hidden={true} focusable="false" />
                                  Edit
                              </button>
      </div>
      <div className="p-md flex flex-col gap-md">
      <div>
      <h2 className="font-heading-sm text-heading-sm font-bold text-on-surface mb-xs">Optimize Search Index Payload</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">The current payload size for the search index update is causing latency spikes during peak hours. Need to chunk the updates or implement differential sync.</p>
      </div>
      {/* Metadata Bento Grid */}
      <div className="grid grid-cols-2 gap-[8px]">
      <div className="bg-surface p-[8px] rounded border border-outline-variant flex flex-col gap-[2px]">
      <span className="font-label-caps text-label-caps text-outline uppercase">Assignee</span>
      <div className="flex items-center gap-[4px]">
      <div className="w-[16px] h-[16px] rounded-full bg-secondary flex items-center justify-center text-white text-[8px] font-bold">A</div>
      <span className="font-body-sm text-body-sm text-on-surface">Alex M.</span>
      </div>
      </div>
      <div className="bg-surface p-[8px] rounded border border-outline-variant flex flex-col gap-[2px]">
      <span className="font-label-caps text-label-caps text-outline uppercase">Priority</span>
      <span className="font-body-sm text-body-sm text-on-surface font-bold text-orange-600">High</span>
      </div>
      <div className="bg-surface p-[8px] rounded border border-outline-variant flex flex-col gap-[2px]">
      <span className="font-label-caps text-label-caps text-outline uppercase">Created</span>
      <span className="font-mono-label text-mono-label text-on-surface">2023-10-27</span>
      </div>
      <div className="bg-surface p-[8px] rounded border border-outline-variant flex flex-col gap-[2px]">
      <span className="font-label-caps text-label-caps text-outline uppercase">Environment</span>
      <span className="font-mono-label text-mono-label text-on-surface">Production</span>
      </div>
      </div>
      {/* Quick Inputs */}
      <div className="flex flex-col gap-[8px] mt-xs">
      <label className="flex flex-col gap-[2px]">
      <span className="font-label-caps text-label-caps text-outline uppercase">Quick Note</span>
      <input className="w-full h-[28px] px-[8px] bg-white border border-slate-300 rounded text-on-surface font-body-sm text-body-sm focus:border-primary focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors placeholder:text-outline" placeholder="Add a status update..." type="text" />
      </label>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
