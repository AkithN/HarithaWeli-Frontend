import React from "react";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg p-8 rounded-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-semibold text-center mb-4">
          Create an Account
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Join us by entering your details below
        </p>

        {/* Social Signup Buttons */}
        <div className="flex flex-col space-y-3">
          <button className="flex items-center justify-center w-full py-2 bg-white text-gray-900 rounded-md hover:bg-gray-200 transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign Up with Google
          </button>
        </div>

        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-600" />
          <span className="text-gray-400 mx-2">or</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Registration Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Sign Up
          </button>
        </form>

        <p className="text-gray-300 text-center mt-4">
          Already have an account?{" "}
          <a href="/Login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
