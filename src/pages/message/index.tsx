import React, { useEffect, useRef, useState } from "react";
import TopBar from "../../conponents/topbar";
import Sidebar from "../../conponents/sidebar";
import Rightbar from "../../conponents/rightbar";
import Layout from "../../conponents/layout";
import LeftMessage from "../../conponents/message/leftMessage";
import BoxChat from "../../conponents/message/boxChat";
import { useUserData } from "../../hooks/useUserData";
import { getAllConversation, getMessageById } from "../../api/message";
import { io, Socket } from "socket.io-client";

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

export interface Message {
  _id: string;
  conversationId: string;
  senderId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Message = () => {
  const [conversation, setConversation] = useState<Conversation[]>([]);
  const [conversationSelect, setConversationSelect] = useState<Conversation>();
  const { user } = useUserData();

  const [message, setMessage] = useState<Message[]>();
  const [messageArrvial, setMessageArrvial] = useState<any>();

  const socket = useRef<any>();

  useEffect(() => {
    socket.current = io("http://localhost:8900");
    socket?.current?.on("getMessage", (data: any) => {
      console.log(data, "getttMesssafae");
      setMessageArrvial({
        text: data.text,
        senderId: data.senderId,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    console.log(messageArrvial);

    if (
      messageArrvial &&
      conversationSelect?.members.find(
        (item) => item._id === messageArrvial.senderId
      )
    ) {
      setMessage((prev) => [...(prev ?? []), messageArrvial]);
    }
  }, [messageArrvial, conversationSelect]);

  useEffect(() => {
    socket?.current?.emit("addUser", user?._id);
    socket?.current?.on("getUsers", (users: any) => {
      // console.log(users);
    });
  }, [socket, user]);

  useEffect(() => {
    if (!user) return;
    const getConversation = async () => {
      try {
        const data = await getAllConversation({ userId: user._id });
        setConversationSelect(data?.[0]);
        setConversation(data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversation();
  }, [user]);

  useEffect(() => {
    if (!conversationSelect) return;
    const getMessage = async () => {
      try {
        const data = await getMessageById({ id: conversationSelect._id });
        setMessage(data);
      } catch (error) {
        console.log(error, ">>>>>Message");
      }
    };
    getMessage();
  }, [conversationSelect]);

  return (
    <Layout>
      <TopBar />
      <div className="flex ">
        <div className="flex-[2.5] p-5">
          <LeftMessage
            conversation={conversation}
            setConversationSelect={setConversationSelect}
          />
        </div>
        <div className="flex-[5]">
          <BoxChat
            message={message}
            conversationSelect={conversationSelect}
            setMessage={setMessage}
          />
        </div>
        <div className="flex-[3]">
          <Rightbar />
        </div>
      </div>
    </Layout>
  );
};

export default Message;
