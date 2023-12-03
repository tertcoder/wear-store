import { ReactNode } from "react";

function ScrollContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex w-full max-w-7xl flex-col items-start gap-[0.4rem]  overflow-hidden">
      {children}
    </div>
  );
}

export default ScrollContainer;
