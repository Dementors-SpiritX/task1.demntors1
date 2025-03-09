import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 px-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back</h2>

        <form onSubmit={handleLogin} className="flex flex-col space-y-6 w-full">
          {/* Email Input */}
          <div className="flex flex-col w-full">
            <label className="text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col w-full">
            <label className="text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-4 rounded-md font-semibold hover:bg-green-700 transition duration-300"
          >
            Login
          </button>

          {/* Extra Links */}
          <div className="text-center text-gray-600 mt-4">
            <p className="text-sm">
              Don't have an account?{" "}
            </p>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
