import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  type,
  onClick,
  ariaLabel,
}: {
  children: ReactNode;
  type: string;
  onClick: () => void;
  ariaLabel: string;
}) {
  const base =
    "btn flex items-center justify-center gap-2.5 rounded-[0.625rem] border-2 border-bd-main px-9 py-[0.94rem] font-semibold text-txt-main shadow-shdw-main";
  const primary = `
  bg-btn-main-bg
  `;
  const secondary = `
  bg-btn-white-bg
  `;
  const small = ` btn flex gap-2.5 rounded-[0.625rem] border border-bd-main bg-btn-gray-bg px-8 py-2.5`;
  if (type === "small")
    return (
      <button
        aria-label={ariaLabel}
        onClick={onClick}
        className={twMerge(small)}
      >
        {children}
      </button>
    );
  if (type === "primary")
    return (
      <button
        aria-label={ariaLabel}
        onClick={onClick}
        className={twMerge(base, primary)}
      >
        {children}
      </button>
    );
  if (type === "secondary")
    return (
      <button
        aria-label={ariaLabel}
        onClick={onClick}
        className={twMerge(base, secondary)}
      >
        {children}
      </button>
    );
}

export default Button;
