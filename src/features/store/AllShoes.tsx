import Shoes from "../../ui/Shoes";
import useAllShoes from "./useAllShoes";
import AddIcon from "../../assets/icons/Add.svg";
import NewShoe from "../NewShoe";
import { useDispatch } from "react-redux";
import { setNewShoeIsOpen } from "../../store/store";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";

function AllShoes() {
  const { allShoes, isLoading } = useAllShoes();
  const allCorrectedShoes = allShoes ? allShoes : [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex w-full max-w-7xl flex-wrap gap-5 max-md:justify-center">
      {isLoading && (
        <div className="self-center justify-self-center">
          <Loading />
        </div>
      )}
      {allCorrectedShoes.length >= 1
        ? allCorrectedShoes.map((shoe) => (
            <Shoes
              key={shoe.id}
              id={shoe.id}
              image={shoe.image}
              name={shoe.name}
              price={shoe.price}
              className="max-md:h-[35rem]  max-md:w-[25rem]"
            />
          ))
        : ""}
      {!isLoading && (
        <button
          onClick={() => {
            navigate("?newShoeIsOpen=true");
            dispatch(setNewShoeIsOpen(true));
          }}
          className="flex h-80 w-60 items-center  justify-center rounded-[1.25rem] border border-bd-gray bg-btn-gray-bg max-md:h-[35rem] max-md:w-[25rem]"
        >
          <div className="flex gap-3">
            <span className="text-xl font-medium text-txt-main">
              New Sneaker
            </span>
            <img src={AddIcon} alt="Add Icon" />
          </div>
        </button>
      )}
      {/* <Cart /> */}
      <NewShoe />
    </div>
  );
}

export default AllShoes;
