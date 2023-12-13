import Filtering from "../features/store/Filtering";
import Heading from "../features/store/Heading";
import Header from "../ui/Header";

function Store() {
  return (
    <>
      <Header activePage="Store" />
      <Heading />
      <Filtering />
    </>
  );
}

export default Store;
