import toast from "react-hot-toast";
import useDeleteCart from "./useDeleteCart";
import { memo } from "react";

const CartItem = memo(function CartItem({
  brand,
  id,
  image,
  name,
  price,
  mainId,
}: {
  mainId: number;
  brand: string;
  id: string;
  image: string;
  name: string;
  price: number;
}) {
  const { deleteFromCart } = useDeleteCart();
  return (
    <div className="flex items-center overflow-hidden rounded-[0.625rem] border border-bd-main pr-6 shadow-shdw-main">
      <div className="absolute hidden">
        {brand + name + id + image + price.toString()}
      </div>
      <div className="flex flex-1 items-center">
        <img src={image} className="h-40 w-60 object-cover" />
        <div className="flex flex-col gap-2 px-6">
          <span className="text-xl font-semibold text-txt-main">{name}</span>
          <span className="text-base font-semibold text-txt-main/70">
            {brand}
          </span>
          <span className="text-4xl font-semibold text-txt-main">${price}</span>
        </div>
      </div>
      <button
        onClick={() => {
          toast.loading("Deleting from cart...", {
            duration: 3000,
          });
          deleteFromCart(mainId);
        }}
        className="rounded-[0.625rem] bg-[#FF5454] p-4 text-white"
      >
        Remove
      </button>
    </div>
  );
});
export default CartItem;
