import { useQuery, useQueryClient } from "react-query";
import { getShoesForHomePage } from "../../services/apiShoes";

function useCollectionItems() {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["collections"],
    queryFn: getShoesForHomePage,
  });
}
