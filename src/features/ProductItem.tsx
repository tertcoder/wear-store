import Line from "../assets/icons/smll.svg";
import CartIcon from "../assets/icons/Cart.svg";
import WishlistIcon from "../assets/icons/Wishlist.svg";
import StarIcon from "../assets/icons/Rate.svg";

import Jordan from "../assets/images/AirJordanKakty.png";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { productItemIsOpen, setProductItemIsOpen } from "../store/store";
import { twMerge } from "tailwind-merge";
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import useShoe from "./useShoe";
import Loading from "../ui/Loading";
function ProductItem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isOpen = useSelector(productItemIsOpen);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const idShoe = searchParams.get("idShoe");
  const { isLoading, shoe } = useShoe();

  useEffect(() => {
    if (idShoe) {
      dispatch(setProductItemIsOpen(true));
      console.log(isLoading, shoe);
    }
  }, [dispatch, isLoading, shoe, idShoe]);

  useEffect(() => {
    function handleClick(e: Event) {
      //@ts-expect-error | the error is "Property 'classList' does not exist on type 'EventTarget'" whereas classList exist in Javascript but it won't work in production using typescript that why i'm ignoring the error to make it work
      if (!e?.target?.classList.contains("overlay")) return;
      setSearchParams({});
      dispatch(setProductItemIsOpen(false));
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
      // className={twMerge(
      //   "fixed inset-0 z-10 flex translate-y-0 items-end justify-center bg-neutral-400/10 backdrop-blur-[2px]",
      //   `${isOpen ? "opacity-1 translate-y-0" : "translate-y-full opacity-0"}`,
      // )}
    >
      <div className="relative w-full max-w-7xl overflow-y-auto rounded-t-[2.5rem] border border-bd-main shadow-shdw-main max-lg:h-[70vh]">
        {isLoading && !shoe ? (
          <Loading />
        ) : (
          <div className="relative grid grid-cols-1 rounded-t-[2.5rem] bg-main-bg lg:grid-cols-2">
            <img
              src={Line}
              alt="line"
              className="absolute left-1/2 top-4 -translate-x-1/2"
            />
            <img
              loading="lazy"
              src={shoe![0].image}
              alt="Jordan"
              className="h-full rounded-tl-[2.5rem] object-cover"
            />
            <div className="flex h-full px-16 py-[4.5rem]">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-[2.5rem] font-semibold text-txt-main">
                    {shoe![0].name}
                  </h2>
                  <span className="itemce flex gap-1">
                    4.5 <img src={StarIcon} alt="Star Icon" />
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="space-x-6">
                    <span className="text-8xl font-semibold text-txt-main">
                      {shoe![0].price}
                    </span>

                    {shoe![0].lastPrice && (
                      <span className="text-sm font-semibold text-txt-gray line-through">
                        {shoe![0].lastPrice}
                      </span>
                    )}
                  </div>
                  <p>3 remaining in stock.</p>
                </div>
                <div className="flex w-full flex-wrap gap-x-10 gap-y-5 pt-3">
                  <Button
                    type="primary"
                    ariaLabel="Add to cart"
                    onClick={() => console.log("Adding to cart...")}
                  >
                    <span>Add to Cart</span>
                    <img src={CartIcon} alt="Cart Icon" />
                  </Button>
                  <Button
                    type="secondary"
                    ariaLabel="Save to wishlist"
                    onClick={() => console.log("Saving to wishlist...")}
                  >
                    <span>Save to Wishlist</span>
                    <img src={WishlistIcon} alt="Wishlist Icon" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
