import { useQuery } from "@tanstack/react-query";
import { getAllShoes } from "../../services/apiShoes";
import { useSearchParams } from "react-router-dom";

function useAllShoes() {
  const [searchParams] = useSearchParams();
  const brand = searchParams.get("brand") ?? "";
  const { isLoading, data: allShoes } = useQuery({
    queryKey: ["AllShoes"],
    queryFn: () => getAllShoes({ brand }),
  });
  return { isLoading, allShoes };
}
export default useAllShoes;
