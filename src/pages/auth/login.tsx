import axios from "axios";
import React, { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { toast } from "react-toastify";
import { useUserData } from "../../hooks/useUserData";

const Login = () => {
  const { user, setUser } = useUserData();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    try {
      const data = await login({
        email,
        password,
      });

      if (!data) return;
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Login success!");
      navigate("/");
    } catch (error: any) {
      toast.error(error?.response.data.message ?? "Somewent wrong");
    }
  };

  const navigate = useNavigate();
  const goRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    console.log(user);

    if (!user) return;
    navigate("/");
  }, [user]);

  return (
    <div className="h-[100vh] flex bg-[#f0f2f5]">
      <div className="flex-1 flex flex-col h-full  justify-center">
        <div className="w-[70%] ml-[20%] pb-28">
          <p className="text-[#1775ee] font-extrabold text-[80px]">
            DuongSocail
          </p>
          <p className="text-[30px]">
            Connect with friends and the world around you on Duongsocial
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col h-full justify-center">
        <div className="w-[500px] mr-[40%] bg-white mb-36 p-12 flex flex-col gap-4 rounded-lg">
          <form
            action=""
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="email"
              className="text-[18px] border border-gray-600 outline-none rounded-xl h-[50px] px-4"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="text-[18px] border border-gray-600 outline-none rounded-xl h-[50px] px-4"
              placeholder="Password"
            />
            <button
              className="text-[18px] bg-[#1775ee] text-white outline-none rounded-xl h-[50px] px-4"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="bg-slate-200 w-full h-[1px]"></div>
          <div className="flex justify-end">
            <p
              className="underline cursor-pointer text-xs text-gray-600"
              onClick={goRegister}
            >
              Create Account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
