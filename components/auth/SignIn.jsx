"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

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
    <div  className="flex px-2 w-full items-center justify-center py-20 flex-wrap-reverse  m-auto overflow-visible sm:w-10/12">
      <div className=" flex items-center w-full sm:w-2/5 justify-center overflow-visible -mt-20 md:-mr-40">
        <div className="bg-white w-full p-8 rounded border-spacing-2 shadow-md">
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

      <div className=" w-full sm:w-3/5 overflow-visible -z-10">
        <img className="w-full h-auto" src="/MANDRN0592_1_1950x.webp" alt="jdk" width={300} height={300} />
      </div>

    </div>
  );
};

export default SignIn;
