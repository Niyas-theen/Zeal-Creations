import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center px-10 py-2 lg:flex lg:justify-center lg:items-center">
        <a href="#">
          <img
            className="w-16 lg:w-36 lg:pb-2
          "
            src="Main logo.svg"
            alt="Main logo"
          />
        </a>
        <a className="text-3xl lg:hidden " href="#">
          <i class="ri-menu-line"></i>
        </a>
      </div>
      <hr className="lg:border-t-2 lg:border-black lg:w-[80%] lg:mx-auto font-[popins]" />
      <div className="nav-items hidden lg:flex lg:justify-center lg:items-center lg:space-x-24 lg:text-xl lg:font-semibold lg:py-6">
        <a className="text-[#222222] cursor-pointer hover:text-[#d93827]" href="#">HOME</a>
        <a className="text-[#222222] cursor-pointer hover:text-[#d93827]" href="#">DESIGN STUDIO</a>
        <a className="text-[#222222] cursor-pointer hover:text-[#d93827]" href="#">COMPANY</a>
        <a className="text-[#222222] cursor-pointer hover:text-[#d93827]" href="#">PAGES</a>
        <a className="text-[#222222] cursor-pointer hover:text-[#d93827]" href="#">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
