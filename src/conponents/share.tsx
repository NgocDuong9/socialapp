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
import React, { FormEvent, useRef, useState } from "react";
import { useUserData } from "../hooks/useUserData";
import { getAllPost, postNew } from "../api/post";
import { toast } from "react-toastify";
import axios from "axios";

interface NewPost {
  userId: string;
  desc: string;
  img?: string; // Thuộc tính img là tùy chọn
}

const Share = ({
  setAllpost,
}: {
  setAllpost: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  const { user } = useUserData();

  const [post, setPost] = useState("");

  const [file, setFile] = useState<any>();

  const desc = useRef();

  const handlePost = async (e: FormEvent<HTMLFormElement>) => {
    if (!user) return;

    let newPost: NewPost = {
      userId: user._id,
      desc: post,
    };
    e.preventDefault();

    if (file) {
      const data = new FormData();
      data.append("file", file);

      try {
        const fileName = await axios.post(
          "http://localhost:8800/api/upload",
          data
        );

        newPost = {
          ...newPost,
          img: fileName.data,
        };
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const createPost = await postNew(newPost);
      toast.success("Post success!");
      const data = await getAllPost({
        userId: user._id,
      });
      // setFile(null);
      setAllpost(data);
      setPost("");
    } catch (error) {
      console.log(error);
    }
  };
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
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
      </div>
      <div className="w-[90%] ml-[5%] bg-slate-200 h-[2px]"></div>
      <form className="flex justify-around items-center" onSubmit={handlePost}>
        <label htmlFor="file" className="flex gap-1 cursor-auto">
          <Filter className="text-red-400" />
          <p className="text-[14px]">Photo or video</p>
          <input
            type="file"
            name="image"
            id="file"
            accept=".png,.jpeg,.jpg"
            className="hidden"
            onChange={(e) => setFile(e?.target?.files?.[0])}
          />
        </label>
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
        <button
          type="submit"
          className="bg-[#2c9e2c] cursor-pointer text-white px-3 py-1 rounded-md"
        >
          Share
        </button>
      </form>
    </div>
  );
};

export default Share;
