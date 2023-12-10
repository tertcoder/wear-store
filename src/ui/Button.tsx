import { ReactNode } from "react";

function Button({ children, type }: { children: ReactNode; type: string }) {
  const base =
    "flex items-center justify-center gap-2.5 rounded-[0.625rem] border-2 border-bd-main px-9 py-[0.94rem] font-semibold text-txt-main shadow-shdw-main";
  const primary = `
  bg-btn-main-bg
  `;
  const secondary = `
  bg-btn-white-bg
  `;
  if (type === "primary")
    return <button className={`${base} ${primary}`}>{children}</button>;
  if (type === "secondary")
    return <button className={`${base} ${secondary}`}>{children}</button>;
}

export default Button;
