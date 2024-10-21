import React, { Fragment, useEffect, useMemo, useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Layout from "../../conponents/layout";
import Sidebar from "../../conponents/sidebar";
import Feed from "../../conponents/feed";
import Rightbar from "../../conponents/rightbar";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProfile, handleFollow, handleUnfollow } from "../../api/user";
import { useUserData } from "../../hooks/useUserData";

const Profile = () => {
  const params = useParams();
  const id = params?.id;

  const { user, setUser } = useUserData();

  const navigate = useNavigate();

  const [profile, setProfile] = useState<any>();

  const getData = async () => {
    if (!id) return;
    try {
      const data = await fetchProfile({ userId: id });
      setProfile(data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [params?.id]);

  const checkFollow = useMemo(() => {
    const check = user?.followings.filter((item1: any) => {
      console.log({ item1 });

      return item1?._id === params?.id;
    });
    console.log({ check });

    return Boolean(check);
  }, [profile]);

  const handleclickFollow = async () => {
    if (!params?.id || !user?._id) return;
    try {
      if (!checkFollow) {
        await handleUnfollow({
          id: params?.id,
          userId: user?._id,
        });
      } else {
        await handleFollow({
          id: params?.id,
          userId: user?._id,
        });
      }
    } catch (error) {}
  };

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
                src={
                  !!profile?.profilePicture
                    ? profile?.profilePicture
                    : "/assets/person/avatar.png"
                }
                alt=""
                className="w-[150px] h-[150px] object-cover rounded-full border-[4px] border-white -mt-[70px]"
              />
              <p className="text-3xl font-semibold pt-2">{profile?.username}</p>
              <p className="text-xs text-slate-400">VUA POKER</p>
              {user?._id !== profile?._id && (
                <div className="flex gap-2" onClick={handleclickFollow}>
                  {!checkFollow ? (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                      Follow
                    </button>
                  ) : (
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                      UnFollow
                    </button>
                  )}
                </div>
              )}
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
                  {profile?.followings.map((item: any, idx: number) => (
                    <div
                      key={idx}
                      className="cursor-pointer"
                      onClick={() => {
                        navigate(`/profile/${item?._id}`);
                      }}
                    >
                      <div className="w-full aspect-square ">
                        <img
                          src={
                            !!item?.profilePicture
                              ? item?.profilePicture
                              : "/assets/person/avatar.png"
                          }
                          className="w-full h-full object-cover rounded-xl"
                          alt={`Person ${idx}`}
                        />
                      </div>
                      <p className="text-center text-xs  mt-1 font-semibold">
                        {item?.username}
                      </p>
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
