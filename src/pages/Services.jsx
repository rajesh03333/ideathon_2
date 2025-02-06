import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen w-full">
      <div className="bg-white rounded-2xl shadow-lg w-full md:full h-full">
        <div className="p-4">
          {/* Search Bar */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-3/4">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-3 py-2 focus:outline-none"
              />
              <button className="bg-gray-300 px-4 py-2">
                <i className="icon-search"></i>
              </button>
            </div>

            {/* Sort By Dropdown */}
            <div>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none">
                <option>Sort by</option>
                <option>New Tech</option>
                <option>Advnc Tool</option>
                <option>Save Soil</option>
              </select>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "https://www.youtube.com/embed/YOUR_VIDEO_ID",
              "https://www.youtube.com/embed/YOUR_VIDEO_ID",
              "https://www.youtube.com/embed/YOUR_VIDEO_ID",
              "https://www.youtube.com/embed/YOUR_VIDEO_ID",
              "https://www.youtube.com/embed/YOUR_VIDEO_ID",
              "https://www.youtube.com/embed/YOUR_VIDEO_ID",
            ].map((videoUrl, index) => (
              <div key={index} className="rounded-lg shadow-md overflow-hidden">
                <iframe
                  className="w-full h-[200px]"
                  src={videoUrl}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          {/* Contact Us Button */}
          <div className="flex justify-end mt-4">
            <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
