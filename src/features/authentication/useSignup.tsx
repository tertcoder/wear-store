import { useMutation } from "@tanstack/react-query";
import { signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address.",
      );
      navigate("/login", { replace: true });
    },
    onError: () => toast.error("Account not created! Please try again."),
  });

  return { signup, isLoading };
}
