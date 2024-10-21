import axios from "axios";

export const postNew = async (data: {
  userId: string;
  desc: string;
  img?: string;
}) => {
  try {
    const post = await axios.post("http://localhost:8800/api/post", {
      ...data,
    });

    return post.data;
  } catch (error) {
    throw new Error();
  }
};

export const getAllPost = async (data: { userId: string }) => {
  try {
    const allPost = await axios.get(
      `http://localhost:8800/api/post/timeline/all/${data.userId}`
    );

    return allPost.data;
  } catch (error) {
    throw new Error();
  }
};

export const likePost = async (data: { id: string; userId: string }) => {
  try {
    const allPost = await axios.put(
      `http://localhost:8800/api/post/like/${data.id}`,
      {
        userId: data.userId,
      }
    );

    return allPost.data;
  } catch (error) {
    throw new Error();
  }
};
