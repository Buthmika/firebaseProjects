import React from "react";
import { FcGoogle } from "react-icons/fc";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-2xl shadow-xl border border-gray-700">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-400 mb-6">Login to your Account</p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:opacity-90 transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="w-full h-px bg-gray-600"></div>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="w-full h-px bg-gray-600"></div>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium transition"
          >
            <FcGoogle size={22} />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
