import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(login(email, password))
      .then(() => {
        setLoading(true);
        setError("");
        history.push("/");
      })
      .catch(() => {
        setError("Failed to Login!");
        setLoading(false);
      });
  };
  return (
    <form className="w-1/2 mt-20" onSubmit={handleSubmit}>
      <input
        className="rounded-md w-full mb-4 p-2"
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="rounded-md w-full mb-4 p-2"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        disabled={loading}
        type="submit"
        className="w-full text-center bg-blue-500 text-white font-bold text-xl py-2 rounded-md"
      >
        SUBMIT NOW
      </button>
      {error && <p>{error}</p>}
      <div className="mt-2 text-center">
        <span>
          Don't have an account?{" "}
          <NavLink className="text-blue-500 font-semibold" to="/signup">
            Signup
          </NavLink>{" "}
          Insted
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
