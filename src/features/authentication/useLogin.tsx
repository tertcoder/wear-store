import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),

    onSuccess: (user) => {
      toast.success("Successfully logged in!");
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
    },
    onError: () => {
      toast.error("Provided email or password is incorrect");
    },
  });
  return { login, isLoading };
}
