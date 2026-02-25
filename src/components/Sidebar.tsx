import { useState } from "react";
import {
  Globe,
  List,
  Filter,
  Info,
  Settings,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";

export type NavId = "home" | "events" | "filters" | "about";

const NAV_ITEMS: { id: NavId; icon: typeof Globe; label: string }[] = [
  { id: "home", icon: Globe, label: "Home" },
  { id: "events", icon: List, label: "Events" },
  { id: "filters", icon: Filter, label: "Filters" },
  { id: "about", icon: Info, label: "About" },
];

export interface SidebarProps {
  activeNav: NavId;
  onNavChange: (id: NavId) => void;
}

export default function Sidebar({ activeNav, onNavChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`flex h-14 w-full shrink-0 flex-row items-center justify-around border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] transition-[width] duration-300 ease-in-out md:h-full md:flex-col md:justify-start md:border-r md:border-t-0 md:pb-0 ${collapsed ? "md:w-[72px]" : "md:w-[280px]"}`}
    >
      <div className="flex flex-1 items-center justify-around gap-0 md:hidden">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
          <Globe className="h-5 w-5" />
        </div>
        {NAV_ITEMS.map(({ id, icon: Icon, label }) => {
          const isActive = activeNav === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onNavChange(id)}
              className={`flex min-h-[44px] min-w-[44px] flex-shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-gray-800/60 ${isActive ? "text-amber-400" : "text-gray-400"}`}
              title={label}
            >
              <Icon className="h-5 w-5" />
            </button>
          );
        })}
      </div>

      <div className="hidden md:flex md:h-full md:w-full md:flex-col">
        <div className="flex min-h-[56px] items-center gap-3 border-b border-gray-800 px-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
            <Globe className="h-5 w-5" />
          </div>
          {!collapsed && (
            <span className="truncate text-sm font-semibold text-white">
              CoupView
            </span>
          )}
        </div>

        <nav className="flex flex-1 flex-col gap-0.5 overflow-hidden py-2">
          {NAV_ITEMS.map(({ id, icon: Icon, label }) => {
            const isActive = activeNav === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onNavChange(id)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 text-left transition-all duration-200
                  hover:scale-[1.02] hover:bg-gray-800/60
                  ${collapsed ? "justify-center px-0" : ""}
                  ${isActive ? "border-l-2 border-amber-500 bg-gray-800/40" : "border-l-2 border-transparent"}
                `}
                title={collapsed ? label : undefined}
              >
                <Icon
                  className={`h-5 w-5 shrink-0 ${isActive ? "text-amber-400" : "text-gray-400"}`}
                />
                {!collapsed && (
                  <span
                    className={`truncate text-sm ${isActive ? "text-white" : "text-gray-300"}`}
                  >
                    {label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-gray-800 py-2">
          <button
            type="button"
            className="flex w-full items-center gap-3 px-3 py-2.5 text-left text-gray-400 transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800/60 hover:text-gray-300"
            title={collapsed ? "Settings" : undefined}
          >
            <Settings className="h-5 w-5 shrink-0" />
            {!collapsed && <span className="truncate text-sm">Settings</span>}
          </button>
          <button
            type="button"
            onClick={() => setCollapsed((c) => !c)}
            className="flex w-full items-center justify-center gap-3 px-3 py-2.5 text-gray-400 transition-all duration-200 hover:bg-gray-800/60 hover:text-gray-300"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <PanelLeft className="h-5 w-5" />
            ) : (
              <>
                <PanelLeftClose className="h-5 w-5 shrink-0" />
                <span className="truncate text-sm">Collapse</span>
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
