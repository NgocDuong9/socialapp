import React, { Fragment } from "react";
import TagFriend from "./tag/TagFriend";

const Rightbar = () => {
  return (
    <div
      className="p-5 flex flex-col gap-5 sidebar overflow-auto"
      style={{
        height: "calc(100vh - 50px)",
      }}
    >
      <div className="flex gap-2">
        <img src="/assets/gift.png" alt="" className="h-12 w-12" />
        <p className="text-base">
          <span className="font-medium">Duongdz</span>
          and
          <span className="font-medium">3 friend other</span>
          have a birthday today.
        </p>
      </div>
      <img
        src="/assets/ad.png"
        alt=""
        className="h-[300px] w-full rounded-lg object-cover"
      />
      <div>
        <p className="font-medium">Online friend</p>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 20 }).map((_, idx) => {
            return (
              <Fragment key={idx}>
                <TagFriend
                  name="DuongDz"
                  online={true}
                  img={`/assets/person/${idx + 1}.jpeg`}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
