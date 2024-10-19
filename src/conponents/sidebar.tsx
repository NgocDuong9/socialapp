import React, { Fragment, useState } from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import {
  Bookmarks,
  ChatOutlined,
  Event,
  Group,
  HelpOutlined,
  Person2Rounded,
  PersonTwoTone,
  QuestionMarkSharp,
  School,
  Settings,
  VideoCallOutlined,
  VideoCallSharp,
  Work,
} from "@mui/icons-material";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TagFriend from "./tag/TagFriend";
const soscal = [
  {
    title: "Feed",
    icon: <RssFeedIcon />,
  },
  {
    title: "Chat",
    icon: <ChatOutlined />,
  },
  {
    title: "Video",
    icon: <OndemandVideoIcon />,
  },
  {
    title: "Group",
    icon: <Group />,
  },
  {
    title: "Bookmarks",
    icon: <Bookmarks />,
  },
  {
    title: "Quests",
    icon: <HelpOutlined />,
  },
  {
    title: "Jobs",
    icon: <Work />,
  },
  {
    title: "Event",
    icon: <Event />,
  },
  {
    title: "Course",
    icon: <School />,
  },
  {
    title: "Settings",
    icon: <Settings />,
  },
];

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className="p-5 flex flex-col gap-3 overflow-auto sidebar"
      style={{
        height: "calc(100vh - 50px)",
      }}
    >
      <div className="flex flex-col gap-y-3">
        {soscal.slice(0, showMore ? soscal.length : 7).map((item, idx) => {
          return (
            <div className="flex gap-2" key={idx}>
              <div>{item.icon}</div>
              <p className="text-[18px] font-medium">{item.title}</p>
            </div>
          );
        })}
      </div>
      <div
        className="w-1/2 bg-slate-400 text-xs rounded-lg text-center text-white py-2"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show less" : "Show more"}
      </div>
      <div className="bg-slate-200 w-[80%] h-0.5"></div>
      <div className="flex flex-col gap-2">
        {Array.from({ length: 20 }).map((_, idx) => {
          return (
            <Fragment key={idx}>
              <TagFriend name="DuongDz" />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
