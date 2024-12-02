import React from "react";

const HeroBanner = () => {
  return (
    <div className="">
      <div className="w-full flex justify-center items-center py-2">
        <img
          className="relitive w-full h-[550px] object-cover md:h-[600px] lg:w-[80%] lg:h-full"
          src="./public/Main Banner.jpg"
          alt="Hero Banner"
        />
        <div className="absolute w-[88%] h-[45%] bg-[#222222] flex flex-col justify-center items-center text-center space-y-7 lg:w-[60%] lg:h-[40%]">
          <h7 className="text-white font-serif">
            DELIVERING PREMIUM GARMENTS FOR A
          </h7>
          <hr className="border-2 border-white w-[10%]" />
          <h1 className="text-white font-serif text-5xl pb-10 lg:text-7xl">
            SUSTAINABLE FUTURE
          </h1>
          <a href="#">
            <button
              className="border-2 border-white px-8 py-2 text-white font-serif text-2xl hover:bg-white hover:text-black "
              type="button"
            >
              Explote
            </button>
          </a>
        </div>
      </div>
      <div className="w-full px-5 flex justify-center items-center text-center">
        <p className="text-sm font-serif md:text-lg lg:w-[80%] py-2">
          Welcome to Zeal Groups, where we stay ahead of the curve in the
          dynamic world of fashion. As a leading garment manufacturing company,
          we are dedicated to crafting clothing that not only meets but exceeds
          the expectations of modern trends. Our commitment to innovation and
          quality is evident in every stitch, fabric choice, and design detail.
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
