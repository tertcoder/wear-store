import Footer from "../ui/Footer";
import AllShoes from "../features/store/AllShoes";
import Filtering from "../features/store/Filtering";
import Heading from "../features/store/Heading";
import Header from "../ui/Header";
import Cart from "../features/Cart";

function Store() {
  return (
    <>
      <Header activePage="Store" />
      <Heading />
      <Filtering />
      <AllShoes />
      <Footer />
      <Cart />
    </>
  );
}

export default Store;
