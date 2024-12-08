import axios from "axios";

export const getAllConversation = async (data: { userId: string }) => {
  const all = await axios.get(
    `${process.env.REACT_APP_PUBLIC_URL}/conversation/${data.userId}`
  );

  return all.data;
};

export const getMessageById = async (data: { id: string }) => {
  const all = await axios.get(
    `${process.env.REACT_APP_PUBLIC_URL}/message/${data.id}`
  );

  return all.data;
};
