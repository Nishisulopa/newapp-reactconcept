import React from "react";
import ProfileCard from "./ProfileCard";
import { profiledata, profiledata2 } from "./profiledata";

const CardShow = () => {
  const handleButtonClick = (action) => {
    if (action === "alert1") {
      alert("Button clicked!");
    } else if (action === "navigate") {
      alert("navigate to another page");
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
            onButtonClick={(name) =>
              name === "Madhusmita"
                ? handleButtonClick("alert1")
                : handleButtonClick("navigate")
            }
          />
        </div>
      </div>
      <div>
        <h1>Heading Two</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 m-10 gap-5 grid-cols-1">
          <ProfileCard
            data={profiledata2}
            onButtonClick={(name) =>
              name === "Mftffhfgyd"
                ? handleButtonClick("alert1")
                : handleButtonClick("navigate")
            }
          />
        </div>
      </div>
    </>
  );
};

export default CardShow;
