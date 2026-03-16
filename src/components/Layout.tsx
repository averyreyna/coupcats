import { useState, useMemo } from "react";
import type { MapRef } from "react-map-gl/maplibre";
import type { CoupEvent } from "../types/coup";
import type { NavId } from "./Sidebar";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import EventsPanel from "./EventsPanel";
import FiltersPanel from "./FiltersPanel";

export interface LayoutProps {
  children: React.ReactNode;
  mapRef: React.RefObject<MapRef | null>;
  allEvents: CoupEvent[];
}

export default function Layout({ children, mapRef, allEvents }: LayoutProps) {
  const [activeNav, setActiveNav] = useState<NavId>("home");

  const regions = useMemo(
    () => [...new Set(allEvents.map((event) => event.region))].sort(),
    [allEvents]
  );
  const tags = useMemo(
    () =>
      [...new Set(allEvents.flatMap((event) => event.tags ?? []))].sort(),
    [allEvents]
  );

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden md:flex-row">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <Toolbar regions={regions} tags={tags} />
        <div className="relative flex min-h-0 flex-1 min-w-0">
          {activeNav === "events" && (
            <div className="fixed bottom-0 left-0 z-30 flex max-h-[85vh] w-full shrink-0 overflow-hidden rounded-t-xl border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] shadow-2xl transition-all duration-300 ease-out md:relative md:w-[320px] md:max-h-none md:rounded-none md:border-r md:border-t-0 md:pb-0 md:shadow-none">
              <EventsPanel allEvents={allEvents} mapRef={mapRef} />
            </div>
          )}
          {activeNav === "filters" && (
            <div className="fixed bottom-0 left-0 z-30 flex max-h-[85vh] w-full shrink-0 overflow-hidden rounded-t-xl border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] shadow-2xl transition-all duration-300 ease-out md:relative md:w-[320px] md:max-h-none md:rounded-none md:border-r md:border-t-0 md:pb-0 md:shadow-none">
              <FiltersPanel
                onClose={() => setActiveNav("home")}
                regions={regions}
                tags={tags}
              />
            </div>
          )}
          <div className="min-h-0 min-w-0 flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
