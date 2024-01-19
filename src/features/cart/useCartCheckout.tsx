import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteAllCartItems } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useCartCheckout() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: checkout } = useMutation({
    mutationFn: deleteAllCartItems,
    onSuccess: () => {
      toast.success("We already got your Orders!");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return { isLoading, checkout };
}
