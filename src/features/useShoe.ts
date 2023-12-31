import { useQuery } from "@tanstack/react-query";
import { getShoe } from "../services/apiShoes";
import { useSearchParams } from "react-router-dom";

function useShoe() {
  const [searchParams] = useSearchParams();
  const idShoe = searchParams.get("idShoe");
  const { isLoading, data: shoe } = useQuery({
    queryKey: ["shoe"],
    queryFn: () => getShoe(idShoe!),
  });

  return { isLoading, shoe };
}
export default useShoe;
