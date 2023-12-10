import { useQuery } from "@tanstack/react-query";
import { getLatestShoe } from "../../services/apiShoes";

function useLatestProduct() {
  const { isLoading, data: newShoe } = useQuery({
    queryKey: ["newShoe"],
    queryFn: getLatestShoe,
  });
  return { isLoading, newShoe };
}
export default useLatestProduct;
