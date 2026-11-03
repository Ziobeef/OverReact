import React from "react";
import { Navigate } from "react-router-dom";

function Guard({ children }) {
  const isLogin = localStorage.getItem("isLogin");
  if (!isLogin) {
    return <Navigate to="/" />;
  }
  return children;
}
function BeforeLogin({ children }) {
  const isLogin = localStorage.getItem("isLogin");
  if (isLogin === "true") {
    return <Navigate to="/crud" />;
  }
  return children;
}
export { BeforeLogin, Guard };
