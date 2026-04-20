import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { css } from "styled-system/css";
import { narratives } from "../data/narratives";

const navStyle = css({
  backgroundColor: "var(--colors-bg-panel)",
  borderBottom: "1px solid var(--colors-border-default)",
  px: "8",
  py: "3",
});

const backLinkStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "1.5",
  fontSize: "var(--font-sizes-sm)",
  fontWeight: "var(--font-weights-medium)",
  color: "var(--colors-text-secondary)",
  textDecoration: "none",
  transition: "color 150ms ease",
  _hover: { color: "var(--colors-text-primary)" },
});

const pageStyle = css({
  minHeight: "calc(100vh - 49px)",
  backgroundColor: "var(--colors-bg-app)",
  display: "flex",
  justifyContent: "center",
  py: "12",
  px: "8",
});

const columnStyle = css({
  width: "100%",
  maxWidth: "680px",
});

const metaStyle = css({
  fontSize: "var(--font-sizes-xs)",
  fontWeight: "var(--font-weights-semibold)",
  letterSpacing: "var(--letter-spacings-widest)",
  textTransform: "uppercase",
  color: "var(--colors-accent-text)",
  mb: "3",
});

const titleStyle = css({
  fontSize: "2rem",
  fontWeight: "var(--font-weights-bold)",
  lineHeight: "1.2",
  color: "var(--colors-text-primary)",
  mb: "6",
});

const titleDividerStyle = css({
  borderBottom: "2px solid var(--colors-border-default)",
  mb: "8",
});

const contentStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "5",
  fontSize: "var(--font-sizes-md)",
  lineHeight: "1.8",
  color: "var(--colors-text-secondary)",
});

const dividerStyle = css({
  mt: "10",
  pt: "8",
  borderTop: "1px solid var(--colors-border-default)",
});

const refsHeadingStyle = css({
  fontSize: "var(--font-sizes-xs)",
  fontWeight: "var(--font-weights-semibold)",
  letterSpacing: "var(--letter-spacings-widest)",
  textTransform: "uppercase",
  color: "var(--colors-text-muted)",
  mb: "4",
});

const refsListStyle = css({
  listStyleType: "none",
  p: "0",
  m: "0",
  display: "flex",
  flexDirection: "column",
  gap: "2.5",
});

const refItemStyle = css({
  paddingLeft: "0.875rem",
  borderLeft: "2px solid var(--colors-accent-default)",
  fontSize: "var(--font-sizes-sm)",
  lineHeight: "var(--line-heights-normal)",
  color: "var(--colors-text-muted)",
});

export default function NarrativePage() {
  const { id } = useParams<{ id: string }>();

  const narrative = useMemo(() => {
    if (!id) return null;
    return narratives[id] ?? null;
  }, [id]);

  if (!narrative) {
    return (
      <>
        <nav className={navStyle}>
          <Link to="/" className={backLinkStyle}>← Back to Map</Link>
        </nav>
        <div className={pageStyle}>
          <div className={columnStyle}>
            <h1 className={titleStyle}>Narrative Not Available</h1>
            <p className={css({ color: "var(--colors-text-muted)", fontSize: "var(--font-sizes-md)" })}>
              This coup event does not yet have a completed narrative.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <nav className={navStyle}>
        <Link to="/" className={backLinkStyle}>← Back to Map</Link>
      </nav>

      <div className={pageStyle}>
        <div className={columnStyle}>
          <p className={metaStyle}>{narrative.country} • {narrative.year}</p>
          <h1 className={titleStyle}>{narrative.title}</h1>
          <div className={titleDividerStyle} />

          <div className={contentStyle}>
            {narrative.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <section className={dividerStyle}>
            <h2 className={refsHeadingStyle}>References</h2>
            <ul className={refsListStyle}>
              {narrative.references.map((reference, index) => (
                <li key={index} className={refItemStyle}>{reference}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
