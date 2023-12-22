import LineIcon from "../../assets/icons/Line.svg";
import PrevIcon from "../../assets/icons/Left.svg";
import NextIcon from "../../assets/icons/Right.svg";
import BtnNav from "../../ui/BtnNav";
import ScrollContainer from "../../ui/ScrollContainer";
import BrandItems from "./BrandItems";
import useScrollXSmooth from "../../hooks/useScrollXSmooth";

function Brands() {
  const { scrollRef, prevMove, nextMove } = useScrollXSmooth();

  return (
    <ScrollContainer>
      <div className="flex  flex-col items-start justify-center gap-1 p-2.5">
        <span className="text-2xl font-medium text-txt-main">Brands</span>
        <img src={LineIcon} alt="Line svg" />
      </div>
      <div
        ref={scrollRef}
        style={{ scrollBehavior: "smooth" }}
        className="customScroll flex h-24 w-full justify-start overflow-auto overflow-y-hidden py-[0.625rem]"
      >
        <BrandItems />
        <div className="absolute bottom-7 left-1 ">
          <BtnNav icon={PrevIcon} actionType="Previous" onClick={prevMove} />
        </div>
        <div className="absolute bottom-7 right-1 ">
          <BtnNav icon={NextIcon} actionType="Next" onClick={nextMove} />
        </div>
      </div>
    </ScrollContainer>
  );
}

export default Brands;
