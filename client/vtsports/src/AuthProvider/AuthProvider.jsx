import { useContext, createContext, useState, useEffect } from "react";
import React from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext({
  isAuthenticated: false,
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const inactivity = 15 * 60 * 1000;

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      setUserId(decodedToken.id);
      console.log(decodedToken);
      const currentTime = Date.now() / 1000;
      console.log(currentTime);

      if (decodedToken.exp < currentTime) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userId");
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    }

    //función para registrar la última actividad
    const activityListener = () => {
      localStorage.setItem("lastActivityTime", Date.now());
      //   console.log(localStorage.getItem("lastActivityTime"));
    };
    // Registro de actividades
    window.addEventListener("mousemove", activityListener);
    window.addEventListener("keypress", activityListener);
    window.addEventListener("click", activityListener);

    const inactivityTimer = setInterval(() => {
      const currentTime = Date.now();
      // Si el usuario está inactivo durante el tiempo límite, cierra la sesión
      if (
        currentTime - localStorage.getItem("lastActivityTime") >=
        inactivity
      ) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userId");
        setIsAuthenticated(false);
      }
    }, 1000);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("mousemove", activityListener);
      window.removeEventListener("keypress", activityListener);
      clearInterval(inactivityTimer);
    };
  }, []);

  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("name");

    setIsAuthenticated(false);
    setUserId(null);
    // dispatch(logOut());
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
