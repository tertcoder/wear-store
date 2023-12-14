import Footer from "../ui/Footer";
import AllShoes from "../features/store/AllShoes";
import Filtering from "../features/store/Filtering";
import Heading from "../features/store/Heading";
import Header from "../ui/Header";

function Store() {
  return (
    <>
      <Header activePage="Store" />
      <Heading />
      <Filtering />
      <AllShoes />
      <Footer />
    </>
  );
}

export default Store;
