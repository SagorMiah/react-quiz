import React from "react";
import Content from "../components/Content";
import Form from "../components/SignupForm";
import signup from "../images/signup.svg";

const Signup = () => {
  return (
    <div className="flex justify-between">
      <Content text="Create your account" img={signup} />
      <Form />
    </div>
  );
};

export default Signup;
