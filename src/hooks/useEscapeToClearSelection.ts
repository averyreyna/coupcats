import { useEffect } from "react";
import type { CoupEvent } from "../types/coup";

export function useEscapeToClearSelection(
  setSelectedEvent: (event: CoupEvent | null) => void
): void {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedEvent(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [setSelectedEvent]);
}

