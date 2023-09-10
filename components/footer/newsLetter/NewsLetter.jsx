"use client"

import React from "react";

const NewsLetter = () => {
  return (
    <section>
      <div>
        <h3 className='text-[1rem] font-extrabold text-center'>NewsLetter</h3>
        <hr className='hover:bg-red-600 m-auto bg-amber-700 h-[2px] w-[100px]' />
      </div>

      <div className="py-4">
        <div className="flex flex-col ">
          <label className="py-4 text-sm text-center">
            Join the pack and receive 10% off your first purchase!
          </label>
        </div>

        <form className="shrink-0  flex justify-around items-center sm:justify-center sm:gap-4 ">
          <input
            className=" p-2 focus:border-collapse "
            type="email"
            placeholder="your-email@example.com"
            
          />
          <button className="text-md -right-20 hover:text-green-500 px-4 py-2  border-collapse text-white rounded-md bg-amber-700/50">
            JOIN
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
