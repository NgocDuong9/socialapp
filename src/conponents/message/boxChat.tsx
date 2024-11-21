import React from "react";
import Mess from "./mess";

const BoxChat = () => {
  return (
    <div className="w-full justify-between flex flex-col mt-3 px-2">
      <div>
        <p className="font-medium text-2xl">Duongw</p>
        <div className="w-full overflow-y-auto py-5 min-h-[calc(100vh-170px)] max-h-[calc(100vh-170px)] sidebar px-2">
          <Mess
            img="/assets/person/2.jpeg"
            message="hello"
            time="Thu, 21 Nov 2024 06:47:24 GMT"
          />
          <Mess
            img="/assets/person/2.jpeg"
            message="hello"
            time="Thu, 21 Nov 2024 06:47:24 GMT"
            own
          />
          <Mess
            img="/assets/person/2.jpeg"
            message="hello"
            time="Thu, 21 Nov 2024 06:47:24 GMT"
          />
          <Mess
            img="/assets/person/2.jpeg"
            message="hello"
            time="Thu, 21 Nov 2024 06:47:24 GMT"
            own
          />
          <Mess
            img="/assets/person/2.jpeg"
            message="hello"
            time="Thu, 21 Nov 2024 06:47:24 GMT"
            own
          />{" "}
          <Mess
            img="/assets/person/2.jpeg"
            message="hello"
            time="Thu, 21 Nov 2024 06:47:24 GMT"
            own
          />{" "}
          <Mess
            img="/assets/person/2.jpeg"
            message="hello"
            time="Thu, 21 Nov 2024 06:47:24 GMT"
            own
          />{" "}
          <Mess
            img="/assets/person/2.jpeg"
            message="hello"
            time="Thu, 21 Nov 2024 06:47:24 GMT"
            own
          />{" "}
          <Mess
            img="/assets/person/2.jpeg"
            message="hello"
            time="Thu, 21 Nov 2024 06:47:24 GMT"
            own
          />{" "}
          <Mess
            img="/assets/person/2.jpeg"
            message="hello"
            time="Thu, 21 Nov 2024 06:47:24 GMT"
            own
          />{" "}
          <Mess
            img="/assets/person/2.jpeg"
            message="hello"
            time="Thu, 21 Nov 2024 06:47:24 GMT"
            own
          />{" "}
          <Mess
            img="/assets/person/2.jpeg"
            message="hello"
            time="Thu, 21 Nov 2024 06:47:24 GMT"
            own
          />
        </div>
      </div>
      <div className="w-full flex justify-between gap-2 px-2">
        <div className="w-full border-[2px] border-[#5d4f4f] rounded">
          <textarea
            name=""
            id=""
            className="outline-none w-full resize-none"
          ></textarea>
        </div>
        <button className="px-3 py-2 bg-[#1877f2] text-white">Send</button>
      </div>
    </div>
  );
};

export default BoxChat;
