import { useRef, useState } from "react";
import { brands } from "../../utils/Brands";
import LineIcon from "../../assets/icons/Line.svg";
import PrevIcon from "../../assets/icons/Left.svg";
import NextIcon from "../../assets/icons/Right.svg";
import BtnNav from "../../ui/BtnNav";
function Brands() {
  const [scrollX, setScrollX] = useState(0);
  const ref = useRef(null);

  function NextMove() {
    setScrollX;
  }
  return (
    <div className="flex w-full max-w-7xl flex-col items-start gap-[0.4rem]  overflow-hidden">
      <div className="flex  flex-col items-start justify-center gap-1 p-2.5">
        <span className="text-2xl font-medium text-txt-main">Brands</span>
        <img src={LineIcon} alt="Line svg" />
      </div>
      <div className="relative flex h-24 w-full flex-col justify-center py-[0.625rem]">
        <div
          // style={{
          //   transitionDuration: "300ms",
          //   translate: `-400px`,
          // }}
          ref={ref}
          className="flex max-w-7xl items-center gap-5 overflow-auto border-4"
        >
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

        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <BtnNav icon={PrevIcon} actionType="Previous" />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <BtnNav icon={NextIcon} actionType="Next" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
