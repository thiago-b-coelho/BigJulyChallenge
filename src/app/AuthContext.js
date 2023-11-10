"use client"
import { useRouter } from "next/navigation";
import { jwtDecode } from 'jwt-decode'

import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

function decodeToken(token) {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const authUser = checkAuthentication();

    if (!authUser && router.pathname !== "/") {
      router.push("/");
    }

    setUser(authUser);
  }, []);

  const checkAuthentication = () => {
    const token = localStorage.getItem('token');
    
    if (token) {
      const loggedUser = decodeToken(token);
      
      if (loggedUser) {
        return loggedUser;
      } else {
        localStorage.removeItem('token');
        return null;
      }
    }
    return null;
  }

  const logOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, logOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

