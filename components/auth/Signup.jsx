"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};
const Signup = () => {
  const router = useRouter();
  const [usersData, setUsersData] = useState(initialState);
  const { name, email, password } = usersData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsersData({ ...usersData, [name]: value });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!name || !email || !password){
      console.log("all fields are mandatory")
    }
    try {
      const response = await axios.post('/api/signup', usersData, {
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usersData)
      });

      console.log('Signup Successful', response.data);
      setUsersData(initialState)
      router.replace('/login')
      
    } catch (error) {
      console.error('Signup Failed', error);
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
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
              Sign Up
            </button>
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
