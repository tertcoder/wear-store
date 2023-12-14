import Loader from "../../ui/Loader";
import Shoes from "../../ui/Shoes";
import useAllShoes from "./useAllShoes";
import AddIcon from "../../assets/icons/Add.svg";

function AllShoes() {
  const { allShoes, isLoading } = useAllShoes();
  if (isLoading) return <Loader />;
  return (
    <div className="flex w-full max-w-7xl flex-wrap gap-5">
      {allShoes?.map((shoe) => (
        <Shoes
          key={shoe.id}
          image={shoe.image}
          name={shoe.name}
          price={shoe.price}
        />
      ))}
      <button className="flex h-80 w-60 items-center justify-center rounded-[1.25rem] border border-bd-gray bg-btn-gray-bg">
        <div className="flex gap-3">
          <span className="text-xl font-medium text-txt-main">New Sneaker</span>
          <img src={AddIcon} alt="Add Icon" />
        </div>
      </button>
    </div>
  );
}

export default AllShoes;
