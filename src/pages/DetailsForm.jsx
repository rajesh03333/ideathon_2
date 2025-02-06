import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    country: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Enter your details</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">Enter name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block font-medium">Enter soil details</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="location" className="block font-medium">Enter location</label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="block font-medium">Enter country name</label>
            <input
              type="text"
              id="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsForm;
