import Hero from "../features/home/Hero";
import Brands from "../features/home/Brands";
import Collections from "../features/home/Collections";
import LatestProduct from "../features/home/LatestProduct";
import Header from "../ui/Header";

function Home() {
  return (
    <>
      <Header activePage="Home"/>

      <Hero />
      <Brands />
      <Collections />
      <LatestProduct />
    </>
  );
}

export default Home;
