import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../../services/apiShoes";

function useBrandItems() {
  const {
    isLoading,
    data: availableBrands,
    error,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });
  if (availableBrands) {
    // Order the "other" brand to the end
    const otherIndex: number = availableBrands.findIndex(
      (obj) => (obj.brandName = "Other"),
    );
    if (otherIndex !== -1) {
      const otherObject: { id: number; brandName: string; image: string } =
        availableBrands.splice(otherIndex, 1)[0];
      availableBrands.push(otherObject);
    }
  }
  // Then returning the final result
  return { isLoading, availableBrands };
}
export default useBrandItems;
