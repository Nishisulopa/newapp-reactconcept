import React from "react";

const Hns = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/*Header*/}
      <div className="w-full h-[5rem]  flex justify-center bg-pink-200">
        Header
      </div>
      {/* Navbar */}
      <div className="w-full h-[5rem] sticky top-0 bg-yellow-200">Navbar</div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="bg-gray-300 lg:w-[50%] w-full lg:block hidden">
          <p>Sidebar</p>
        </div>

        {/* Section */}
        <section className="bg-gray-500 text-white py-10 flex flex-col items-center w-full lg:h-auto h-screen overflow-y-auto">
          <h1 className="text-4xl font-bold">Welcome to Our Product</h1>
          <p className="text-lg mt-4">
            A short and compelling tagline goes here.
          </p>
          <h1 className="text-4xl font-bold">Welcome to Our Product</h1>
          <p className="text-lg mt-4">
            A short and compelling tagline goes here.
          </p>
          <div className="flex w-full justify-end px-8 mt-auto">
            <button className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow hover:bg-gray-100">
              Get Started
            </button>
          </div>
        </section>
      </div>
      {/* <div className="bg-pink-300 p-5 w-full">
        <p>Footer</p>
      </div> */}
    </div>
  );
};

export default Hns;
