import React, { Fragment, useEffect, useState } from "react";
import Post from "./post";
import Share from "./share";
import { getAllPost, postNew } from "../api/post";
import { useUserData } from "../hooks/useUserData";
import { toast } from "react-toastify";

const Feed = () => {
  const [allPost, setAllpost] = useState<any[]>([]);
  const { user } = useUserData();

  const getPost = async () => {
    if (!user) return;
    try {
      const data = await getAllPost({
        userId: user._id,
      });

      setAllpost(data);
    } catch (error) {}
  };

  useEffect(() => {
    getPost();
  }, [user]);

  return (
    <div
      className="p-5 overflow-auto feed"
      style={{
        height: "calc(100vh - 50px)",
      }}
    >
      <Share setAllpost={setAllpost} />
      <div className=" mt-5 flex flex-col gap-4">
        {allPost?.map((item, idx) => {
          return (
            <Fragment key={idx}>
              <Post
                likes={item?.likes ?? []}
                time={item?.createdAt}
                desc={item?.desc}
                id={item?._id}
                img={item?.img}
                user={item?.user}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
