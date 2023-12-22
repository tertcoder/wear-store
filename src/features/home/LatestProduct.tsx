import Loader from "../../ui/Loader";
import useLatestProduct from "./useLatestProduct";
import { shoesInterface } from "../../utils/data";
import Button from "../../ui/Button";
import CartIcon from "../../assets/icons/Cart.svg";
import WishlistIcon from "../../assets/icons/Wishlist.svg";
import StarIcon from "../../assets/icons/Rate.svg";

function LatestProduct() {
  const { isLoading, newShoe } = useLatestProduct();
  if (isLoading) return <Loader />;
  const { name, price, description, lastPrice, image, brand } = (
    newShoe as shoesInterface[]
  )[0];
  return (
    <div
      style={{
        background:
          "linear-gradient(261deg, #FDBD8E 8.31%, rgba(255, 174, 115, 0.65) 33.4%, rgba(255, 185, 133, 0.41) 64.8%, rgba(253, 189, 142, 0.21) 83.3%, rgba(253, 189, 142, 0.00) 100%)",
      }}
      className="grid h-[32.2rem] max-w-7xl grid-cols-2 grid-rows-[32.2rem] overflow-hidden rounded-[2.5rem] border border-bd-gray"
    >
      <img loading="lazy" src={image} alt={`${name}, ${brand}`} />
      {/* */}
      <div className="relative flex flex-col justify-center gap-8 overflow-hidden px-[4rem] py-[2rem]">
        <div>
          <h2 className="text-[2.5rem] font-semibold text-txt-main">{name}</h2>
          <span className="itemce flex gap-1">
            4.5 <img src={StarIcon} alt="Star Icon" />
          </span>
        </div>
        <div className="space-y-3">
          <div className="space-x-6">
            <span className="text-8xl font-semibold text-txt-main">
              ${price}
            </span>
            {lastPrice && (
              <span className="text-sm font-semibold text-txt-gray line-through">
                ${lastPrice}
              </span>
            )}
          </div>
          <p>{description ?? "3 remaining in stock."}</p>
        </div>
        <div className="flex gap-10 py-3">
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
        <span className="absolute -right-10 top-10 w-52 rotate-45 bg-[#ffe500] text-center text-lg font-semibold text-txt-main ">
          New
        </span>
      </div>
    </div>
  );
}

export default LatestProduct;
