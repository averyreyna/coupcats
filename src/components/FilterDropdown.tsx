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
  minHeight: "40px",
  alignItems: "center",
  gap: "2",
  borderRadius: "lg",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-default)",
  backgroundColor: "color-mix(in srgb, var(--colors-bg-panel) 94%, var(--colors-bg-muted))",
  paddingInline: "3.5",
  paddingBlock: "2",
  fontSize: "sm",
  color: "var(--colors-text-secondary)",
  transition: "background-color 160ms ease, color 160ms ease, border-color 160ms ease",
  cursor: "pointer",
  _hover: {
    backgroundColor: "var(--colors-bg-hover)",
    color: "var(--colors-text-primary)",
  },
  _focusVisible: {
    outline: "none",
    borderColor: "var(--colors-accent-default)",
    boxShadow: "0 0 0 3px color-mix(in srgb, var(--colors-accent-default) 16%, transparent)",
  },
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
  backgroundColor: "color-mix(in srgb, var(--colors-bg-panel) 96%, var(--colors-bg-muted))",
  paddingBlock: "2.5",
  boxShadow: "0 8px 22px color-mix(in srgb, #000 10%, transparent)",
  md: {
    left: "auto",
    minWidth: "196px",
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
