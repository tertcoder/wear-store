import { useEffect, useRef } from "react";
import Line from "../assets/icons/smll.svg";
import { useDispatch, useSelector } from "react-redux";
import { cartIsOpen, setCartIsOpen } from "../store/store";
import { twMerge } from "tailwind-merge";

function Cart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isOpen = useSelector(cartIsOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    containerRef.current?.addEventListener("click", (e: Event) => {
      //@ts-expect-error | the error is "Property 'classList' does not exist on type 'EventTarget'" whereas classList exist in Javascript but it won't work in production using typescript that why i'm ignoring the error to make it work
      if (!e?.target?.classList.contains("overlay")) return;

      dispatch(setCartIsOpen(false));
    });
  }, [dispatch]);

  return (
    <div
      ref={containerRef}
      className={twMerge(
        `overlay fixed inset-0 z-10 flex items-end justify-center bg-neutral-400/10 backdrop-blur-[2px]`,
        `${isOpen ? "opacity-1 translate-y-0" : "translate-y-full opacity-0"}`,
      )}
    >
      <div className="relative flex h-full max-h-[36rem] w-full max-w-7xl flex-col rounded-t-[2.5rem] border border-bd-main bg-main-bg shadow-shdw-main">
        <img
          src={Line}
          alt="line"
          className="absolute left-1/2 top-4 -translate-x-1/2"
        />

        <div className="flex items-center justify-between border-b border-bd-gray px-16 py-12">
          <h1 className="text-4xl  font-semibold text-txt-main">My Cart</h1>
          <div className=" hidden items-center gap-6 md:flex">
            <span className="text-xl font-semibold text-txt-main ">
              Total: $159.8
            </span>
            <button className="rounded-[0.625rem] border border-bd-main bg-btn-main-bg p-4 text-xl font-semibold text-txt-main shadow-shdw-main">
              Checkout
            </button>
          </div>
        </div>
        <div className="flex-1 space-y-5 overflow-y-auto px-16 py-8">
          Cart Items...
        </div>
        <div className="flex border-t border-bd-gray px-16 py-4 md:hidden">
          <div className="flex w-full flex-col gap-6">
            <span className="text-xl font-semibold text-txt-main ">
              Total: $159.8
            </span>
            <button className="rounded-[0.625rem] border border-bd-main bg-btn-main-bg p-4 text-xl font-semibold text-txt-main shadow-shdw-main">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
