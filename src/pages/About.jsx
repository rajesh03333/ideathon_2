import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white rounded-2xl shadow-lg w-11/12 md:w-1/2 mb-20">
        <div className="p-6">
          <div className="flex justify-center">
            <img
              src="https://wilsonprintingusa.com/wp-content/uploads/2013/12/bigstock-Hands-holding-plant-in-soil-on-28160849.jpg" // Replace with the actual image path
              alt="Hands holding soil with a plant"
              className="rounded-lg mb-4"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <button className="bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600">
              Suggest crops based on your location
            </button>

            <button className="bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600">
              Upload Soil test data
            </button>
          </div>

          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
