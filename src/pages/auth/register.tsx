import axios from "axios";
import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/auth";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents default form submission
    const form = e.currentTarget;
    const username = (form.elements.namedItem("username") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    try {
      const data = await register({
        username,
        email,
        password,
      });
      if (!data) return;
      toast.success("Resister success!");
      navigate("/login");
    } catch (error) {}
  };

  const goLogin = () => {
    navigate("/login");
  };
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
              name="username"
              className="text-[18px] border border-gray-600 outline-none rounded-xl h-[50px] px-4"
              placeholder="User Name"
            />
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
              Register
            </button>
          </form>
          <div className="bg-slate-200 w-full h-[1px]"></div>
          <div className="flex justify-end">
            <p
              className="underline cursor-pointer text-xs text-gray-600"
              onClick={goLogin}
            >
              Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
