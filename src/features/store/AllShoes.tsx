import Loader from "../../ui/Loader";
import Shoes from "../../ui/Shoes";
import useAllShoes from "./useAllShoes";
import AddIcon from "../../assets/icons/Add.svg";
import NewShoe from "../NewShoe";
import { useDispatch } from "react-redux";
import { setNewShoeIsOpen } from "../../store/store";
import { useNavigate } from "react-router-dom";
import ProductItem from "../ProductItem";

function AllShoes() {
  const { allShoes, isLoading } = useAllShoes();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (isLoading) return <Loader />;
  return (
    <div className="flex w-full max-w-7xl flex-wrap gap-5 max-md:justify-center">
      {allShoes?.map((shoe) => (
        <Shoes
          key={shoe.id}
          id={shoe.id}
          image={shoe.image}
          name={shoe.name}
          price={shoe.price}
          className="max-md:h-[35rem]  max-md:w-[25rem]"
        />
      ))}
      <button
        onClick={() => {
          navigate("?newShoeIsOpen=true");
          dispatch(setNewShoeIsOpen(true));
        }}
        className="flex h-80 w-60 items-center  justify-center rounded-[1.25rem] border border-bd-gray bg-btn-gray-bg max-md:h-[35rem] max-md:w-[25rem]"
      >
        <div className="flex gap-3">
          <span className="text-xl font-medium text-txt-main">New Sneaker</span>
          <img src={AddIcon} alt="Add Icon" />
        </div>
      </button>
      {/* <Cart /> */}
      <NewShoe />
      <ProductItem />
    </div>
  );
}

export default AllShoes;
