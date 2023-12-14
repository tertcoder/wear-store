import { useQuery } from "@tanstack/react-query";
import { getAllShoes } from "../../services/apiShoes";

function useAllShoes() {
  const { isLoading, data: allShoes } = useQuery({
    queryKey: ["AllShoes"],
    queryFn: getAllShoes,
  });
  return { isLoading, allShoes };
}
export default useAllShoes;
