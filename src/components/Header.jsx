import React from "react";
import { SiMicrosoft } from "react-icons/si";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";

function Header() {
  return (
    <div className="flex justify-between items-center h-10">
      <div className="flex justify-between">
        <div className="flex mr-16 text-white text-lg">
          <SiMicrosoft className="h-6 w-6" />
          <h1>Microsoft Bing</h1>
        </div>

        <div className="flex justify-between items-center w-[400px] text-gray-400 text-sm">
          <ul className="flex justify-between w-full items-center">
            <li className="hover:text-white cursor-pointer">Chat</li>
            <li className="hover:text-white cursor-pointer">Images</li>
            <li className="hover:text-white cursor-pointer">Videos</li>
            <li className="hover:text-white cursor-pointer">Maps</li>
            <li className="hover:text-white cursor-pointer">
              <BiDotsHorizontalRounded />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[240px] text-gray-400 text-sm">
        <ul className="flex justify-between">
          <li className="text-white cursor-pointer">English</li>
          <div className="flex items-center">
            <h2 className="text-white cursor-pointer">Sign In</h2>
            <RxAvatar className="text-white h-5 w-5" />
          </div>
          <div className="flex items-center">
            <h2 className="text-white cursor-pointer">Rewards</h2>
            <GiHamburgerMenu className="text-white h-5 w-5" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
