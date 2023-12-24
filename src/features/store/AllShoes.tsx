import Loader from "../../ui/Loader";
import Shoes from "../../ui/Shoes";
import useAllShoes from "./useAllShoes";
import AddIcon from "../../assets/icons/Add.svg";
import Cart from "../Cart";
import NewShoe from "../NewShoe";
import ProductItem from "../ProductItem";
import { useDispatch } from "react-redux";
import { setNewShoeIsOpen, store } from "../../store/store";

function AllShoes() {
  const { allShoes, isLoading } = useAllShoes();
  const dispatch = useDispatch();
  if (isLoading) return <Loader />;
  return (
    <div className="flex w-full max-w-7xl flex-wrap gap-5 max-md:justify-center">
      {allShoes?.map((shoe) => (
        <Shoes
          key={shoe.id}
          image={shoe.image}
          name={shoe.name}
          price={shoe.price}
          className="max-md:h-[35rem]  max-md:w-[25rem]"
        />
      ))}
      <button
        onClick={() => {
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
      {/* <ProductItem /> */}
    </div>
  );
}

export default AllShoes;
