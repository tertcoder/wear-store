import Loader from "../../ui/Loader";
import useLatestProduct from "./useLatestProduct";
import { shoesInterface } from "../../utils/data";
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
      // style={{
      //   background:
      //     "linear-gradient(261deg, #FDBD8E 8.31%, rgba(255, 174, 115, 0.65) 33.4%, rgba(255, 185, 133, 0.41) 64.8%, rgba(253, 189, 142, 0.21) 83.3%, rgba(253, 189, 142, 0.00) 100%)",
      // }}
      className="lg2:grid-cols-2 lg2:grid-rows-[32.2rem] lg2:h-[32.2rem] grid max-w-7xl grid-cols-1 grid-rows-[30rem_auto] self-center overflow-hidden rounded-[2.5rem] border border-bd-gray bg-hero-bg/80"
    >
      <img
        loading="lazy"
        src={image}
        alt={`${name}, ${brand}`}
        className="h-full w-full object-cover object-center"
      />
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
        <div className="flex w-full flex-wrap gap-x-10 gap-y-5 py-3">
          <button
            onClick={() => console.log("Adding to cart...")}
            className="btn flex items-center justify-center gap-2.5 rounded-[0.625rem] border border-bd-main bg-btn-main-bg px-9 py-[0.94rem] font-semibold text-txt-main shadow-shdw-main"
          >
            <span>Add to Cart</span>
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
  );
}

export default LatestProduct;
