import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();

  const handleGetOTP = () => {
    if (mobileNumber.length === 10) {
      navigate("/otp");
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[500px] flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <img
          src="https://img.freepik.com/premium-vector/farmer-logo-template-design-vector-emblem-design-concept-creative-symbol-icon_316488-979.jpg?w=826"
          alt="Farmer Icon"
          className="w-24 h-24 mx-auto mb-4"
        />
        <p className="mb-2 font-semibold">Enter your mobile number</p>
        <p className="text-sm text-gray-600 mb-4">We will be sending you a 4-digit OTP</p>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter your mobile number"
          className="w-[300px]  px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={handleGetOTP}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
        >
          Get OTP
        </button>
        <p className="mt-4 text-sm">
          Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
