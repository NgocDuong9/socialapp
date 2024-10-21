import { MoreVert, ThumbUpAlt, ThumbUpOffAlt } from "@mui/icons-material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useMemo, useState } from "react";
import { likePost } from "../api/post";
import { useUserData } from "../hooks/useUserData";
import ImageCustom from "./ImageCustom";

// Kích hoạt plugin relativeTime
dayjs.extend(relativeTime);

interface PostInterface {
  time: string;
  likes: string[];
  desc: string;
  img?: string;
  id: string;
  user: any;
}

const Post = (postItem: PostInterface) => {
  const postCreatedAt = dayjs(postItem?.time);
  const now = dayjs();

  // Hiển thị thời gian tương đối (relative time)
  const timeAgo = postCreatedAt.fromNow(); // "3 days ago" hoặc "2 hours ago"

  const { user } = useUserData();

  const init = useMemo(() => {
    const initLike = postItem.likes.includes(user?._id ?? "");
    const initCount = postItem.likes.length;

    return { initLike, initCount };
  }, [postItem.id]);

  const [like, setLike] = useState(init.initLike);

  const [countLike, setCountLike] = useState(init.initCount);

  useEffect(() => {
    setLike(init.initLike);
    setCountLike(init.initCount);
  }, [init]);

  const handleLike = async () => {
    setLike(!like);
    if (like) {
      setCountLike(countLike - 1);
    } else {
      setCountLike(countLike + 1);
    }

    if (!user) return;

    try {
      await likePost({
        id: postItem.id,
        userId: user._id,
      });
    } catch (error) {}
  };

  console.log(process.env.REACT_APP_PUBLIC_FOLDER);

  return (
    <div className="w-full shadow-3xl p-3 flex flex-col gap-3 rounded-lg">
      <div className="flex gap-2 items-start  justify-between">
        <div className="flex items-center gap-3 justify-center">
          <img
            src={postItem?.user?.img ?? "/assets/person/avatar.png"}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="font-medium">{postItem?.user?.username}</p>
          <p className="text-black opacity-50 text-xs">{timeAgo}</p>
        </div>
        <div>
          <MoreVert />
        </div>
      </div>
      <div className="">{postItem.desc}</div>
      {postItem.img && (
        <div className="">
          <ImageCustom url={postItem.img} />
        </div>
      )}
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-2">
          <div onClick={handleLike} className="cursor-pointer">
            {like ? (
              <ThumbUpAlt className="text-blue-500" />
            ) : (
              <ThumbUpOffAlt className="text-blue-500" />
            )}
          </div>
          <p>{countLike} like</p>
        </div>
        <p className="text-slate-600 cursor-pointer border-b-[1px] border-dotted hover:border-[#475569]">
          coments
        </p>
      </div>
    </div>
  );
};

export default Post;
