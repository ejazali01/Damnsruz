"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {  toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [usersData, setUsersData] = useState(initialState);
  const { email, password } = usersData;
  const router = useRouter();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsersData({ ...usersData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warn("all fields are mandatory", {
        position: "top-right",
      });
    }

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response.error) {
        toast.error("somthing went wrong", {
          position: "top-right",
        });
      }

      toast.success("Login Successful", {
        position: "top-right",
      });
      setUsersData(initialState);
      router.replace("dashboard");
    } catch (error) {
      console.error("signin Failed", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
