import React from 'react';

const Profile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full">
      <div className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white mb-30">
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-300"></div>
          <h2 className="text-xl font-semibold mt-4">My Profile</h2>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input type="text" value="Mr. Name" disabled className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 cursor-not-allowed" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Mobile No.</label>
          <input type="text" value="9999999999" disabled className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 cursor-not-allowed" />
        </div>

        <button className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Profile;