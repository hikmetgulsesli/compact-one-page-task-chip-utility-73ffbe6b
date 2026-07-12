// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - Compact One Page Task Chip Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bell, CheckCircle2, CircleHelp, Columns3, History, LayoutDashboard, List, Menu, Pencil, Plus, Save, Settings, Trash2, X } from "lucide-react";


export type SettingsAndPreferencesCompactOnePageTaskChipUtilityActionId = "export-json-1" | "menu-2" | "notifications-3" | "help-outline-4" | "new-task-5" | "import-6" | "close-7" | "close-8" | "close-9" | "new-rule-10" | "reset-to-defaults-11" | "refresh-state-12" | "save-preferences-13" | "operations-1" | "editor-2" | "settings-3" | "recovery-4" | "clear-cache-5";

export interface SettingsAndPreferencesCompactOnePageTaskChipUtilityProps {
  actions?: Partial<Record<SettingsAndPreferencesCompactOnePageTaskChipUtilityActionId, () => void>>;

}

export function SettingsAndPreferencesCompactOnePageTaskChipUtility({ actions }: SettingsAndPreferencesCompactOnePageTaskChipUtilityProps) {
  return (
    <>
      {/* JSON Component: SideNavBar */}
      <nav className="hidden md:flex bg-surface-container-low dark:bg-surface-container-lowest text-primary dark:text-primary-fixed-dim font-body-md text-body-md h-screen w-64 border-r border-outline-variant flex-col py-lg px-md shrink-0">
      {/* Header */}
      <div className="mb-lg px-sm">
      <div className="font-heading-sm text-heading-sm font-bold text-primary dark:text-primary-fixed-dim">TaskChip</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Utility v1.0</div>
      </div>
      {/* Tabs */}
      <div className="flex flex-col gap-xs flex-1">
      <a className="flex items-center gap-sm px-sm py-[6px] rounded-DEFAULT text-on-surface-variant dark:text-outline hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-variant transition-colors cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <LayoutDashboard className="text-[18px]" aria-hidden={true} focusable="false" />
                      Operations
                  </a>
      <a className="flex items-center gap-sm px-sm py-[6px] rounded-DEFAULT text-on-surface-variant dark:text-outline hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-variant transition-colors cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
                      Editor
                  </a>
      {/* Active State Navigation */}
      <a className="flex items-center gap-sm px-sm py-[6px] rounded-DEFAULT bg-surface-container-high text-primary dark:text-primary-fixed-dim font-bold border-r-2 border-primary cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} className="text-[18px]" aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      <a className="flex items-center gap-sm px-sm py-[6px] rounded-DEFAULT text-on-surface-variant dark:text-outline hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-variant transition-colors cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="recovery-4" onClick={(event) => { event.preventDefault(); actions?.["recovery-4"]?.(); }}>
      <History className="text-[18px]" aria-hidden={true} focusable="false" />
                      Recovery
                  </a>
      </div>
      {/* CTA & Footer */}
      <div className="mt-auto flex flex-col gap-sm border-t border-outline-variant pt-md">
      <button className="w-full bg-surface border border-outline-variant text-on-surface px-sm py-1 h-[28px] rounded-DEFAULT font-body-sm text-body-sm flex justify-center items-center hover:bg-surface-container transition-colors cursor-pointer active:opacity-80" type="button" data-action-id="export-json-1" onClick={actions?.["export-json-1"]}>
                       Export JSON
                  </button>
      <a className="flex items-center gap-sm px-sm py-[6px] rounded-DEFAULT text-on-surface-variant dark:text-outline hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-variant transition-colors cursor-pointer active:opacity-80 transition-opacity mt-sm" href="#" data-action-id="clear-cache-5" onClick={(event) => { event.preventDefault(); actions?.["clear-cache-5"]?.(); }}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
                      Clear Cache
                  </a>
      </div>
      </nav>
      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
      {/* JSON Component: TopAppBar */}
      <header className="bg-surface dark:bg-background text-primary dark:text-primary-fixed-dim font-heading-sm text-heading-sm full-width top-0 sticky border-b border-outline-variant dark:border-outline flex justify-between items-center w-full px-lg h-12 z-40 shrink-0">
      {/* Left */}
      <div className="flex items-center gap-md">
      {/* Mobile Nav Toggle */}
      <button className="md:hidden text-on-surface-variant hover:text-primary transition-colors cursor-pointer" type="button" aria-label="Menu" data-action-id="menu-2" onClick={actions?.["menu-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="font-heading-sm text-heading-sm font-black text-on-surface dark:text-on-primary-fixed hidden md:block">TaskChip Utility</div>
      <div className="font-heading-sm text-heading-sm font-black text-on-surface dark:text-on-primary-fixed md:hidden">Settings</div>
      </div>
      {/* Right Actions */}
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-primary-fixed transition-colors duration-150 ease-in-out cursor-pointer active:opacity-80 flex items-center justify-center" type="button" aria-label="Notifications" data-action-id="notifications-3" onClick={actions?.["notifications-3"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-primary-fixed transition-colors duration-150 ease-in-out cursor-pointer active:opacity-80 flex items-center justify-center" type="button" aria-label="Help Outline" data-action-id="help-outline-4" onClick={actions?.["help-outline-4"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="bg-primary text-on-primary px-3 h-[28px] font-body-sm text-body-sm font-medium rounded-DEFAULT hover:opacity-90 transition-opacity cursor-pointer active:opacity-80 border border-transparent" type="button" data-action-id="new-task-5" onClick={actions?.["new-task-5"]}>
                          New Task
                      </button>
      </div>
      </header>
      {/* Scrollable Content Canvas */}
      <main className="flex-1 overflow-y-auto p-md md:p-lg bg-background">
      <div className="max-w-4xl mx-auto flex flex-col gap-lg pb-xl">
      {/* Page Header */}
      <div>
      <h1 className="font-heading-sm text-heading-sm font-semibold text-on-surface">Settings &amp; Preferences</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Configure workflow density and default behaviors.</p>
      </div>
      {/* Settings Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md items-start">
      {/* Panel: Display */}
      <section className="bg-surface border border-outline-variant rounded-DEFAULT p-md flex flex-col gap-md">
      <h2 className="font-heading-sm text-heading-sm font-medium border-b border-outline-variant pb-xs mb-xs text-on-surface">Display &amp; Layout</h2>
      {/* Control: Default View */}
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs uppercase tracking-wider">Default View Mode</label>
      <div className="flex gap-sm">
      <label className="flex-1 flex items-center gap-sm p-sm border border-outline-variant rounded-DEFAULT bg-surface-container-lowest cursor-pointer hover:bg-surface-container-low transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-fixed">
      <input defaultChecked={true} className="text-primary focus:ring-primary h-4 w-4 border-outline-variant" name="view_mode" type="radio" defaultValue="list" />
      <List className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">List</span>
      </label>
      <label className="flex-1 flex items-center gap-sm p-sm border border-outline-variant rounded-DEFAULT bg-surface-container-lowest cursor-pointer hover:bg-surface-container-low transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-fixed">
      <input className="text-primary focus:ring-primary h-4 w-4 border-outline-variant" name="view_mode" type="radio" defaultValue="board" />
      <Columns3 className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">Board</span>
      </label>
      </div>
      </div>
      {/* Control: Density */}
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs uppercase tracking-wider">Information Density</label>
      <select className="w-full h-[32px] px-sm py-0 border border-outline-variant rounded-DEFAULT bg-surface text-on-surface font-body-sm text-body-sm focus:border-primary focus:ring-1 focus:ring-primary-fixed-dim outline-none transition-shadow">
      <option value="compact">Compact (High Throughput)</option>
      <option value="comfortable">Comfortable (Better Legibility)</option>
      </select>
      </div>
      </section>
      {/* Panel: Notifications */}
      <section className="bg-surface border border-outline-variant rounded-DEFAULT p-md flex flex-col gap-md">
      <h2 className="font-heading-sm text-heading-sm font-medium border-b border-outline-variant pb-xs mb-xs text-on-surface">Alerts &amp; System</h2>
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs uppercase tracking-wider">Notification Level</label>
      <div className="flex flex-col gap-xs">
      <label className="flex items-center gap-sm py-xs cursor-pointer group">
      <input className="text-primary focus:ring-primary h-4 w-4 border-outline-variant" name="notif_level" type="radio" defaultValue="all" />
      <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Everything (All events)</span>
      </label>
      <label className="flex items-center gap-sm py-xs cursor-pointer group">
      <input defaultChecked={true} className="text-primary focus:ring-primary h-4 w-4 border-outline-variant" name="notif_level" type="radio" defaultValue="mentions" />
      <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Mentions &amp; Assignments</span>
      </label>
      <label className="flex items-center gap-sm py-xs cursor-pointer group">
      <input className="text-primary focus:ring-primary h-4 w-4 border-outline-variant" name="notif_level" type="radio" defaultValue="errors" />
      <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Errors &amp; Critical Only</span>
      </label>
      </div>
      </div>
      <div className="mt-auto">
      <label className="flex items-center gap-sm py-xs cursor-pointer">
      <input defaultChecked={true} className="text-primary focus:ring-primary h-4 w-4 border-outline-variant rounded-sm" type="checkbox" />
      <span className="font-body-sm text-body-sm text-on-surface-variant">Play sound on new assignment</span>
      </label>
      </div>
      </section>
      {/* Panel: Saved Filters (Spans full width) */}
      <section className="md:col-span-2 bg-surface border border-outline-variant rounded-DEFAULT p-md flex flex-col gap-sm">
      <div className="flex justify-between items-center border-b border-outline-variant pb-xs mb-xs">
      <h2 className="font-heading-sm text-heading-sm font-medium text-on-surface">Saved Query Filters</h2>
      <button className="font-body-sm text-body-sm text-primary hover:underline" type="button" data-action-id="import-6" onClick={actions?.["import-6"]}>Import...</button>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs">Manage quick-access filters for the Operations view.</p>
      <div className="flex flex-wrap gap-sm">
      {/* Task Chip Style for Filters */}
      <div className="flex items-center bg-surface-container-low border border-outline-variant rounded-full pl-2 pr-1 py-[2px] gap-1 group hover:bg-surface-container transition-colors">
      <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
      <span className="font-mono-label text-mono-label text-on-surface pl-1">status:critical</span>
      <button className="text-on-surface-variant hover:text-error ml-1 flex items-center justify-center rounded-full hover:bg-outline-variant/20 p-[2px]" type="button" aria-label="Close" data-action-id="close-7" onClick={actions?.["close-7"]}>
      <X className="text-[14px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex items-center bg-surface-container-low border border-outline-variant rounded-full pl-2 pr-1 py-[2px] gap-1 group hover:bg-surface-container transition-colors">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
      <span className="font-mono-label text-mono-label text-on-surface pl-1">assignee:@me</span>
      <button className="text-on-surface-variant hover:text-error ml-1 flex items-center justify-center rounded-full hover:bg-outline-variant/20 p-[2px]" type="button" aria-label="Close" data-action-id="close-8" onClick={actions?.["close-8"]}>
      <X className="text-[14px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex items-center bg-surface-container-low border border-outline-variant rounded-full pl-2 pr-1 py-[2px] gap-1 group hover:bg-surface-container transition-colors">
      <span className="w-1.5 h-1.5 rounded-full bg-surface-variant border border-outline-variant"></span>
      <span className="font-mono-label text-mono-label text-on-surface pl-1">due:today</span>
      <button className="text-on-surface-variant hover:text-error ml-1 flex items-center justify-center rounded-full hover:bg-outline-variant/20 p-[2px]" type="button" aria-label="Close" data-action-id="close-9" onClick={actions?.["close-9"]}>
      <X className="text-[14px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <button className="flex items-center border border-dashed border-outline-variant rounded-full px-2 py-[2px] gap-1 hover:border-primary hover:text-primary text-on-surface-variant transition-colors" type="button" data-action-id="new-rule-10" onClick={actions?.["new-rule-10"]}>
      <Plus className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">New Rule</span>
      </button>
      </div>
      </section>
      </div>
      {/* Footer Actions */}
      <div className="mt-lg pt-md border-t border-outline-variant flex flex-col-reverse md:flex-row justify-between items-center gap-md">
      <button className="font-body-sm text-body-sm text-error hover:text-on-error-container hover:underline px-2 py-1" type="button" data-action-id="reset-to-defaults-11" onClick={actions?.["reset-to-defaults-11"]}>
                              Reset to Defaults
                          </button>
      <div className="flex gap-sm w-full md:w-auto">
      <button className="flex-1 md:flex-none h-[32px] px-md bg-surface border border-outline-variant text-on-surface font-body-sm text-body-sm rounded-DEFAULT hover:bg-surface-container transition-colors focus:ring-2 focus:ring-primary-fixed-dim outline-none active:opacity-80" type="button" data-action-id="refresh-state-12" onClick={actions?.["refresh-state-12"]}>
                                  Refresh State
                              </button>
      <button className="flex-1 md:flex-none h-[32px] px-md bg-primary text-on-primary font-body-sm text-body-sm rounded-DEFAULT hover:bg-primary-fixed-variant transition-colors shadow-sm focus:ring-2 focus:ring-primary-fixed-dim outline-none active:opacity-80 flex items-center justify-center gap-2" id="savePreferencesBtn" type="button" data-action-id="save-preferences-13" onClick={actions?.["save-preferences-13"]}>
      <Save className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Save Preferences
                              </button>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* Feedback Toast (Hidden by default) */}
      <div className="fixed bottom-lg left-1/2 -translate-x-1/2 md:translate-x-0 md:left-lg bg-surface border border-outline-variant shadow-sm rounded-DEFAULT flex items-stretch overflow-hidden transition-colors duration-300 transform translate-y-12 opacity-0 pointer-events-none z-50" id="saveToast">
      {/* Status Indicator Bar */}
      <div className="w-1 bg-primary"></div>
      <div className="py-2 px-md flex items-center gap-sm">
      <CheckCircle2 className="text-primary text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">Preferences saved successfully.</span>
      </div>
      </div>
      
    </>
  );
}
