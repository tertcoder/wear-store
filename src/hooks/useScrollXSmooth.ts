import { useRef } from "react";

function useScrollXSmooth(scrollSize?: number) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTo = (scroll: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scroll,
        behavior: "smooth",
      });
    }
  };
  const prevMove = () => {
    scrollTo(
      (scrollRef.current?.scrollLeft || 0) - (scrollSize ? scrollSize : 200),
    );
  };
  const nextMove = () => {
    scrollTo(
      (scrollRef.current?.scrollLeft || 0) + (scrollSize ? scrollSize : 200),
    );
  };

  return { scrollRef, prevMove, nextMove };
}

export default useScrollXSmooth;
