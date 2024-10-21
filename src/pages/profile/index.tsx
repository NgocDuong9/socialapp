import React, { Fragment } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Layout from "../../conponents/layout";
import Sidebar from "../../conponents/sidebar";
import Feed from "../../conponents/feed";
import Rightbar from "../../conponents/rightbar";
import { useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams();

  console.log(params.id);

  return (
    <Layout>
      <div className="flex">
        <div className="flex-[2.5]">
          <Sidebar />
        </div>
        <div className="flex-[8]">
          <div>
            <img
              src="/assets/post/1.jpeg"
              alt=""
              className="w-full h-[350px] object-cover"
            />
            <div className="flex flex-col justify-center items-center gap-1 w-full">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="w-[150px] h-[150px] object-cover rounded-full border-[4px] border-white -mt-[70px]"
              />
              <p className="text-3xl font-semibold pt-2">DuongDzzz</p>
              <p className="text-xs text-slate-400">VUA POKER</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-[2]">
              <Feed />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Info</p>
                <p>City: Ha Noi</p>
                <p>From: Thanh Oai</p>
                <p>Sex: Male</p>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <p className="font-semibold">Friend</p>
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx}>
                      <div className="w-full aspect-square ">
                        <img
                          src="/assets/person/6.jpeg"
                          className="w-full h-full object-cover rounded-xl"
                          alt={`Person ${idx}`}
                        />
                      </div>
                      <p className="text-center font-semibold">DuongVip</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
