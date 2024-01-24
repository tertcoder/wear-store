import useLatestProduct from "./useLatestProduct";
import CartIcon from "../../assets/icons/Cart.svg";
import WishlistIcon from "../../assets/icons/Wishlist.svg";
import StarIcon from "../../assets/icons/Rate.svg";
import useAddToCart from "../../hooks/useAddToCart";
import { useUser } from "../authentication/useUser";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useCartShoes } from "../cart/useCartShoes";

function LatestProduct() {
  const { user } = useUser();
  const { addToCart } = useAddToCart();
  const { isLoading, newShoe } = useLatestProduct();
  const newShoeDetail = newShoe ? newShoe : [];
  const { shoesInCart } = useCartShoes();

  let inCart: boolean = false;
  if (shoesInCart && newShoeDetail.length > 0)
    inCart = shoesInCart!.map((shoe) =>
      shoe!.id!.includes(newShoeDetail[0].id),
    )[0];
  else inCart = false;

  return (
    <>
      {isLoading && (
        <div className="flex h-[30rem] w-full max-w-7xl items-center justify-center self-center rounded-[2.5rem] border border-bd-gray bg-main-bg ">
          <Loading />
        </div>
      )}
      {!isLoading && newShoeDetail.length < 1 && (
        <div className="flex h-[30rem] w-full max-w-7xl items-center justify-center self-center rounded-[2.5rem] border border-bd-gray bg-main-bg ">
          <span className="text-xl font-medium text-txt-gray">
            No data available!
          </span>
        </div>
      )}
      {newShoeDetail.length >= 1 && (
        <div className="grid max-w-7xl grid-cols-1 grid-rows-[30rem_auto] self-center overflow-hidden rounded-[2.5rem] border border-bd-gray bg-hero-bg/80 lg2:h-[32.2rem] lg2:grid-cols-2 lg2:grid-rows-[32.2rem]">
          <img
            loading="lazy"
            src={newShoeDetail[0].image}
            alt={`${newShoeDetail[0].name}, ${newShoeDetail[0].brand}`}
            className="h-full w-full object-cover object-center"
          />
          {/* */}
          <div className="relative flex flex-col justify-center gap-8 overflow-hidden px-[4rem] py-[2rem]">
            <div>
              <h2 className="text-[2.5rem] font-semibold text-txt-main">
                {newShoeDetail[0].name}
              </h2>
              <span className="itemce flex gap-1">
                4.5 <img src={StarIcon} alt="Star Icon" />
              </span>
            </div>
            <div className="space-y-3">
              <div className="space-x-6">
                <span className="text-8xl font-semibold text-txt-main">
                  ${newShoeDetail[0].price}
                </span>
                {newShoeDetail[0].lastPrice && (
                  <span className="text-sm font-semibold text-txt-gray line-through">
                    ${newShoeDetail[0].lastPrice}
                  </span>
                )}
              </div>
              <p>{newShoeDetail[0].description ?? "3 remaining in stock."}</p>
            </div>
            <div className="flex w-full flex-wrap gap-x-10 gap-y-5 py-3">
              <button
                onClick={() => {
                  const itemAlready = shoesInCart
                    ? shoesInCart.find(
                        (shoe) => shoe?.id === newShoeDetail[0].id,
                      )
                    : [null];
                  console.log(itemAlready);
                  if (!itemAlready) {
                    toast.loading("Adding to cart...", {
                      duration: 3000,
                    });
                    addToCart({
                      shoe_id: newShoeDetail[0].id,
                      user_id: user!.id,
                    });
                  } else {
                    toast.error("Already in cart...", {
                      duration: 5000,
                    });
                  }
                }}
                className="btn flex items-center justify-center gap-2.5 rounded-[0.625rem] border border-bd-main bg-btn-main-bg px-9 py-[0.94rem] font-semibold text-txt-main shadow-shdw-main"
              >
                <span> {inCart ? "In Cart" : " Add to Cart"}</span>
                <img src={CartIcon} alt="Cart Icon" />
              </button>
              <button
                onClick={() => console.log("Saving to wishlist...")}
                className="btn flex items-center justify-center gap-2.5 rounded-[0.625rem] border border-bd-main bg-btn-white-bg px-9 py-[0.94rem] font-semibold text-txt-main shadow-shdw-main"
              >
                <span>Save to Wishlist</span>
                <img src={WishlistIcon} alt="Wishlist Icon" />
              </button>
            </div>
            <span className="absolute -right-10 top-10 w-52 rotate-45 bg-[#ffe500] text-center text-lg font-semibold text-txt-main ">
              New
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default LatestProduct;
