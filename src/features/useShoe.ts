import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getShoe } from "../services/apiShoes";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function useShoe() {
  const queryClient = useQueryClient();
  const { shoeId } = useParams();
  const {
    isFetching,
    isLoading,
    data: shoe,
  } = useQuery({
    queryKey: ["shoe"],
    queryFn: () => getShoe(shoeId!),
  });
  useEffect(() => {
    if (shoeId) queryClient.fetchQuery({ queryKey: ["shoe"] });
  }, [shoeId, queryClient]);

  return { isFetching, isLoading, shoe };
}
export default useShoe;
