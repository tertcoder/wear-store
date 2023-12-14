import Hero from "../features/home/Hero";
import Brands from "../features/home/Brands";
import Collections from "../features/home/Collections";
import LatestProduct from "../features/home/LatestProduct";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

function Home() {
  return (
    <>
      <Header activePage="Home" />

      <Hero />
      <Brands />
      <Collections />
      <LatestProduct />
      <Footer />
    </>
  );
}

export default Home;
