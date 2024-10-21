import axios from "axios";

export const register = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const register = await axios.post(
      "http://localhost:8800/api/auth/register",
      {
        ...data,
      }
    );
    console.log(register);

    return register.data;
  } catch (error) {
    throw new Error();
  }
};

export const login = async (data: { email: string; password: string }) => {
  try {
    const login = await axios.post("http://localhost:8800/api/auth/login", {
      ...data,
    });
    console.log(login);

    return login.data;
  } catch (error) {
    throw new Error();
  }
};
