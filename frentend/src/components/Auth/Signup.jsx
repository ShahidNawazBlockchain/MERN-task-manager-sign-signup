import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/register",
        formData
      );

      // Check if the 'data' property exists in the response
      if (response && response.data) {
        setSuccessMessage("Signup successful!");
        setErrorMessage(""); // Reset error message
        // You can redirect the user or perform other actions here
      } else {
        setErrorMessage("Unexpected response format. Please try again.");
        setSuccessMessage("");
      }
    } catch (error) {
      // Check if the error response has 'response' property and 'data' property
      if (error.response && error.response.data) {
        setErrorMessage(
          error.response.data.message || "An error occurred during signup."
        );
      } else {
        setErrorMessage("Unexpected error. Please try again.");
      }
      setSuccessMessage(""); // Reset success message
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {successMessage}
        </div>
      )}
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full mb-3 p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        className="w-full mb-3 p-2 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full mb-3 p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleSignup}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Signup
      </button>
      <Link to={"/signin"}>
        <button className="w-full mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Signin
        </button>
      </Link>
    </div>
  );
};

export default Signup;
