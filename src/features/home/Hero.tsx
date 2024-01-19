import HeroImg from "../../assets/images/hero.webp";
import CartIcon from "../../assets/icons/Cart.svg";
import shoe from "../../assets/icons/wear-shoe.svg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero-on grid w-full  overflow-hidden rounded-[2.5rem] lg2:grid-cols-[1fr_500px] lg2:bg-hero-bg">
      <div className="flex items-center gap-2.5 p-14">
        <div className="flex max-w-xl flex-col items-center gap-[3.2rem] lg2:max-w-md lg2:items-start ">
          <div className="relative flex flex-col gap-5 text-center lg2:text-start">
            <h1 className="text-[2.5rem] font-bold leading-[3rem] text-orange-100 lg2:font-semibold lg2:tracking-wider lg2:text-txt-main">
              Start Wearing Beautiful Sneaker, you are in the right place.
            </h1>
            <p className="text-lg font-medium text-orange-100/80 lg2:text-txt-main">
              Explore our beautiful sneakers
            </p>
            <img
              src={shoe}
              alt="shoe svg"
              className="-top-4 right-6 hidden lg2:absolute"
            />
          </div>

          <button
            onClick={() => navigate("/store")}
            className="flex  items-center justify-center gap-2.5 rounded-full border border-bd-main bg-btn-main-bg px-6 py-[1.125rem] shadow-shdw-main lg2:bg-btn-light-bg"
          >
            <span className="text-lg font-semibold text-txt-main">
              Shop now
            </span>
            <img src={CartIcon} alt="Shop Icon" />
          </button>
        </div>
      </div>
      <img
        loading="lazy"
        src={HeroImg}
        alt="Hero Image"
        className="hidden self-end object-cover lg2:block"
      />
    </div>
  );
}

export default Hero;
