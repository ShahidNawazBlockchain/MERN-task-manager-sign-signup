import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(""); // Reset error message when user starts typing
  };

  const handleSignin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/signin",
        formData
      );

      if (response.data && response.data.message) {
        // Display the error message
        setErrorMessage(response.data.message);
      } else {
        // Reset error message if sign-in is successful
        setErrorMessage("");
      }
    } catch (error) {
      // Handle other types of errors, such as network issues
      console.error("Error signing in:", error.message);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Signin</h2>
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errorMessage}
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
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full mb-3 p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleSignin}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Signin
      </button>
      <Link to={"/signup"}>
        <button className="w-full mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          SignUp
        </button>
      </Link>
    </div>
  );
};

export default Signin;
