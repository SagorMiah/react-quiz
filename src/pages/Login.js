import React from "react";
import Content from "../components/Content";
import LoginForm from "../components/LoginForm";
import login from "../images/login.svg";

const Login = () => {
  return (
    <div className="flex justify-between flex-wrap h-full">
      <Content text="Login to your account" img={login} />
      <LoginForm />
    </div>
  );
};

export default Login;
