import Line from "../assets/icons/smll.svg";
import CartIcon from "../assets/icons/Cart.svg";
import WishlistIcon from "../assets/icons/Wishlist.svg";
import StarIcon from "../assets/icons/Rate.svg";

import Jordan from "../assets/images/AirJordanKakty.png";
import Button from "../ui/Button";
function ProductItem() {
  return (
    <div className="fixed inset-0 z-10 flex translate-y-0 items-end justify-center bg-neutral-400/10 backdrop-blur-[2px]">
      <div className="w-full max-w-7xl rounded-t-[2.5rem] border border-bd-main shadow-shdw-main">
        <div className="relative grid grid-cols-2 rounded-t-[2.5rem] bg-main-bg">
          <img
            src={Line}
            alt="line"
            className="absolute left-1/2 top-4 -translate-x-1/2"
          />

          <img
            src={Jordan}
            alt="Jordan"
            className="h-full rounded-tl-[2.5rem] object-cover"
          />

          <div className="flex h-full px-16 py-[4.5rem]">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-[2.5rem] font-semibold text-txt-main">
                  Air Jordan
                </h2>
                <span className="itemce flex gap-1">
                  4.5 <img src={StarIcon} alt="Star Icon" />
                </span>
              </div>
              <div className="space-y-3">
                <div className="space-x-6">
                  <span className="text-8xl font-semibold text-txt-main">
                    $100
                  </span>

                  <span className="text-sm font-semibold text-txt-gray line-through">
                    $125
                  </span>
                </div>
                <p>3 remaining in stock.</p>
              </div>
              <div className="flex gap-10 pt-3">
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
      </div>
    </div>
  );
}

export default ProductItem;
