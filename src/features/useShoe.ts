import { useQuery } from "@tanstack/react-query";
import { getShoe } from "../services/apiShoes";
import { useParams } from "react-router-dom";

function useShoe() {
  const { shoeId } = useParams();
  const { isLoading, data: shoe } = useQuery({
    queryKey: ["shoe"],
    queryFn: () => getShoe(shoeId!),
  });
  console.log(shoe);
  return { isLoading, shoe };
}
export default useShoe;
