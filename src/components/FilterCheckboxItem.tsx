export interface FilterCheckboxItemProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function FilterCheckboxItem({
  label,
  checked,
  onChange,
}: FilterCheckboxItemProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-gray-800">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500/50"
      />
      <span className="text-sm text-gray-200">{label}</span>
    </label>
  );
}

