import React from "react";

interface Props {
  img?: string;
  name: string;
  online?: boolean;
}

const TagFriend = ({ img, name, online = false }: Props) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="relative">
        <img
          src={img ?? "/assets/person/2.jpeg"}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/assets/person/avatar.png"; // Đặt ảnh mặc định khi ảnh lỗi
          }}
        />
        {online && (
          <div className="absolute top-[1px] right-[1px] h-3 w-3 rounded-lg bg-green-500 border border-white"></div>
        )}
      </div>
      <p className="text-[18px] font-medium">{name}</p>
    </div>
  );
};

export default TagFriend;
