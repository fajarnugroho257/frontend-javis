import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {

    const { token, logout } = useAuthStore();

    useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; // detik
        if (decoded.exp && decoded.exp < currentTime) {
          console.log("Token expired");
          logout(); // hapus token di Zustand
        }
      } catch (error) {
        console.error("Token invalid:", error);
        logout();
      }
    }
  }, [token, logout]);
  
    return token ? children : <Navigate to="/login" replace  />
}

export default ProtectedRoute;
