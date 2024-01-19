import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteInCartItem } from "../../services/apiCart";
import toast from "react-hot-toast";

function useDeleteCart() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: deleteFromCart } = useMutation({
    mutationFn: deleteInCartItem,
    onSuccess: () => {
      toast.success("Item successfully deleted from cart.");

      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return { isLoading, deleteFromCart };
}

export default useDeleteCart;
