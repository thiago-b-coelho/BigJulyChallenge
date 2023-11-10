"use client";
import { useAuth } from "@/app/AuthContext";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const withAuth = (Component) => {
  return function WithAuth(props) {
    const [domLoaded, setDomLoaded] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
      const localUser = localStorage.getItem("token");
      if (!localUser) {
        redirect("/");
      }
      setDomLoaded(true);
    }, []);

    return <>{domLoaded && <Component {...props} />}</>;
  };
};

export default withAuth;
