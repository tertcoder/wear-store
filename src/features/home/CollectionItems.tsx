import useCollectionItems from "./useCollectionitems";
import HeartIcon from "../../assets/icons/Wishlist.svg";
import CartIcon from "../../assets/icons/Cart.svg";
import MoveIcon from "../../assets/icons/Move.svg";
import Loader from "../../ui/Loader";

function CollectionItems() {
  const { isLoading, recentShoes } = useCollectionItems();
  if (isLoading) return <Loader />;
  return (
    <div className="flex gap-5 ">
      {recentShoes?.map((shoe) => (
        <div
          key={shoe.id}
          style={{
            background: `
              url(${shoe.image}) center/cover no-repeat
            `,
          }}
          className="flex h-80 w-60 flex-col justify-between rounded-[1.25rem] border border-bd-gray px-4 py-5"
        >
          <div className="flex flex-col gap-[0.3125rem] rounded-rd-main bg-[#fff9f5] p-2.5  shadow-shdw-main backdrop-blur-[2px]">
            <h3 className="text-base font-bold text-txt-main">{shoe.name}</h3>
            <p className="text-xs font-medium text-txt-gray">{shoe.price}</p>
          </div>
          <div className="flex items-center justify-between pt-2">
            {/* Two Component to refactor */}

            <div className="flex items-center justify-center gap-2.5 rounded-[0.625rem] border border-bd-main bg-btn-white-bg px-3 py-2 shadow-shdw-main">
              <span className="text-sm font-semibold text-txt-main">
                Add to Cart
              </span>
              <img src={CartIcon} alt="Add to Cart Icon" />
            </div>
            <div className="flex h-[2.0625rem] w-[2.0625rem] items-center justify-center rounded-rd-main border border-bd-main bg-btn-white-bg px-0.5 py-[0.1875rem] shadow-shdw-main">
              <img src={HeartIcon} alt="Add to Wishlist Icon" />
            </div>
          </div>
        </div>
      ))}
      <button className="mr-10 flex items-center gap-1 self-center rounded-rd-main bg-btn-gray-bg px-2.5 py-5">
        <span className="text-sm font-medium" style={{ color: "#65625e" }}>
          More
        </span>
        <img src={MoveIcon} alt="Go to store" />
      </button>
    </div>
  );
}

export default CollectionItems;
