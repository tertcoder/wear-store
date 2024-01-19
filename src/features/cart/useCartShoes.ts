import { useCart } from "./useCart";
import useAllShoes from "../store/useAllShoes";
import { useMemo } from "react";

export function useCartShoes() {
  const { allShoes } = useAllShoes();
  const { cartItems, isLoading } = useCart();
  const cartShoes = useMemo(() => cartItems || null, [cartItems]);
  const allShoesArray = useMemo(() => allShoes || null, [allShoes]);
  const shoesInCart = useMemo(() => {
    const current =
      cartShoes && allShoesArray
        ? cartShoes.map((shoeCart) => {
            const matchShoe = allShoesArray.find(
              (shoe) => shoeCart.shoe_id === shoe.id,
            );
            const newShoeInCart = {
              ...matchShoe,
              mainId: parseInt(shoeCart.id),
            };
            return newShoeInCart ? { ...newShoeInCart } : null;
          })
        : null;
    return current;
  }, [allShoesArray, cartShoes]);
  const totalPrice = useMemo(
    () => (shoesInCart ? shoesInCart.reduce((a, b) => a + b!.price!, 0) : 0),
    [shoesInCart],
  );
  return { totalPrice, shoesInCart, isLoading };
}
