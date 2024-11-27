import React from "react";

const ProfileCard = ({ data }) => {
  return (
    <>
      {data.map((val, index) => {
        return (
          <>
            <div
              key={index}
              className="h-full lg:w-full m-5 border-2 shadow-md flex flex-col justify-center items-center"
            >
              <div className="rounded-full h-14 w-14  bg-slate-500 flex justify-center m-5 items-center">
                {val.logo}
              </div>
              <h1>{val.name}</h1>
              <h3>Position:{val.position}</h3>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ProfileCard;
