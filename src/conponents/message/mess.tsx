import dayjs from "dayjs";
import React from "react";
import { twMerge } from "tailwind-merge";

const Mess = ({
  message,
  time,
  img,
  own = false,
}: {
  message: string;
  time: string;
  img?: string;
  own?: boolean;
}) => {
  const createdAt = dayjs(time);

  const timeAgo = createdAt.fromNow(); // "3 days ago" hoặc "2 hours ago"
  return (
    <div className={twMerge("flex gap-2 flex-col w-full", own && "items-end")}>
      <div className="flex gap-1 items-center">
        <img
          src={img ?? '"/assets/person/2.jpeg"'}
          alt=""
          className={twMerge(
            "w-10 h-10 rounded-full object-cover",
            own && "hidden"
          )}
        />
        <p
          className={twMerge(
            "text-sm text-white text-center h-fit p-2 rounded-lg",
            own ? "bg-[#ffc7c7]" : "bg-[#1877f2]"
          )}
        >
          {message}
        </p>
      </div>
      <p className="text-xs opacity-45">{timeAgo}</p>
    </div>
  );
};

export default Mess;
