import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { css, cx } from "styled-system/css";

export interface FilterDropdownProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

const triggerStyle = css({
  display: "flex",
  minHeight: "44px",
  alignItems: "center",
  gap: "1.5",
  borderRadius: "lg",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-strong)",
  backgroundColor: "var(--colors-bg-panel)",
  paddingInline: "3",
  paddingBlock: "2.5",
  fontSize: "sm",
  color: "var(--colors-text-secondary)",
  transition: "colors",
  cursor: "pointer",
  _hover: { backgroundColor: "var(--colors-bg-hover)" },
});

const menuStyle = css({
  position: "absolute",
  left: "0",
  right: "0",
  top: "100%",
  zIndex: "50",
  marginTop: "1",
  minWidth: "0",
  borderRadius: "lg",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-default)",
  backgroundColor: "var(--colors-bg-panel)",
  paddingBlock: "2",
  boxShadow: "var(--shadows-xl)",
  md: {
    left: "auto",
    minWidth: "180px",
  },
});

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
    <div className={cx(css({ position: "relative", flexShrink: "0" }), className)} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={triggerStyle}
      >
        {label}
        <ChevronDown
          className={css({
            height: "4",
            width: "4",
            flexShrink: "0",
            transition: "transform",
          })}
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div className={menuStyle}>
          {children}
        </div>
      )}
    </div>
  );
}
