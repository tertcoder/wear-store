import HeroImg from "../../assets/images/hero.webp";
import CartIcon from "../../assets/icons/Cart.svg";
import shoe from "../../assets/icons/wear-shoe.svg";

function Hero() {
  return (
    <div className="lg2:grid-cols-[1fr_500px] hero-on lg2:bg-hero-bg  grid w-full overflow-hidden rounded-[2.5rem]">
      <div className="flex items-center justify-center gap-2.5 p-14">
        <div className="lg2:max-w-md lg2:items-start flex max-w-xl flex-col items-center gap-[3.2rem] ">
          <div className="lg2:text-start relative flex flex-col gap-5 text-center">
            <h1 className="lg2:text-txt-main lg2:tracking-wider lg2:font-semibold text-[2.5rem] font-bold leading-[3rem] text-orange-100">
              Start Wearing Beautiful Sneaker, you are in the right place.
            </h1>
            <p className="lg2:text-txt-main text-lg font-medium text-orange-100/80">
              Explore our beautiful sneakers
            </p>
            <img
              src={shoe}
              alt="shoe svg"
              className="lg2:absolute -top-4 right-6 hidden"
            />
          </div>

          <button className="lg2:bg-btn-light-bg  flex items-center justify-center gap-2.5 rounded-full border border-bd-main bg-btn-main-bg px-6 py-[1.125rem] shadow-shdw-main">
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
        className="lg2:block hidden self-end object-cover"
      />
    </div>
  );
}

export default Hero;
