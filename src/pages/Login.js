import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from '../assests/logo.png';

function Login({ handleLogin }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://feastable-world.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          handleLogin(user)
          navigate("/");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <div className="container-fluid bg-black h-screen" id="log">
      <img src={logo} alt="Logo" width="200" height="180" className="d-inline-block align-text-top"/>
      <center className="text-yellow-400 text-4xl mb-9">
        <h1>LOGIN</h1>
      </center>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-bold mb-2">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-white font-bold mb-2">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="mb-6">
                {errors.map((err) => (
                <p key={err} className='text-red-500'>{err}</p>
                ))}
        </div>
        <div className="text-center">
        <button type="submit" className="bg-white hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
          <p className="text-white mt-4">
            Create an account? <Link to="/signup" className="font-bold text-yellow-400">Sign up?</Link>
          </p>
          <p className="text-white mt-2">
            Forgot password? <Link to="" className="font-bold text-blue-400">Reset?</Link>
          </p>
        </div>
      </form>
      
  </div>
     
  );
}

export default Login;