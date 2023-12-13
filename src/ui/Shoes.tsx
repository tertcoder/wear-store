import HeartIcon from "../assets/icons/Wishlist.svg";
import CartIcon from "../assets/icons/Cart.svg";
function Shoes({
  key,
  image,
  name,
  price,
}: {
  key: string;
  image: string;
  name: string;
  price: number;
}) {
  return (
    <div
      key={key}
      style={{
        background: `
      url(${image}) center/cover no-repeat
    `,
      }}
      className="flex h-80 w-60 flex-col justify-between rounded-[1.25rem] border border-bd-gray px-4 py-5"
    >
      <div className="flex flex-col gap-[0.3125rem] rounded-rd-main bg-[#fff9f5] p-2.5  shadow-shdw-main backdrop-blur-[2px]">
        <h3 className="text-base font-bold text-txt-main">{name}</h3>
        <p className="text-xs font-medium text-txt-gray">{price}</p>
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
  );
}

export default Shoes;
