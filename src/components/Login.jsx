import React, { useState } from "react";

const Login = ({ setShowLogin }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }
    // Get old users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user
    users.push(form);

    // Save back
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Saved Users:", users);  // DEBUG

    alert("Signup successful!");

    setShowLogin(false);
  };

  return (
    <div className="login-overlay" onClick={() => setShowLogin(false)}>
      <div className="login-box" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={() => setShowLogin(false)}>✖</span>

        <h2>Sign up</h2>

        <input
          type="text"
          name="name"
          placeholder="Your name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Create Account</button>
      </div>
    </div>
  );
};

export default Login;