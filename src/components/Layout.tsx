import { useState, useMemo } from "react";
import type { MapRef } from "react-map-gl/maplibre";
import type { CoupEvent } from "../types/coup";
import type { NavId } from "./Sidebar";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import EventsPanel from "./EventsPanel";

export interface LayoutProps {
  children: React.ReactNode;
  mapRef: React.RefObject<MapRef | null>;
  events: CoupEvent[];
}

export default function Layout({ children, mapRef, events }: LayoutProps) {
  const [activeNav, setActiveNav] = useState<NavId>("home");

  const regions = useMemo(
    () => [...new Set(events.map((e) => e.region))].sort(),
    [events]
  );
  const tags = useMemo(
    () =>
      [...new Set(events.flatMap((e) => e.tags ?? []))].sort(),
    [events]
  );

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden md:flex-row">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <Toolbar regions={regions} tags={tags} />
        <div className="relative flex min-h-0 flex-1 min-w-0">
          {activeNav === "events" && (
            <div className="fixed bottom-0 left-0 z-30 flex max-h-[85vh] w-full shrink-0 overflow-hidden rounded-t-xl border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] shadow-2xl transition-all duration-300 ease-out md:relative md:w-[320px] md:max-h-none md:rounded-none md:border-r md:border-t-0 md:pb-0 md:shadow-none">
              <EventsPanel events={events} mapRef={mapRef} />
            </div>
          )}
          <div className="min-h-0 min-w-0 flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
