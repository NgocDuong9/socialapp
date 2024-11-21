import React, { useEffect, useState } from "react";
import TopBar from "../../conponents/topbar";
import Sidebar from "../../conponents/sidebar";
import Rightbar from "../../conponents/rightbar";
import Layout from "../../conponents/layout";
import LeftMessage from "../../conponents/message/leftMessage";
import BoxChat from "../../conponents/message/boxChat";
import { useUserData } from "../../hooks/useUserData";
import { getAllConversation } from "../../api/message";

const Message = () => {
  const [conversation, setConversation] = useState([]);

  const { user } = useUserData();

  const handleGetConversation = async () => {
    if (!user) return;
    try {
      const data = await getAllConversation({ userId: user._id });
      console.log({ data });

      setConversation(data);
    } catch (error) {}
  };

  useEffect(() => {
    handleGetConversation();
  }, [user]);

  return (
    <Layout>
      <TopBar />
      <div className="flex ">
        <div className="flex-[2.5] p-5">
          <LeftMessage />
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
