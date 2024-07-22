import { HTMLAttributes } from "react";
import "./styles.scss";
import clsx from "clsx";

export default function Modal({
  isOpen,
  setIsOpen,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  return (
    <div
      className={clsx(
        "modal modal--overlay glassmorphism--light",
        isOpen ? "opened" : undefined
      )}
      {...props}
    >
      <div className="modal--container">
        <button className="modal--close-btn" onClick={() => setIsOpen(false)}>
          X
        </button>
        <div className="modal--content">{children}</div>
      </div>
    </div>
  );
}

