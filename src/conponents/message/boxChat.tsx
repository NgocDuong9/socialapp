import React, { useEffect, useRef, useState } from "react";
import Mess from "./mess";
import { Conversation, Message } from "../../pages/message";
import { useUserData } from "../../hooks/useUserData";
import { createMessage } from "../../api/message";

const BoxChat = ({
  message,
  conversationSelect,
  setMessage,
}: {
  message: Message[] | undefined;
  conversationSelect: Conversation | undefined;
  setMessage: React.Dispatch<React.SetStateAction<Message[] | undefined>>;
}) => {
  const { user } = useUserData();
  const [text, setText] = useState("");
  const scrollRef = useRef();

  const createMessAge = async () => {
    if (!user) return;
    try {
      const mess = await createMessage({
        conversationId: conversationSelect?._id ?? "",
        senderId: user._id,
        text,
      });
      setMessage((prev) => [...(prev ?? []), mess]);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  const name = conversationSelect?.members.find(
    (item) => item._id !== user?._id
  );

  // useEffect(() => {
  //   scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  // }, [message]);

  return (
    <div className="w-full justify-between flex flex-col mt-3 px-2">
      <div>
        <p className="font-medium text-2xl">{name?.username}</p>
        <div className="w-full overflow-y-auto py-5 min-h-[calc(100vh-170px)] max-h-[calc(100vh-170px)] sidebar px-2">
          {message?.map((item, idx) => {
            return (
              <div key={idx}>
                <Mess
                  message={item.text}
                  time={item.createdAt}
                  own={item.senderId === user?._id}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-between gap-2 px-2">
        <div className="w-full border-[2px] border-[#5d4f4f] rounded">
          <textarea
            name=""
            id=""
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="outline-none w-full resize-none p-2"
          ></textarea>
        </div>
        <button
          className="px-3 py-2 bg-[#277bea] text-white"
          onClick={createMessAge}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default BoxChat;
