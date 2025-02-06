import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-gray-300 flex flex-col items-center w-full">
      {/* Main Content */}
      <div className="w-full p-4 flex justify-center flex-col items-center">
        <h1 className="text-3xl font-semibold">Hi ______</h1>
        <p className="text-gray-600">User manual</p>

        {/* Video Section */}
        <div className="mt-4 w-[1200px] flex justify-center items-center gap-3">
          <iframe
            width="50%"
            height="300"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="p-4 bg-gray-200 rounded-md w-1/2 h-[300px]">
            <h2 className="text-lg font-semibold">Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              nobis ipsum harum nesciunt consequatur consequuntur earum fuga
              ullam? Iste ea, aliquid nemo dolor animi architecto aut
              reprehenderit. Quas, earum. Consequuntur delectus soluta quaerat,
              illo velit enim corporis autem repudiandae quisquam.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Find crops for your soil</li>
            <li>Advanced agriculture</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
