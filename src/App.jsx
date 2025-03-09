import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";

function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all ease-in-out duration-500">
      <h1 className="text-4xl font-bold text-white mb-6">SecureConnect</h1>

      <div className="transition-transform duration-500 ease-in-out">
        {showSignup ? <Signup /> : <Login />}
      </div>

      <button
        onClick={() => setShowSignup(!showSignup)}
        className="mt-6 bg-white text-blue-500 py-2 px-6 rounded-full hover:bg-blue-200 transition-all duration-300"
      >
        {showSignup ? "Back to Login" : "Create an account"}
      </button>
    </div>
  );
}

export default App;
