import HeroImg from "../../assets/images/hero.jpg";
function Hero() {
  return (
    <div className="grid w-full grid-cols-[1fr_585px] rounded-[2.5rem]">
      <div>
        <div>
          <div>
            <h1>Start Wearing Beautiful Sneaker</h1>
          </div>
          <button></button>
        </div>
      </div>
      <img src={HeroImg} alt="Hero Image" className="object-cover" />
    </div>
  );
}

export default Hero;
