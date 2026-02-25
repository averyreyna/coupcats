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
    <div className={`relative shrink-0 ${className}`} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-[44px] items-center gap-1.5 rounded-lg border border-gray-600 bg-gray-800/80 px-3 py-2.5 text-sm text-gray-200 transition-colors hover:bg-gray-700/80"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 min-w-0 rounded-lg border border-gray-700 bg-[#1a1d26] py-2 shadow-xl md:left-auto md:right-0 md:min-w-[180px]">
          {children}
        </div>
      )}
    </div>
  );
}
