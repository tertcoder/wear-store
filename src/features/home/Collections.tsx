import { Link } from "react-router-dom";
import ScrollContainer from "../../ui/ScrollContainer";
import LineIcon from "../../assets/icons/Line.svg";
import MoveIcon from "../../assets/icons/Move.svg";
import BtnNav from "../../ui/BtnNav";
import PrevIcon from "../../assets/icons/Left.svg";
import NextIcon from "../../assets/icons/Right.svg";
import useScrollXSmooth from "../../hooks/useScrollXSmooth";
import CollectionItems from "./CollectionItems";
import ProductItem from "../ProductItem";

function Collections() {
  const { scrollRef, prevMove, nextMove } = useScrollXSmooth();
  return (
    <ScrollContainer>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start justify-center gap-1 p-2.5">
          <span className="text-2xl font-medium text-txt-main">
            Our Collections
          </span>
          <img src={LineIcon} alt="Line svg" />
        </div>
        <div className="flex items-center gap-1 border-b border-[#67625E]">
          <Link
            to="/store"
            style={{ color: "#67625E" }}
            className="text-sm font-medium"
          >
            View All
          </Link>
          <img src={MoveIcon} alt="View All Icon" />
        </div>
      </div>
      <div
        ref={scrollRef}
        style={{ scrollBehavior: "smooth" }}
        className="customScroll flex w-full  justify-start overflow-auto overflow-y-hidden py-[0.625rem]"
      >
        <CollectionItems />
        <div className="absolute left-1 top-[13.5rem]">
          <BtnNav icon={PrevIcon} actionType="Previous" onClick={prevMove} />
        </div>
        <div className="absolute right-1 top-[13.5rem]">
          <BtnNav icon={NextIcon} actionType="Next" onClick={nextMove} />
        </div>
      </div>
      <ProductItem />
    </ScrollContainer>
  );
}

export default Collections;
