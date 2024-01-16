import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { ReactNode, useEffect } from "react";
import Loader from "./Loader";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);
  if (isLoading) return <Loader />;
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
