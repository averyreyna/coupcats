import { css } from "styled-system/css";

export interface FilterCheckboxItemProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const labelStyle = css({
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  gap: "1.5",
  minHeight: "28px",
  borderRadius: "md",
  paddingInline: "2",
  paddingBlock: "0.75",
  transition: "background-color 160ms ease",
  _hover: { backgroundColor: "var(--colors-bg-hover)" },
});

const checkboxStyle = css({
  height: "3.5",
  width: "3.5",
  borderRadius: "sm",
  accentColor: "var(--colors-accent-default)",
  cursor: "pointer",
  flexShrink: "0",
});

const textStyle = css({
  fontSize: "sm",
  lineHeight: "1.25",
  color: "var(--colors-text-secondary)",
});

export default function FilterCheckboxItem({
  label,
  checked,
  onChange,
}: FilterCheckboxItemProps) {
  return (
    <label className={labelStyle}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={checkboxStyle}
      />
      <span className={textStyle}>{label}</span>
    </label>
  );
}
