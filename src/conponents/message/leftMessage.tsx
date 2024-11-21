import React from "react";
import TagFriend from "./tagFriend";

const LeftMessage = () => {
  return (
    <div>
      <div className="border-b px-3 pb-2 w-full">
        <input
          type="text"
          className="w-full outline-none"
          placeholder="Search name"
        />
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <TagFriend />
        <TagFriend />
        <TagFriend />
        <TagFriend />
      </div>
    </div>
  );
};

export default LeftMessage;
