import { useState, useMemo } from "react";
import { css } from "styled-system/css";
import type { MapRef } from "react-map-gl/maplibre";
import type { CoupEvent } from "../types/coup";
import type { NavId } from "./Sidebar";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import EventsPanel from "./EventsPanel";
import CountryPanel from "./CountryPanel";
import { useFilterStore } from "../store/useFilterStore";
import { getDataLookupName } from "../lib/countryNameMapping";
import FiltersPanel from "./FiltersPanel";

export interface LayoutProps {
  children: React.ReactNode;
  mapRef: React.RefObject<MapRef | null>;
  allEvents: CoupEvent[];
}

const panelSheetStyle = css({
  position: "fixed",
  bottom: "0",
  left: "0",
  zIndex: "30",
  display: "flex",
  maxHeight: "85vh",
  width: "full",
  flexShrink: "0",
  overflow: "hidden",
  borderTopLeftRadius: "2xl",
  borderTopRightRadius: "2xl",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderTopColor: "var(--colors-border-default)",
  backgroundColor: "color-mix(in srgb, var(--colors-bg-panel) 94%, var(--colors-bg-muted))",
  paddingBottom: "env(safe-area-inset-bottom)",
  boxShadow: "0 -12px 28px color-mix(in srgb, #000 12%, transparent)",
  transition: "all 300ms ease-out",
  md: {
    position: "relative",
    bottom: "auto",
    left: "auto",
    maxHeight: "none",
    width: "320px",
    minWidth: "320px",
    flexBasis: "320px",
    borderTopWidth: "0",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    borderRightWidth: "1px",
    borderRightStyle: "solid",
    borderRightColor: "var(--colors-border-default)",
    paddingBottom: "0",
    boxShadow: "none",
  },
});

const panelSheetRightStyle = css({
  position: "fixed",
  bottom: "0",
  right: "0",
  zIndex: "30",
  display: "flex",
  maxHeight: "85vh",
  width: "full",
  flexShrink: "0",
  overflow: "hidden",
  borderTopLeftRadius: "2xl",
  borderTopRightRadius: "2xl",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderTopColor: "var(--colors-border-default)",
  backgroundColor: "color-mix(in srgb, var(--colors-bg-panel) 94%, var(--colors-bg-muted))",
  paddingBottom: "env(safe-area-inset-bottom)",
  boxShadow: "0 -12px 28px color-mix(in srgb, #000 12%, transparent)",
  transition: "all 300ms ease-out",
  md: {
    position: "relative",
    bottom: "auto",
    right: "auto",
    maxHeight: "none",
    width: "320px",
    minWidth: "320px",
    flexBasis: "320px",
    borderTopWidth: "0",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    borderLeftWidth: "1px",
    borderLeftStyle: "solid",
    borderLeftColor: "var(--colors-border-default)",
    paddingBottom: "0",
    boxShadow: "none",
  },
});

export default function Layout({ children, mapRef, allEvents }: LayoutProps) {
  const [activeNav, setActiveNav] = useState<NavId>("home");
  const selectedCountry = useFilterStore((s) => s.selectedCountry);
  const setSelectedCountry = useFilterStore((s) => s.setSelectedCountry);

  const regions = useMemo(
    () => [...new Set(allEvents.map((event) => event.region))].sort(),
    [allEvents]
  );
  const tags = useMemo(
    () => [...new Set(allEvents.flatMap((event) => event.tags ?? []))].sort(),
    [allEvents]
  );

  const countryEvents = useMemo(() => {
    const cowLookup = getDataLookupName(selectedCountry ?? "");
    return allEvents.filter((event) => event.country === cowLookup);
  }, [allEvents, selectedCountry]);

  return (
    <div className={css({ display: "flex", height: "100vh", width: "100vw", flexDirection: "column", overflow: "hidden", md: { flexDirection: "row" } })}>
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
      <div className={css({ display: "flex", minHeight: "0", minWidth: "0", flex: "1", flexDirection: "column" })}>
        <Toolbar regions={regions} tags={tags} />
        <div className={css({ position: "relative", display: "flex", minHeight: "0", flex: "1", minWidth: "0" })}>
          {activeNav === "events" && (
            <div className={panelSheetStyle}>
              <EventsPanel allEvents={allEvents} mapRef={mapRef} />
            </div>
          )}
          {selectedCountry && (
            <div className={panelSheetRightStyle}>
              <CountryPanel
                country={selectedCountry}
                events={countryEvents}
                onClose={() => setSelectedCountry(null)}
              />
            </div>
          )}
          {activeNav === "filters" && (
            <div className={panelSheetStyle}>
              <FiltersPanel
                onClose={() => setActiveNav("home")}
                regions={regions}
                tags={tags}
              />
            </div>
          )}
          <div className={css({ minHeight: "0", minWidth: "0", flex: "1" })}>{children}</div>
        </div>
      </div>
    </div>
  );
}
