import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

const PrivateRoute = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  // Se ainda não tem token, não renderiza nada
  if (!token) return null;

  return <Outlet />;
};

export default PrivateRoute;
