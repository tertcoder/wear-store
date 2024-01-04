import LogoSVG from "../assets/icons/Logo-Big.svg";

function ErrorFallback() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center gap-6">
        <img
          src={LogoSVG}
          alt="WearStore Icon"
          className=" rounded-full border border-bd-gray bg-main-bg shadow-shdw-main"
        />

        <span className="text-xl font-medium text-txt-gray">
          Page not found!
        </span>
      </div>
    </div>
  );
}

export default ErrorFallback;
