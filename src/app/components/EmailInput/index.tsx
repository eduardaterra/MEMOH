import { HTMLAttributes } from "react";
import "./styles.scss";

export default function Input({
  error,
  ...props
}: HTMLAttributes<HTMLInputElement> & {
  error?: string;
}) {
  return (
    <div className="input input--container">
      <input name="email" type="email" className="input--input" {...props} />
      {error ? <span className="input--error">{error}</span> : null}
    </div>
  );
}

