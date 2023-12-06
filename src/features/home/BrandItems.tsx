import Loader from "../../ui/Loader";
import { brands } from "../../utils/data";
import useBrandItems from "./useBrandItems";

function BrandItems() {
  const { isLoading, availableBrands } = useBrandItems();
  if (isLoading) <Loader />;
  console.log(availableBrands);
  return (
    <div className="flex items-center gap-5 ">
      {brands.map((item) => (
        <div
          key={item.brand}
          style={{
            background: `linear-gradient(
                  0deg, 
                  rgba(40, 35, 28, 0.20) 0%, rgba(40, 35, 28, 0.20) 100%),
                    url(${item.image}) center/cover no-repeat`,
          }}
          className="flex w-56 flex-shrink-0 items-center justify-center gap-2.5 rounded-full border border-bd-gray px-[3.25rem] py-[1.125rem]"
        >
          <span className="text-2xl font-bold text-white">{item.brand}</span>
        </div>
      ))}
    </div>
  );
}

export default BrandItems;
