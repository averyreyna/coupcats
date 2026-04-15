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
  gap: "2",
  borderRadius: "sm",
  paddingInline: "2",
  paddingBlock: "1.5",
  _hover: { backgroundColor: "var(--colors-bg-hover)" },
});

const checkboxStyle = css({
  height: "4",
  width: "4",
  borderRadius: "sm",
  accentColor: "var(--colors-accent-default)",
  cursor: "pointer",
});

const textStyle = css({
  fontSize: "sm",
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
