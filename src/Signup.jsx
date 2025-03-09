import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        username,
        email,
        password,
      });

      alert(response.data.message);
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create an Account</h2>

    <form onSubmit={handleSignup} className="flex flex-col space-y-6 w-full">
      {/* Username Field */}
      <div className="flex flex-col w-full">
        <label className="text-gray-700 font-medium mb-2">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col w-full">
        <label className="text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password Field */}
      <div className="flex flex-col w-full">
        <label className="text-gray-700 font-medium mb-2">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Signup Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
      >
        Sign Up
      </button>
    </form>
  </div>
</div>
  );
};

export default Signup;
