import { useQuery } from "@tanstack/react-query";
import { loadInCart } from "../../services/apiCart";

export function useCart() { 
  const { data: cartItems, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: loadInCart,
  }); 

  return { cartItems, isLoading };
}
