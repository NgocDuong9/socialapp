import {
  EmojiEmotionsOutlined,
  EmojiNatureOutlined,
  Filter,
  LocalOffer,
  LocationOff,
  LocationOn,
  Tag,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const Share = () => {
  return (
    <div className="w-full shadow p-3 flex flex-col gap-3 rounded-lg">
      <div className="flex gap-2 w-full">
        <img
          src="/assets/person/1.jpeg"
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <input
          type="text"
          className="outline-none text-base w-full"
          placeholder="What's in your mind?"
        />
      </div>
      <div className="w-[90%] ml-[5%] bg-slate-200 h-[2px]"></div>
      <div className="flex justify-around items-center">
        <div className="flex gap-1">
          <Filter className="text-red-400" />
          <p className="text-[14px]">Photo or video</p>
        </div>
        <div className="flex gap-1">
          <LocalOffer className="text-blue-500" />
          <p className="text-[14px]">Tag</p>
        </div>
        <div className="flex gap-1">
          <LocationOn className="text-green-600" />
          <p className="text-[14px]">Locations</p>
        </div>
        <div className="flex gap-1">
          <EmojiEmotionsOutlined className="text-yellow-600" />
          <p className="text-[14px]">Fellings</p>
        </div>
        <div className="bg-[#2c9e2c] text-white px-3 py-1 rounded-md">
          Share
        </div>
      </div>
    </div>
  );
};

export default Share;
