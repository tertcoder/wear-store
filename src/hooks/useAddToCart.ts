import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { insertInCart } from "../services/apiCart";

function useAddToCart() {
  const queryClient = useQueryClient();

  const { mutate: addToCart, status } = useMutation({
    mutationFn: insertInCart,
    onSuccess: () => {
      toast.success("Added to cart");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return { addToCart, status };
}

export default useAddToCart;
