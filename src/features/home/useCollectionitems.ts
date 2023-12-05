import { useQuery } from "@tanstack/react-query";
import { getShoesForHomePage } from "../../services/apiShoes";

function useCollectionItems() {
  const data = useQuery({
    queryKey: ["collections"],
    queryFn: getShoesForHomePage,
  });
  return { data };
}

export default useCollectionItems;
