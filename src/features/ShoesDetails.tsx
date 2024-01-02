import CartIcon from "../assets/icons/Cart.svg";
import WishlistIcon from "../assets/icons/Wishlist.svg";
import StarIcon from "../assets/icons/Rate.svg";
import Button from "../ui/Button";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Collections from "./home/Collections";
import useShoe from "./useShoe";
import Loading from "../ui/Loading";
function ShoesDetails() {
  const { isLoading, shoe } = useShoe();
  const shoesDetail = shoe ? shoe : null;
  const contentFallBack = (
    <div className="flex min-h-[34rem] w-full items-center justify-center rounded-[2.5rem] bg-main-bg text-2xl font-medium text-txt-main">
      <Loading />
    </div>
  );

  return (
    <>
      <Header activePage="Store" />
      <div className=" w-full max-w-7xl rounded-[2.5rem] border border-[#DFDAD5] shadow-shdw-main">
        {!shoesDetail || isLoading ? (
          contentFallBack
        ) : (
          <div className="grid min-h-[34rem] grid-cols-2 rounded-[2.5rem] bg-main-bg">
            <img
              src={shoesDetail.image}
              alt="Jordan"
              loading="lazy"
              className="h-full w-full rounded-l-[2.5rem] object-cover"
            />

            <div className="flex h-full items-center  border px-16 py-[4.5rem]">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-[2.5rem] font-semibold text-txt-main">
                    {shoesDetail.name}
                  </h2>
                  <span className="itemce flex gap-1">
                    4.5 <img src={StarIcon} alt="Star Icon" />
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="space-x-6">
                    <span className="text-8xl font-semibold text-txt-main">
                      {shoesDetail.price}
                    </span>

                    {shoesDetail.lastPrice && (
                      <span className="text-sm font-semibold text-txt-gray line-through">
                        {shoesDetail.lastPrice}
                      </span>
                    )}
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
        )}
      </div>
      <Collections collectionTitle="Sneakers you may like" />
      <Footer />
    </>
  );
}

export default ShoesDetails;
