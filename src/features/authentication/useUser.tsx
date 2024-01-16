import { useQuery } from "@tanstack/react-query";
import { getCurrentUserApi } from "../../services/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUserApi,
  });
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
