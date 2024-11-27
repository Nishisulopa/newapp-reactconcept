import React from "react";
import ProfileCard from "./ProfileCard";
import { profiledata, profiledata2 } from "./profiledata";
const CardShow = () => {
  const data = profiledata.map((val) => val);
  const data2 = profiledata2.map((val) => val);

  return (
    <>
      <div>
        <h1>Heading one</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 m-10 gap-5 grid-cols-1">
          <ProfileCard data={data} />
        </div>
      </div>
      <div>
        <h1>Heading two</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 m-10 gap-5 grid-cols-1">
          <ProfileCard data={data2} />
        </div>
      </div>
    </>
  );
};

export default CardShow;
