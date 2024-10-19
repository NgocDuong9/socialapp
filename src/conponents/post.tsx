import {
  EmojiEmotionsOutlined,
  EmojiNatureOutlined,
  Favorite,
  Filter,
  HeartBroken,
  LocalOffer,
  LocationOff,
  LocationOn,
  MoreVert,
  Recommend,
  Tag,
  ThumbUp,
  ThumbUpAlt,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// Kích hoạt plugin relativeTime
dayjs.extend(relativeTime);

interface PostInterface {
  name: string;
  time: string;
  likes: string[];
  desc: string;
  img?: string;
}

const Post = (postItem: PostInterface) => {
  const postCreatedAt = dayjs("2024-10-15T14:30:00");
  const now = dayjs();

  // Hiển thị thời gian tương đối (relative time)
  const timeAgo = postCreatedAt.fromNow(); // "3 days ago" hoặc "2 hours ago"

  const [like, setLike] = useState(false);

  return (
    <div className="w-full shadow-3xl p-3 flex flex-col gap-3 rounded-lg">
      <div className="flex gap-2 items-start  justify-between">
        <div className="flex items-center gap-3 justify-center">
          <img
            src="/assets/person/3.jpeg"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="font-medium">{postItem.name}</p>
          <p className="text-black opacity-50 text-xs">{timeAgo}</p>
        </div>
        <div>
          <MoreVert />
        </div>
      </div>
      <div className="">{postItem.desc}</div>
      <div className="">
        <img
          src={postItem.img ?? "/assets/person/3.jpeg"}
          alt=""
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-2">
          <div
            onClick={() => {
              setLike(!like);
            }}
          >
            {like ? (
              <ThumbUpAlt className="text-blue-500" />
            ) : (
              <ThumbUpOffAlt className="text-blue-500" />
            )}
          </div>
          <p>{like ? 11 : 10} like</p>
        </div>
        <p className="text-slate-600 cursor-pointer border-b-[1px] border-dotted hover:border-[#475569]">
          888 coments
        </p>
      </div>
    </div>
  );
};

export default Post;
