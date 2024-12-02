import React from "react";
import "remixicon/fonts/remixicon.css";


const Header = () => {
  return (
    <div className="bg-[#222222] font[popins] text-white text-xl">
      <div className="w-full flex flex-col text-sm space-y-1 justify-center md:flex md:flex-row md:justify-between items-center px-20 py-2 lg:text-lg">
        <h4 className="text-white cursor-pointer hover:text-[#d93827] items-center">
          <i class="ri-phone-line"></i> +91 421 2262556
        </h4>
        <h4 className="text-white cursor-pointer hover:text-[#d93827] items-center">
          <i class="ri-mail-line"></i> mis@zealgroups.in
        </h4>
        <h4 className="text-white cursor-pointer hover:text-[#d93827] items-center">
          <i class="ri-map-pin-line"></i> Tirupur, Tamilnadu, IND - 641604
        </h4>
      </div>
    </div>
  );
};

export default Header;
