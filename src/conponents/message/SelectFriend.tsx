import React from "react";

const SelectFriend = ({ name, image }: { name: string; image?: string }) => {
  return (
    <div className={"flex items-center gap-2"}>
      <img
        src={Boolean(image) ? image : "/assets/person/avatar.png"}
        alt=""
        className="rounded-full w-12 h-12 object-cover "
      />
      <p className="font-semibold cursor-pointer">{name}</p>
    </div>
  );
};

export default SelectFriend;
