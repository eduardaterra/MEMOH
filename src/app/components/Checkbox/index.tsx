import { HTMLAttributes } from "react";
import clsx from "clsx";
import { check as Check } from "@/app/assets";
import "./styles.scss";

export default function Checkbox({
  label,
  id,
  selected,
  inverse,
  ...props
}: HTMLAttributes<HTMLButtonElement> & {
  label: string;
  selected: boolean;
  inverse?: boolean;
}) {
  return (
    <div className="checkbox  checkbox--container">
      <button
        className={clsx(
          "checkbox--input",
          selected && "selected",
          inverse && "inverse"
        )}
        {...props}
      >
        <Check />
      </button>
      <label
        className={clsx("checkbox--label", inverse && "inverse")}
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
}

