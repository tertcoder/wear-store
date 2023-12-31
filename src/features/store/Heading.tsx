import StoreImg from "../../assets/images/storeImg.webp";

function Heading() {
  return (
    <div
      className="flex h-72 w-full max-w-7xl  items-center justify-center rounded-[2.5rem]"
      style={{
        background: `linear-gradient(0deg, rgba(99, 60, 6, 0.50) 0%, rgba(99, 60, 6, 0.50) 100%), url(${StoreImg}) center/cover no-repeat`,
      }}
    >
      <h1
        data-text="Find Your Perfect Pair"
        className="text-shadow-drop-inner inline-block text-center font-coiny text-5xl text-btn-main-bg lg:text-[4rem]  "
      >
        Find Your Perfect Pair
      </h1>
    </div>
  );
}

export default Heading;
