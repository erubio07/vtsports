import { Navigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";

export const ProtectedRoutes = ({ element }) => {
  const auth = useAuth();
  console.log(auth);
  return auth.isAuthenticated ? element : <Navigate to="/" />;
};
