import React, { useEffect, useState } from "react";
import TopBar from "../../conponents/topbar";
import Sidebar from "../../conponents/sidebar";
import Rightbar from "../../conponents/rightbar";
import Layout from "../../conponents/layout";
import LeftMessage from "../../conponents/message/leftMessage";
import BoxChat from "../../conponents/message/boxChat";
import { useUserData } from "../../hooks/useUserData";
import { getAllConversation, getMessageById } from "../../api/message";

interface Member {
  _id: string;
  username: string;
  profilePicture: string;
}

export interface Conversation {
  _id: string;
  members: Member[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Message = () => {
  const [conversation, setConversation] = useState<Conversation[]>([]);
  const [idSelect, setIdSelect] = useState<string>();

  const [message, setMessage] = useState();

  const { user } = useUserData();

  useEffect(() => {
    if (!user) return;
    const getConversation = async () => {
      try {
        const data = await getAllConversation({ userId: user._id });
        setIdSelect(data?.[0]._id);
        setConversation(data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversation();
  }, [user]);
  console.log(idSelect);

  useEffect(() => {
    if (!idSelect) return;
    const getMessage = async () => {
      try {
        const data = await getMessageById({ id: idSelect });
        console.log(data);
        setMessage(data);
      } catch (error) {
        console.log(error, ">>>>>Message");
      }
    };
    getMessage();
  }, [idSelect]);

  return (
    <Layout>
      <TopBar />
      <div className="flex ">
        <div className="flex-[2.5] p-5">
          <LeftMessage conversation={conversation} setIdSelect={setIdSelect} />
        </div>
        <div className="flex-[5]">
          <BoxChat />
        </div>
        <div className="flex-[3]">
          <Rightbar />
        </div>
      </div>
    </Layout>
  );
};

export default Message;
