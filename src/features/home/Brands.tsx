import LineIcon from "../../assets/icons/Line.svg";

function Brands() {
  return (
    <div className="flex w-full flex-col items-start gap-[0.4rem]">
      <div className="flex flex-col items-start justify-center gap-1 p-2.5">
        <span className="text-2xl font-medium text-txt-main">Brands</span>
        <img src={LineIcon} alt="Line svg" />
      </div>
      <div className="flex h-24 flex-col justify-center py-[0.625rem] "></div>
    </div>
  );
}

export default Brands;
