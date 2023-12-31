import { useQuery } from "@tanstack/react-query";
import { getShoesForHomePage } from "../../services/apiShoes";

function useCollectionItems() {
  const {
    isLoading,
    data: recentShoes,
    error,
  } = useQuery({
    queryKey: ["collections"],
    queryFn: getShoesForHomePage,
  });
  return { isLoading, recentShoes, error };
}

export default useCollectionItems;
