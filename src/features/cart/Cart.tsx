import { useEffect, useRef } from "react";
import Line from "../../assets/icons/smll.svg";
import { useDispatch, useSelector } from "react-redux";
import { cartIsOpen, setCartIsOpen } from "../../store/store";
import { twMerge } from "tailwind-merge";
import { useSearchParams } from "react-router-dom";
import { useCart } from "./useCart"; 
import Loading from "../../ui/Loading";
import useAllShoes from "../store/useAllShoes";

function Cart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isOpen = useSelector(cartIsOpen);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const {allShoes,isLoading:isLoadingShoe}=useAllShoes();
  const { cartItems, isLoading } = useCart();
  const cartShoes = cartItems || null;
  const allShoesArray=allShoes||null
  const shoesInCart=cartShoes&&allShoesArray?:[]

  useEffect(() => {
    if (searchParams.get("myCartIsOpen") === "true")
      dispatch(setCartIsOpen(true));
  });

  useEffect(() => {
    function handleClick(e: Event) {
      //@ts-expect-error | the error is "Property 'classList' does not exist on type 'EventTarget'" whereas classList exist in Javascript but it won't work in production using typescript that why i'm ignoring the error to make it work
      if (!e?.target?.classList.contains("overlay")) return;
      setSearchParams({});
      dispatch(setCartIsOpen(false));
    }
    const containerElement = containerRef.current;
    containerElement?.addEventListener("click", handleClick);

    return () => {
      containerElement?.removeEventListener("click", handleClick);
    };
  }, [dispatch, setSearchParams]);

  return (
    <div
      ref={containerRef}
      className={twMerge(
        `overlay fixed inset-0 z-10 flex origin-bottom items-end justify-center bg-neutral-400/10 backdrop-blur-[2px] duration-150`,
        `${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`,
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
          {isLoading && <Loading />}
          {!isLoading && !cartShoes && "No Items In Cart ..."}
          {cartShoes && cartShoes.map((item) => <div>{item.shoe_id}</div>)}
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
