import LogoSVG from "../assets/icons/Logo-Big.svg";

function Loader({
  loaderText = "Finding the perfect pair for you...",
}: {
  loaderText?: string;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center gap-6">
        <img
          src={LogoSVG}
          alt="WearStore Icon"
          className=" rounded-full border border-bd-gray bg-main-bg shadow-shdw-main"
        />
        <div className="flex items-center justify-center gap-4">
          <div className="h-3 w-8 rounded-full border border-bd-main bg-[#FB923C] shadow-shdw-main motion-safe:animate-spin"></div>
          {loaderText && (
            <span className="font-medium text-txt-gray">{loaderText}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Loader;
