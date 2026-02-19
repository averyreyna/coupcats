import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export interface FilterDropdownProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function FilterDropdown({
  label,
  children,
  className = "",
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) {
      document.addEventListener("mousedown", onOutside);
      return () => document.removeEventListener("mousedown", onOutside);
    }
  }, [open]);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-lg border border-gray-600 bg-gray-800/80 px-3 py-2 text-sm text-gray-200 transition-colors hover:bg-gray-700/80"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[180px] rounded-lg border border-gray-700 bg-[#1a1d26] py-2 shadow-xl">
          {children}
        </div>
      )}
    </div>
  );
}
