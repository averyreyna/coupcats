import { useEffect, useState } from "react";
import { css } from "styled-system/css";

const STORAGE_KEY = "coupcats:beta-disclaimer-dismissed";

const overlayStyle = css({
  position: "fixed",
  inset: "0",
  zIndex: "50",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4",
  backgroundColor: "color-mix(in srgb, #000 45%, transparent)",
});

const cardStyle = css({
  width: "full",
  maxWidth: "420px",
  borderRadius: "xl",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-default)",
  backgroundColor: "var(--colors-bg-panel)",
  boxShadow: "var(--shadows-xl)",
  padding: "5",
});

const titleStyle = css({
  fontSize: "lg",
  fontWeight: "bold",
  color: "var(--colors-text-primary)",
  marginBottom: "2",
});

const bodyStyle = css({
  fontSize: "sm",
  color: "var(--colors-text-secondary)",
  lineHeight: "relaxed",
  marginBottom: "4",
});

const buttonRowStyle = css({
  display: "flex",
  justifyContent: "flex-end",
});

const dismissButtonStyle = css({
  borderRadius: "md",
  backgroundColor: "var(--colors-accent-default)",
  paddingInline: "4",
  paddingBlock: "2",
  fontSize: "sm",
  fontWeight: "medium",
  color: "white",
  cursor: "pointer",
  border: "none",
  _hover: { backgroundColor: "color-mix(in srgb, var(--colors-accent-default) 88%, black)" },
});

export default function DisclaimerModal() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const alreadyDismissed = localStorage.getItem(STORAGE_KEY) === "true";
    setDismissed(alreadyDismissed);
  }, []);

  if (dismissed) return null;

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setDismissed(true);
  };

  return (
    <div
      className={overlayStyle}
      onClick={dismiss}
      role="presentation"
    >
      <div
        className={cardStyle}
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="disclaimer-title" className={titleStyle}>
          Disclaimer:
        </h2>
        <p className={bodyStyle}>
          You're viewing a beta version of this project. Data, features, and
          design are still evolving. An updated version is planned for
          August 2026.
          <br />
          <br />
          Thanks for your patience.
        </p>
        <div className={buttonRowStyle}>
          <button type="button" className={dismissButtonStyle} onClick={dismiss}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
