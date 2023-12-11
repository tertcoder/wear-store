import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function Menu({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "absolute flex flex-col gap-2.5 rounded-[0.625rem] border border-bd-main bg-btn-white-bg px-5 py-[1.125rem] shadow-shdw-main",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Menu;
