import React from "react";
import { SiMicrosoft } from "react-icons/si";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";

function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-between">
        <div className="flex mr-16 text-white text-lg">
          <SiMicrosoft className="h-6 w-6" />
          <h1>Microsoft Bing</h1>
        </div>

        <div className="w-[400px] border border-blue-200 text-gray-400 hover:text-white text-sm">
          <ul className="flex justify-between">
            <li>Chat</li>
            <li>Images</li>
            <li>Videos</li>
            <li>Maps</li>
            <li>
              <BiDotsHorizontalRounded />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[240px] border border-blue-200 text-gray-400 hover:text-white text-sm">
        <ul className="flex justify-between">
          <li>English</li>
          <div className="flex items-center">
            <h2>Sign In</h2>
            <RxAvatar />
          </div>
          <div className="flex items-center">
            <h2>Rewards</h2>
            <GiHamburgerMenu />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
