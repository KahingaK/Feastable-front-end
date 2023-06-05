import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assests/logo.png";

function Signup({ handleLogin }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const [errors, setErrors] = useState([]);

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Pressed");

    fetch("https://feastable-world.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, email, password, gender }),
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
    <div className="container-fluid bg-black h-screen">
      <img src={logo} alt="Logo" width="200" height="180" className="d-inline-block align-text-top" />
      <center className="text-yellow-400 text-4xl mb-9">
        <h1>SIGNUP</h1>
      </center>

      <form onSubmit={handleSubmit} className="mt-4 max-w-sm mx-auto">
        <div className="mb-4">
          <input
            type="text"
            className="block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Username"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            className="block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            className="block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Gender"
            name="gender"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          />
        </div>

        <div className="mb-4">
                {errors.map((err) => (
                <p key={err} className='text-red-500'>{err}</p>
                ))}
        </div>

        <div className="text-center">
          <button type="submit" className="bg-white hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Signup
          </button>
          <p className="text-white mt-4">
          Already registered ? <Link to="/login" className="font-bold text-yellow-400">Login?</Link>
          </p>
        </div>
      </form>

    </div>
    );
}
export default Signup;