import Footer from "../ui/Footer";
import AllShoes from "../features/store/AllShoes";
import Filtering from "../features/store/Filtering";
import Heading from "../features/store/Heading";
import Header from "../ui/Header";
import NewShoe from "../features/NewShoe";

function Store() {
  return (
    <>
      <Header activePage="Store" />
      <Heading />
      <Filtering />
      <AllShoes />
      <Footer />
      <NewShoe />
    </>
  );
}

export default Store;
