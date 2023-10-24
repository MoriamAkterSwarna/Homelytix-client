import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

export default function PrivateRoute({ children }) {
  const { currentUser, loading } = useSelector((state) => state.user);
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }
  if (currentUser) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
