import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (otp.length === 4) {
      navigate("/detailsentry");
    } else {
      alert("Please enter a valid 4-digit OTP.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-80 bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Enter OTP</h1>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          maxLength="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 text-center"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
