import { brands } from "../../utils/Brands";
import LineIcon from "../../assets/icons/Line.svg";
import PrevIcon from "../../assets/icons/Left.svg";
import NextIcon from "../../assets/icons/Right.svg";
import BtnNav from "../../ui/BtnNav";
function Brands() {
  return (
    <div className="flex w-full max-w-7xl flex-col items-start gap-[0.4rem]  overflow-hidden ">
      <div className="flex  flex-col items-start justify-center gap-1 p-2.5">
        <span className="text-2xl font-medium text-txt-main">Brands</span>
        <img src={LineIcon} alt="Line svg" />
      </div>
      <div className="relative flex h-24 w-full flex-col justify-center py-[0.625rem]">
        {/* <div className="flex  items-center gap-5 ">
          {brands.map((brand) => (
            <div
              key={brand.brand}
              style={{
                background: `linear-gradient(
                  0deg, 
                  rgba(40, 35, 28, 0.30) 0%, 
                  rgba(40, 35, 28, 0.30) 100%),
                   url(${brand.image}), 
                   lightgray 50% / cover no-repeat;`,
              }}
              className="flex w-56 flex-shrink-0 items-center justify-center gap-2.5 rounded-full border border-bd-gray px-[3.25rem] py-[1.125rem]"
            >
              <span className="text-red text-2xl font-bold">{brand.brand}</span>
            </div>
          ))}
        </div> */}
        <div className="flex items-center gap-5">
          {brands.map((brand) => (
            <div
              key={brand.brand}
              style={{
                background: `linear-gradient(
                  0deg, 
                  rgba(40, 35, 28, 0.20) 0%, rgba(40, 35, 28, 0.20) 100%),
                    url(${brand.image}) center/cover no-repeat`,
              }}
              className="flex w-56 flex-shrink-0 items-center justify-center gap-2.5 rounded-full border border-bd-gray px-[3.25rem] py-[1.125rem]"
            >
              <span className="text-2xl font-bold text-white">
                {brand.brand}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute left-0 right-0 top-1/2 mx-4 flex h-full -translate-y-1/2 items-center justify-between">
          <BtnNav icon={PrevIcon} actionType="Previous" />
          <BtnNav icon={NextIcon} actionType="Next" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
