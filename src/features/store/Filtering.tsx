import { useSearchParams } from "react-router-dom";
import FilterIcon from "../../assets/icons/Filter.svg";
import SearchIcon from "../../assets/icons/Search.svg";
import { useQueryClient } from "@tanstack/react-query";

function Filtering() {
  const [, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  return (
    <div className="w-full">
      <div className="flex w-full max-w-7xl justify-between">
        <button className="flex flex-shrink-0 items-center rounded-full border border-bd-main bg-btn-gray-bg px-3 py-4 lg2:hidden">
          <img src={FilterIcon} alt="Filter Icon" />
        </button>
        <div className="hidden gap-2.5  lg2:flex">
          <button
            className="filter-item active"
            onClick={() => {
              setSearchParams("?brand=");
              queryClient.resetQueries({
                queryKey: ["AllShoes"],
              });
            }}
          >
            All
          </button>
          <button
            className="filter-item"
            onClick={() => {
              setSearchParams("?brand=Nike");
              queryClient.resetQueries({
                queryKey: ["AllShoes"],
              });
            }}
          >
            Nike
          </button>
          <button
            className="filter-item"
            onClick={() => {
              setSearchParams("?brand=Adidas");
              queryClient.resetQueries({
                queryKey: ["AllShoes"],
              });
            }}
          >
            Adidas
          </button>
          <button
            className="filter-item"
            onClick={() => {
              setSearchParams("?brand=Reebok");
              queryClient.resetQueries({
                queryKey: ["AllShoes"],
              });
            }}
          >
            Reebok
          </button>
          <button
            className="filter-item"
            onClick={() => {
              setSearchParams("?brand=Vans");
              queryClient.resetQueries({
                queryKey: ["AllShoes"],
              });
            }}
          >
            Vans
          </button>
          <button
            className="filter-item"
            onClick={() => {
              setSearchParams("?brand=Puma");
              queryClient.resetQueries({
                queryKey: ["AllShoes"],
              });
            }}
          >
            Puma
          </button>
          <button
            className="filter-item"
            onClick={() => {
              setSearchParams("?brand=Other");
              queryClient.resetQueries({
                queryKey: ["AllShoes"],
              });
            }}
          >
            Other
          </button>
        </div>
        <form className="relative flex w-96 rounded-full border border-bd-main">
          <input
            type="text"
            name="search"
            id="search"
            className="flex-1 rounded-full pl-4 pr-14 outline-none"
          />
          <button
            type="submit"
            className="absolute right-0 flex h-full w-12 items-center justify-center rounded-br-full rounded-tr-full bg-btn-gray-bg"
          >
            <img src={SearchIcon} alt="Search Icon" />
          </button>
        </form>
      </div>
      <div className="flex h-0 flex-col gap-2.5 overflow-hidden lg2:hidden">
        <button className="filter-item active w-28">All</button>
        <button className="filter-item w-28">Nike</button>
        <button className="filter-item w-28">Adidas</button>
        <button className="filter-item w-28">Reebok</button>
        <button className="filter-item w-28">Vans</button>
        <button className="filter-item w-28">Puma</button>
        <button className="filter-item w-28">Other</button>
      </div>
    </div>
  );
}

export default Filtering;
