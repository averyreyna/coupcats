import { X } from "lucide-react";
import { css } from "styled-system/css";
import type { CoupEvent } from "../types/coup";

export interface CountryPanelProps {
  country: string;
  events: CoupEvent[];
  onClose: () => void;
}

const panelStyle = css({
  display: "flex",
  width: "full",
  flexShrink: "0",
  flexDirection: "column",
  borderLeftWidth: "1px",
  borderLeftStyle: "solid",
  borderLeftColor: "var(--colors-border-default)",
  backgroundColor: "var(--colors-bg-panel)",
  md: { width: "320px" },
});

const headerStyle = css({
  display: "flex",
  minHeight: "44px",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: "var(--colors-border-default)",
  paddingInline: "3",
  paddingBlock: "2.5",
  md: { paddingInline: "4", paddingBlock: "3" },
});

const closeButtonStyle = css({
  display: "flex",
  minHeight: "44px",
  minWidth: "44px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "sm",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-strong)",
  backgroundColor: "var(--colors-bg-muted)",
  padding: "1",
  color: "var(--colors-text-muted)",
  cursor: "pointer",
  _hover: { backgroundColor: "var(--colors-bg-hover)" },
  md: { minHeight: "auto", minWidth: "auto" },
});

export default function CountryPanel({
  country,
  events,
  onClose,
}: CountryPanelProps) {
  return (
    <div className={panelStyle}>
      {/* Header */}
      <div className={headerStyle}>
        <span className={css({ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "sm", fontWeight: "medium", color: "var(--colors-text-secondary)" })}>
          {country}
        </span>
        <button type="button" onClick={onClose} className={closeButtonStyle}>
          <X className={css({ height: "4", width: "4" })} />
        </button>
      </div>

      {/* Content */}
      <div className={css({ minHeight: "0", flex: "1", overflowY: "auto", paddingInline: "3", paddingBlock: "3", md: { paddingInline: "4" } })}>
        <div className={css({ fontSize: "sm", color: "var(--colors-text-secondary)" })}>
          <p className={css({ marginBottom: "2" })}>
            <span className={css({ fontWeight: "medium", color: "var(--colors-text-primary)" })}>{events.length}</span>{" "}
            coup{events.length !== 1 ? "s" : ""} in this country
          </p>
          <p className={css({ fontSize: "xs", color: "var(--colors-text-subtle)" })}>
            Country details coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
