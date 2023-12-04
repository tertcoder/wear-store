import Hero from "../features/home/Hero";
import Brands from "../features/home/Brands";
import Collections from "../features/home/Collections";
import { useEffect } from "react";
import { getAllShoes } from "../services/apiShoes";

function Home() {
  useEffect(() => {
    async function fetchData() {
      const data = await getAllShoes();
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <Hero />
      <Brands />
      <Collections />
    </>
  );
}

export default Home;
