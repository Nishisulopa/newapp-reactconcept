import React from "react";

const ResponsivewithCard = () => {
  const carddata = [
    {
      name: "Card1",
      description: "Description for card 1.",
    },
    {
      name: "Card2",
      description: "Description for card 2.",
    },
    {
      name: "Card3",
      description: "Description for card 3.",
    },
    {
      name: "Card4",
      description: "Description for card 4.",
    },
    {
      name: "Card5",
      description: "Description for card 5.",
    },
    {
      name: "Card6",
      description: "Description for card 6.",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="sticky top-0 w-full h-[5rem] flex justify-center bg-pink-200">
        Header
      </div>

      {/* Main Content */}
      <div className=" flex-1 bg-gray-100 px-4 overflow-auto flex justify-center items-center">
        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carddata?.map((item, index) => (
            <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[50vw] h-[30vh] sm:w-[28vw] sm:h-[28vh]">
              <h2 className="text-xl font-bold">{item?.name}</h2>
              <p className="text-gray-600 mt-2">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-pink-300 p-5 w-full">
        <p>Footer</p>
      </div>
    </div>
  );
};

export default ResponsivewithCard;
