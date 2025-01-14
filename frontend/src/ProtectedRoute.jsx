import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:3000/user/auth-check", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (res.status === 200) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch {
        setAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (auth === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        Checking authentication...
      </div>
    );
  }

  return auth ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
