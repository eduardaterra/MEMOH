import { HTMLAttributes } from "react";
import clsx from "clsx";
import { check as Check } from "@/app/assets";
import "./styles.scss";

export default function Checkbox({
  label,
  id,
  selected,
  ...props
}: HTMLAttributes<HTMLButtonElement> & { label: string; selected: boolean }) {
  return (
    <div className="checkbox  checkbox--container">
      <button
        className={clsx("checkbox--input", selected ? "selected" : null)}
        {...props}
      >
        <Check />
      </button>
      <label
        className="checkbox--label"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
}

