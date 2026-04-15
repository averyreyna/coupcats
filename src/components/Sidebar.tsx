import { useState } from "react";
import { Globe, List, Filter, Info, PanelLeftClose, PanelLeft } from "lucide-react";
import { css } from "styled-system/css";

export type NavId = "home" | "events" | "filters" | "about";

const NAV_ITEMS: { id: NavId; icon: typeof Globe; label: string }[] = [
  { id: "home",    icon: Globe,   label: "Home" },
  { id: "events",  icon: List,    label: "Events" },
  { id: "filters", icon: Filter,  label: "Filters" },
  { id: "about",   icon: Info,    label: "About" },
];

export interface SidebarProps {
  activeNav: NavId;
  onNavChange: (id: NavId) => void;
}

export default function Sidebar({ activeNav, onNavChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={css({
        display: "flex",
        height: "14",
        width: "full",
        flexShrink: "0",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderTopWidth: "0.5px",
        borderTopStyle: "solid",
        borderTopColor: "var(--colors-border-default)",
        backgroundColor: "var(--colors-bg-panel)",
        boxShadow: "0 -4px 16px color-mix(in srgb, #000 6%, transparent)",
        paddingBottom: "env(safe-area-inset-bottom)",
        transition: "width 300ms ease-in-out",
        md: {
          height: "full",
          flexDirection: "column",
          justifyContent: "flex-start",
          borderTopWidth: "0",
          borderRightWidth: "0.5px",
          borderRightStyle: "solid",
          borderRightColor: "var(--colors-border-default)",
          paddingBottom: "0",
          width: collapsed ? "72px" : "280px",
          boxShadow: "none",
        },
      })}
    >
      {/* Mobile bottom nav */}
      <div className={css({ display: "flex", flex: "1", alignItems: "center", justifyContent: "space-between", gap: "1.5", paddingInline: "2", md: { display: "none" } })}>
        <span className={css({ fontSize: "sm", fontWeight: "semibold", color: "var(--colors-text-primary)", paddingInline: "1" })}>
          CoupCats
        </span>
        {NAV_ITEMS.map(({ id, icon: Icon, label }) => {
          const isActive = activeNav === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onNavChange(id)}
              className={css({
                display: "flex",
                minHeight: "44px",
                minWidth: "44px",
                flexShrink: "0",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "lg",
                borderWidth: "0.5px",
                borderStyle: "solid",
                borderColor: isActive ? "var(--colors-accent-default)" : "var(--colors-border-default)",
                backgroundColor: isActive
                  ? "color-mix(in srgb, var(--colors-accent-muted) 65%, transparent)"
                  : "transparent",
                cursor: "pointer",
                color: isActive ? "var(--colors-accent-text)" : "var(--colors-text-muted)",
                _hover: { backgroundColor: "var(--colors-bg-hover)", color: "var(--colors-text-primary)" },
              })}
              title={label}
            >
              <Icon className={css({ height: "5", width: "5" })} />
            </button>
          );
        })}
      </div>

      {/* Desktop sidebar */}
      <div className={css({ display: "none", md: { display: "flex", height: "full", width: "full", flexDirection: "column" } })}>
        {/* Logo row */}
        <div className={css({ display: "flex", minHeight: "56px", alignItems: "center", justifyContent: collapsed ? "center" : "flex-start", borderBottomWidth: "0.5px", borderBottomStyle: "solid", borderBottomColor: "var(--colors-border-default)", paddingInline: "3.5" })}>
          {!collapsed && (
            <span className={css({ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "sm", fontWeight: "semibold", color: "var(--colors-text-primary)" })}>
              CoupCats
            </span>
          )}
        </div>

        {/* Nav items */}
        <nav className={css({ display: "flex", flex: "1", flexDirection: "column", gap: "1", overflow: "hidden", paddingBlock: "2.5", paddingInline: collapsed ? "1" : "2" })}>
          {NAV_ITEMS.map(({ id, icon: Icon, label }) => {
            const isActive = activeNav === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onNavChange(id)}
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "3",
                  minHeight: "40px",
                  paddingInline: collapsed ? "0" : "3",
                  paddingBlock: "2",
                  justifyContent: collapsed ? "center" : "flex-start",
                  textAlign: "left",
                  cursor: "pointer",
                  border: "none",
                  borderLeftWidth: "1px",
                  borderLeftStyle: "solid",
                  borderLeftColor: isActive ? "var(--colors-accent-default)" : "transparent",
                  borderRadius: "md",
                  backgroundColor: isActive
                    ? "color-mix(in srgb, var(--colors-accent-muted) 62%, transparent)"
                    : "transparent",
                  color: isActive ? "var(--colors-text-primary)" : "var(--colors-text-secondary)",
                  transition: "background-color 160ms ease, color 160ms ease, border-color 160ms ease",
                  _hover: {
                    backgroundColor: isActive
                      ? "color-mix(in srgb, var(--colors-accent-muted) 75%, transparent)"
                      : "var(--colors-bg-hover)",
                    color: "var(--colors-text-primary)",
                  },
                })}
                title={collapsed ? label : undefined}
              >
                <Icon className={css({ height: "5", width: "5", flexShrink: "0", color: isActive ? "var(--colors-accent-text)" : "var(--colors-text-muted)" })} />
                {!collapsed && (
                  <span className={css({ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "sm", color: isActive ? "var(--colors-text-primary)" : "var(--colors-text-secondary)" })}>
                    {label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className={css({ borderTopWidth: "0.5px", borderTopStyle: "solid", borderTopColor: "var(--colors-border-default)", paddingBlock: "2", paddingInline: collapsed ? "1" : "2" })}>
          <button
            type="button"
            onClick={() => setCollapsed((c) => !c)}
            className={css({ display: "flex", width: "full", minHeight: "40px", alignItems: "center", justifyContent: "center", gap: "3", border: "none", borderRadius: "md", paddingInline: "3", paddingBlock: "2", cursor: "pointer", color: "var(--colors-text-muted)", transition: "background-color 160ms ease, color 160ms ease", _hover: { backgroundColor: "var(--colors-bg-hover)", color: "var(--colors-text-secondary)" } })}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <PanelLeft className={css({ height: "5", width: "5" })} />
            ) : (
              <>
                <PanelLeftClose className={css({ height: "5", width: "5", flexShrink: "0" })} />
                <span className={css({ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "sm" })}>Collapse</span>
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
