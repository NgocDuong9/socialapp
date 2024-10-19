import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Layout from "../../conponents/layout";
import Sidebar from "../../conponents/sidebar";
import Feed from "../../conponents/feed";
import Rightbar from "../../conponents/rightbar";

const Home = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="flex-[2.5]">
          <Sidebar />
        </div>
        <div className="flex-[5]">
          <Feed />
        </div>
        <div className="flex-[3]">
          <Rightbar />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
