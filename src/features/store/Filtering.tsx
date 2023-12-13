import FilterIcon from "../../assets/icons/Filter.svg";
import SearchIcon from "../../assets/icons/Search.svg";

function Filtering() {
  return (
    <div className="flex w-full max-w-7xl justify-between">
      <button className="flex items-center rounded-full border border-bd-main bg-btn-gray-bg px-3 py-4">
        <img src={FilterIcon} alt="Filter Icon" />
      </button>
      <div className="flex  gap-2.5">
        <button className="filter-item active">All</button>
        <button className="filter-item">Nike</button>
        <button className="filter-item">Adidas</button>
        <button className="filter-item">Reebok</button>
        <button className="filter-item">Vans</button>
        <button className="filter-item">Puma</button>
        <button className="filter-item">Other</button>
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
  );
}

export default Filtering;
