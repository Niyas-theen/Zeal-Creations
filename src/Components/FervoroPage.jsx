import React from "react";

const FervoroPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="relitive flex">
        <div className="w-1/2 h-screen bg-[#faf9f6]"></div>
        <div className="w-1/2 h-screen bg-[#11302b]"></div>
        <div className="absolute">
          <img
            className="relitive h-screen object-cover"
            src="Banner.png"
            alt="Model"
          />
          <p className="font-[Hanken Grotesk] font-extralight hidden  lg:block lg:text-xl lg:font-extralight lg:text-[[#11302b] lg:absolute lg:w-[33%] lg:text-justify lg:bottom-72 lg:pl-5">
            Fervoro was born out of a passion for the refined lifestyle that
            polo represents. We saw an opportunity to blend the classic elements
            of polo with modern design, creating a brand that celebrates both
            heritage and contemporary fashion. What started as a focus on the
            iconic polo shirt has now evolved into a complete collection of
            elegant clothing that captures the essence of this sport.
          </p>
          <a href="#">
            <img
              className="absolute w-12 top-5 left-5 lg:w-20 "
              src="Logo.png"
              alt="Logo"
            />
          </a>
          <a
            className="absolute w-full bg-[#faf9f6] bottom-0 left-0 right-0 h-16 flex justify-center items-center tetx-[#11302b] font-serif text-2xl gap-5 lg:bg-transparent lg:justify-end lg:text-[#faf9f6] lg:font-[Hanken Grotesk] lg:text-xl lg:font-extralight lg:pr-10"
            href="#"
          >
            FERVORO
          </a>
        </div>
      </div>
    </div>
  );  
};

export default FervoroPage;
