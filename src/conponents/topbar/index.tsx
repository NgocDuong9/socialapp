import React from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
const TopBar = () => {
  return (
    <div className="bg-[#1877f2] px-6 h-[50px] text-white flex justify-between items-center fixed top-0 w-full z-10">
      <div className="text-[20px] flex-[5] font-semibold ">DuongSocial</div>
      <div className="flex-[5]">
        <div className="bg-white text-black rounded-full h-[35px] w-full items-center px-2 flex gap-1">
          <SearchIcon className="text-[20px]" />
          <input type="text" className="outline-none w-full text-base" />
        </div>
      </div>
      <div className="text-[20px] flex-[5] flex justify-end gap-4 items-center">
        <div className="w-1/2 flex justify-between items-center">
          <div className="flex gap-4">
            <div className="relative">
              <PersonIcon className="text-22px" />
              <div className="bg-red-500 text-[8px] px-2 py-1 rounded-3xl absolute -top-1 -right-2">
                3
              </div>
            </div>
            <div className="relative">
              <ChatBubbleIcon />
              <div className="bg-red-500 text-[8px] px-2 py-1 rounded-3xl absolute -top-1 -right-2">
                2
              </div>
            </div>
            <div className="relative">
              <NotificationsIcon />
              <div className="bg-red-500 text-[8px] px-2 py-1 rounded-3xl absolute -top-1 -right-2">
                12
              </div>
            </div>
          </div>
          <img
            src="/assets/person/1.jpeg"
            className="h-9 w-9 object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
