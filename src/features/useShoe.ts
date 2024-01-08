import { useQuery } from "@tanstack/react-query";
import { getShoe } from "../services/apiShoes";
import { useParams } from "react-router-dom";

function useShoe() {
  const { shoeId } = useParams();
  const {
    isFetching,
    isLoading,
    data: shoe,
  } = useQuery({
    queryKey: ["shoe"],
    queryFn: () => getShoe(shoeId!),
  });
  return { isFetching, isLoading, shoe };
}
export default useShoe;
