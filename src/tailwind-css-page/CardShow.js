import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { profiledata, profiledata2 } from "./profiledata";

const CardShow = () => {
  const [userdetails, setUserdetails] = useState(null);
  const handleButtonClick = (action, user) => {
    if (action === "alert1") {
      setUserdetails(user);
    } else if (action === "navigate") {
      alert("navigate to new page!!");
    } else {
      alert("Unknown action");
    }
  };

  return (
    <>
      <div>
        <h1>Heading One</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 m-10 gap-5 grid-cols-1">
          <ProfileCard
            data={profiledata}
            onButtonClick={(action, user) => handleButtonClick(action, user)}
          />
        </div>
      </div>
      <div>
        <h1>Heading Two</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 m-10 gap-5 grid-cols-1">
          <ProfileCard data={profiledata2} onButtonClick={handleButtonClick} />
        </div>
      </div>
      {/* User Details Section */}
      {userdetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="p-5 border-2 bg-white rounded-lg shadow-lg w-1/2 max-w-md text-center">
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            <p>
              <strong>Name:</strong> {userdetails.name}
            </p>
            <p>
              <strong>Position:</strong> {userdetails.position}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => setUserdetails(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardShow;
