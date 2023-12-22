import HeroImg from "../../assets/images/hero.webp";
import CartIcon from "../../assets/icons/Cart.svg";
import shoe from "../../assets/icons/wear-shoe.svg";

function Hero() {
  return (
    <div className="grid w-full grid-cols-[1fr_500px]  overflow-hidden rounded-[2.5rem] bg-hero-bg">
      <div className="flex items-center justify-center gap-2.5 p-14">
        <div className="flex max-w-md flex-col gap-[3.2rem]">
          <div className="relative flex flex-col gap-5">
            <h1 className="text-[2.5rem] font-semibold leading-[3rem] tracking-wider text-txt-main">
              Start Wearing Beautiful Sneaker, you are in the right place.
            </h1>
            <p className="text-lg font-normal text-txt-main">
              Explore our beautiful sneakers
            </p>
            <img
              src={shoe}
              alt="shoe svg"
              className="absolute -top-4 right-6"
            />
          </div>

          <button className="flex items-center justify-center gap-2.5 self-start rounded-full border border-bd-main bg-btn-light-bg px-6 py-[1.125rem] shadow-shdw-main">
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
        className="self-end object-cover"
      />
    </div>
  );
}

export default Hero;
