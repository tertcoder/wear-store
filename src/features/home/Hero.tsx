import HeroImg from "../../assets/images/hero.jpg";
function Hero() {
  return (
    <div className="grid w-full grid-cols-[1fr_585px] rounded-[2.5rem]">
      <div></div>
      <img src={HeroImg} alt="Hero Image" />
    </div>
  );
}

export default Hero;
