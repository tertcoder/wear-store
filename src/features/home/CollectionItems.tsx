import useCollectionItems from "./useCollectionitems";
import Loader from "../../ui/Loader";
import Shoes from "../../ui/Shoes";
import MoveIcon from "../../assets/icons/Move.svg";
import { Link } from "react-router-dom";

function CollectionItems() {
  const { isLoading, recentShoes } = useCollectionItems();
  if (isLoading) return <Loader />;
  return (
    <div className="flex gap-5">
      {recentShoes?.map((shoe) => (
        <Shoes
          id={shoe.id}
          key={shoe.id}
          image={shoe.image}
          name={shoe.name}
          price={shoe.price}
        />
      ))}
      <Link
        to="/store"
        className="mr-10 flex items-center gap-1 self-center rounded-rd-main bg-btn-gray-bg px-2.5 py-5"
      >
        <span className="text-sm font-medium" style={{ color: "#65625e" }}>
          More
        </span>
        <img src={MoveIcon} alt="Go to store" />
      </Link>
    </div>
  );
}

export default CollectionItems;
