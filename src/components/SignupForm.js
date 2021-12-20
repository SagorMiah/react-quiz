import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password don't match!");
    }

    try {
      setError("");
      setLoading(true);
      signup(email, password, username);
      history.push("/");
    } catch (err) {
      setLoading(false);
      setError("Failed to create an account");
    }
  };

  return (
    <form className="w-1/2 mt-10" onSubmit={handleSubmit}>
      <input
        className="rounded-md w-full mb-4 p-2"
        type="text"
        placeholder="Enter your Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
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
      <input
        className="rounded-md w-full mb-4 p-2"
        type="password"
        placeholder="Enter your confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <div>
        <input
          type="checkbox"
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
          required
        />{" "}
        <span>I agree to the Terms & Conditions.</span>
      </div>
      <button
        disabled={loading}
        className="w-full text-center bg-blue-500 text-white font-bold text-xl py-2 rounded-md mt-4"
      >
        SUBMIT NOW
      </button>

      {error && <p>{error}</p>}

      <div className="mt-2 text-center">
        <span>
          Already have an account?{" "}
          <NavLink className="text-blue-500 font-semibold" to="/login">
            Login
          </NavLink>{" "}
          Insted
        </span>
      </div>
    </form>
  );
};

export default Form;
