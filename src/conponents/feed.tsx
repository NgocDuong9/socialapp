import React from "react";
import Post from "./post";
import Share from "./share";

const Feed = () => {
  return (
    <div className="p-5">
      <Share />
      <div className=" mt-5 flex flex-col gap-4">
        <Post likes={[]} name="Duongdz" time="10" desc="beatifull " />
        <Post likes={[]} name="Duongdz" time="10" desc="beatifull " />
        <Post likes={[]} name="Duongdz" time="10" desc="beatifull " />
        <Post likes={[]} name="Duongdz" time="10" desc="beatifull " />
        <Post likes={[]} name="Duongdz" time="10" desc="beatifull " />
        <Post likes={[]} name="Duongdz" time="10" desc="beatifull " />
        <Post likes={[]} name="Duongdz" time="10" desc="beatifull " />
        <Post likes={[]} name="Duongdz" time="10" desc="beatifull " />
        <Post likes={[]} name="Duongdz" time="10" desc="beatifull " />
      </div>
    </div>
  );
};

export default Feed;
