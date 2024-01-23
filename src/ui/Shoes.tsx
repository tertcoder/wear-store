import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";

import HeartIcon from "../assets/icons/Wishlist.svg";
import CartIcon from "../assets/icons/Cart.svg";
import useAddToCart from "../hooks/useAddToCart";
import { useUser } from "../features/authentication/useUser";
import { useCartShoes } from "../features/cart/useCartShoes";
function Shoes({
  id,
  image,
  name,
  price,
  className,
}: {
  id: string;
  image: string;
  name: string;
  price: number;
  className?: string;
}) {
  const { addToCart } = useAddToCart();
  const { user } = useUser();
  const userId = user!.id!;
  const { shoesInCart } = useCartShoes();
  let inCart: boolean = false;
  if (shoesInCart)
    inCart = shoesInCart!.map((shoe) => shoe!.id!.includes(id))[0];
  else inCart = false;
  return (
    <div
      id={id}
      style={{
        background: `
      url(${image}) center/cover no-repeat
    `,
      }}
      className={twMerge(
        `item flex h-80 w-60 flex-col justify-between rounded-[1.25rem] border border-bd-gray px-4 py-5`,
        `${className}`,
      )}
    >
      {/* <Toaster position="top-center" /> */}
      <Link
        to={`/store/${id}`}
        className="flex flex-col gap-[0.3125rem] rounded-rd-main bg-[#fff9f5] p-2.5  shadow-shdw-main backdrop-blur-[2px]"
      >
        <h3 className="text-base font-bold text-txt-main">{name}</h3>
        <p className="text-xs font-medium text-txt-gray">{price}</p>
      </Link>
      <div className="flex items-center justify-between pt-2">
        {/* Two Component to refactor */}

        <button
          onClick={() => {
            const itemAlready = shoesInCart
              ? shoesInCart.find((shoe) => shoe?.id === id)
              : [null];
            if (!itemAlready) {
              toast.loading("Adding to cart...", {
                duration: 3000,
              });
              addToCart({ shoe_id: id, user_id: userId });
            } else {
              toast.error("Already in cart...", {
                duration: 5000,
              });
            }
          }}
          className="flex items-center justify-center gap-2.5 rounded-[0.625rem] border border-bd-main bg-btn-white-bg px-3 py-2 shadow-shdw-main"
        >
          <span className="text-sm font-semibold text-txt-main">
            {inCart ? "In Cart" : " Add to Cart"}
          </span>
          <img src={CartIcon} alt="Add to Cart Icon" />
        </button>

        <button className="flex h-[2.0625rem] w-[2.0625rem] items-center justify-center rounded-rd-main border border-bd-main bg-btn-white-bg px-0.5 py-[0.1875rem] shadow-shdw-main">
          <img src={HeartIcon} alt="Add to Wishlist Icon" />
        </button>
      </div>
    </div>
  );
}

export default Shoes;
