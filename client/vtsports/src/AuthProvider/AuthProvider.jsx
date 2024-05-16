import { useContext, createContext, useState, useEffect } from "react";
import React from "react";
import { jwtDecode } from "jwt-decode";

console.log(localStorage);

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Intenta obtener el estado de autenticación del localStorage al inicio
    const storedAuth = localStorage.getItem("isAuthenticated");
    return storedAuth ? JSON.parse(storedAuth) : false;
  });
  const [userId, setUserId] = useState(null)
  const inactivity = 15 * 60 * 1000;
  console.log(inactivity);

  useEffect(() => {
    // Actualiza el localStorage cuando cambia el estado de autenticación
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      console.log(accessToken);
      setIsAuthenticated(true);
      const decodedToken = jwtDecode(accessToken);
      console.log(decodedToken);
      setUserId(decodedToken.id);
      console.log(userId);
      const currentTime = Date.now() / 1000;
      console.log(currentTime);

      if (decodedToken.exp < currentTime) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("isAuthenticated");
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    }

    //función para registrar la última actividad
    const activityListener = () => {
      localStorage.setItem("lastActivityTime", Date.now());
      //console.log(localStorage.getItem("lastActivityTime"));
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
        localStorage.removeItem("isAuthenticated");
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
    localStorage.removeItem("isAuthenticated");
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
