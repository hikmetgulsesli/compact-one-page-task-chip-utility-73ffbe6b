// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Short Editor - Compact One Page Task Chip Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bell, ChevronDown, CircleAlert, CircleHelp, History, LayoutDashboard, Menu, Pencil, Save, Settings, Trash2 } from "lucide-react";


export type ShortEditorCompactOnePageTaskChipUtilityActionId = "export-json-1" | "menu-2" | "notifications-3" | "help-outline-4" | "new-task-5" | "cancel-6" | "save-task-7" | "operations-1" | "editor-2" | "settings-3" | "recovery-4" | "clear-cache-5";

export interface ShortEditorCompactOnePageTaskChipUtilityProps {
  actions?: Partial<Record<ShortEditorCompactOnePageTaskChipUtilityActionId, () => void>>;

}

export function ShortEditorCompactOnePageTaskChipUtility({ actions }: ShortEditorCompactOnePageTaskChipUtilityProps) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <aside className="flex flex-col h-full py-lg px-md w-64 border-r border-outline-variant bg-surface-container-low shrink-0 hidden md:flex">
      {/* Header */}
      <div className="mb-lg px-sm">
      <h1 className="font-heading-sm text-heading-sm font-bold text-primary">TaskChip</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Utility v1.0</p>
      </div>
      {/* Navigation Tabs */}
      <nav className="flex flex-col gap-xs flex-grow">
      {/* Operations (Inactive) */}
      <a className="flex items-center gap-md px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer active:opacity-80 rounded" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <LayoutDashboard className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Operations</span>
      </a>
      {/* Editor (Active) */}
      <a className="flex items-center gap-md px-sm py-sm text-primary font-bold border-r-2 border-primary cursor-pointer active:opacity-80 rounded bg-primary-fixed/20" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil  style={{fontVariationSettings: "'FILL' 1"}} className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Editor</span>
      </a>
      {/* Settings (Inactive) */}
      <a className="flex items-center gap-md px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer active:opacity-80 rounded" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      {/* Recovery (Inactive) */}
      <a className="flex items-center gap-md px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer active:opacity-80 rounded" href="#" data-action-id="recovery-4" onClick={(event) => { event.preventDefault(); actions?.["recovery-4"]?.(); }}>
      <History className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Recovery</span>
      </a>
      </nav>
      {/* Footer Actions */}
      <div className="mt-auto pt-sm border-t border-outline-variant">
      <a className="flex items-center gap-md px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer rounded" href="#" data-action-id="clear-cache-5" onClick={(event) => { event.preventDefault(); actions?.["clear-cache-5"]?.(); }}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Clear Cache</span>
      </a>
      <button className="mt-sm w-full bg-surface-container-highest text-on-surface font-body-md text-body-md py-xs rounded border border-outline-variant hover:bg-surface-variant transition-colors" type="button" data-action-id="export-json-1" onClick={actions?.["export-json-1"]}>
                      Export JSON
                  </button>
      </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex flex-col flex-grow h-full overflow-hidden">
      {/* TopAppBar (Shared Component) */}
      <header className="flex justify-between items-center w-full px-lg h-12 bg-surface border-b border-outline-variant z-40 shrink-0">
      {/* Left: Brand / Search space */}
      <div className="flex items-center gap-md">
      <span className="font-heading-sm text-heading-sm font-black text-on-surface hidden md:block">TaskChip Utility</span>
      <button className="md:hidden text-on-surface-variant p-xs" type="button" aria-label="Menu" data-action-id="menu-2" onClick={actions?.["menu-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Right: Actions */}
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:text-primary transition-colors duration-150 ease-in-out p-xs rounded-full" type="button" aria-label="Notifications" data-action-id="notifications-3" onClick={actions?.["notifications-3"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors duration-150 ease-in-out p-xs rounded-full mr-sm" type="button" aria-label="Help Outline" data-action-id="help-outline-4" onClick={actions?.["help-outline-4"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="bg-primary text-on-primary font-body-md text-body-md px-md h-[28px] rounded flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm" type="button" data-action-id="new-task-5" onClick={actions?.["new-task-5"]}>
                          New Task
                      </button>
      </div>
      </header>
      {/* Editor Canvas */}
      <main className="flex-grow p-container-padding overflow-y-auto bg-background">
      <div className="max-w-[720px] mx-auto w-full flex flex-col gap-md">
      {/* Page Header & Feedback State */}
      <div className="flex justify-between items-end mb-sm">
      <div>
      <h2 className="font-heading-sm text-heading-sm font-bold text-on-surface mb-xs">Short Editor</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Create or modify task parameters.</p>
      </div>
      {/* Unsaved Changes Indicator */}
      <div className="flex items-center gap-xs px-sm py-[2px] bg-tertiary-fixed border border-tertiary-fixed-dim rounded-full">
      <div className="w-[6px] h-[6px] rounded-full bg-tertiary"></div>
      <span className="font-mono-label text-mono-label text-on-tertiary-fixed">Unsaved Changes</span>
      </div>
      </div>
      {/* Form Container (Surface Level 1) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg shadow-sm">
      <form className="flex flex-col gap-lg">
      {/* Row 1: Title (Required + Error State) */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-secondary uppercase flex justify-between" htmlFor="task-title">
      <span>Task Title <span className="text-error">*</span></span>
      </label>
      {/* Error state active: border-error */}
      <input className="w-full h-[32px] px-sm bg-surface-container-lowest border border-error rounded font-body-md text-body-md text-on-surface placeholder:text-outline-variant input-error-ring" id="task-title" placeholder="Enter a descriptive title..." type="text" defaultValue="" />
      <div className="flex items-center gap-xs text-error mt-[2px]">
      <CircleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Title is required to save this task.</span>
      </div>
      </div>
      {/* Row 2: Description (Optional) */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-secondary uppercase flex justify-between" htmlFor="task-desc">
      <span>Description</span>
      <span className="text-outline-variant font-body-sm normal-case tracking-normal font-normal">Optional</span>
      </label>
      <textarea className="w-full p-sm bg-surface-container-lowest border border-outline-variant rounded font-body-md text-body-md text-on-surface placeholder:text-outline-variant input-focus-ring resize-y min-h-[64px]" id="task-desc" placeholder="Add technical details, acceptance criteria, or context..." rows={3}></textarea>
      </div>
      {/* Row 3: Priority & Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {/* Priority */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-secondary uppercase" htmlFor="task-priority">Priority</label>
      <div className="relative">
      <select className="w-full h-[32px] pl-sm pr-lg bg-surface-container-lowest border border-outline-variant rounded font-body-md text-body-md text-on-surface appearance-none input-focus-ring cursor-pointer" id="task-priority">
      <option value="p0">P0 - Critical</option>
      <option selected={true} value="p1">P1 - High</option>
      <option value="p2">P2 - Medium</option>
      <option value="p3">P3 - Low</option>
      </select>
      <ChevronDown className="absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Status */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-secondary uppercase">Status</label>
      {/* Custom segmented control for dense UI */}
      <div className="flex items-center bg-surface-container-low border border-outline-variant rounded h-[32px] p-[2px]">
      <label className="flex-1 h-full relative cursor-pointer group">
      <input defaultChecked={true} className="peer sr-only" name="status" type="radio" defaultValue="todo" />
      <div className="w-full h-full flex items-center justify-center font-body-md text-body-md text-on-surface-variant peer-checked:bg-surface-container-lowest peer-checked:text-on-surface peer-checked:shadow-sm rounded-[2px] transition-colors">
                                                  To Do
                                              </div>
      </label>
      <label className="flex-1 h-full relative cursor-pointer group">
      <input className="peer sr-only" name="status" type="radio" defaultValue="in-progress" />
      <div className="w-full h-full flex items-center justify-center font-body-md text-body-md text-on-surface-variant peer-checked:bg-surface-container-lowest peer-checked:text-on-surface peer-checked:shadow-sm rounded-[2px] transition-colors">
                                                  In Progress
                                              </div>
      </label>
      <label className="flex-1 h-full relative cursor-pointer group">
      <input className="peer sr-only" name="status" type="radio" defaultValue="blocked" />
      <div className="w-full h-full flex items-center justify-center font-body-md text-body-md text-on-surface-variant peer-checked:bg-error-container peer-checked:text-on-error-container peer-checked:shadow-sm rounded-[2px] transition-colors">
                                                  Blocked
                                              </div>
      </label>
      </div>
      </div>
      </div>
      {/* Divider */}
      <div className="h-[1px] w-full bg-outline-variant my-xs"></div>
      {/* Footer Actions */}
      <div className="flex justify-end gap-sm pt-xs">
      <button className="h-[32px] px-lg bg-surface-container-lowest border border-outline-variant text-on-surface font-heading-sm text-heading-sm rounded hover:bg-surface-variant transition-colors flex items-center justify-center" type="button" data-action-id="cancel-6" onClick={actions?.["cancel-6"]}>
                                      Cancel
                                  </button>
      <button className="h-[32px] px-lg bg-primary text-on-primary font-heading-sm text-heading-sm rounded hover:bg-primary-container transition-colors flex items-center justify-center gap-xs shadow-sm" type="button" data-action-id="save-task-7" onClick={actions?.["save-task-7"]}>
      <Save className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Save Task
                                  </button>
      </div>
      </form>
      </div>
      {/* Helper Text / Metadata */}
      <div className="text-center font-body-sm text-body-sm text-outline mt-sm">
                          Press <kbd className="font-mono-label bg-surface-container-high border border-outline-variant px-1 rounded text-on-surface">⌘</kbd> + <kbd className="font-mono-label bg-surface-container-high border border-outline-variant px-1 rounded text-on-surface">S</kbd> to quick save.
                      </div>
      </div>
      </main>
      </div>
    </>
  );
}
