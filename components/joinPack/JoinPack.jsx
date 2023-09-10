import React from "react";

const JoinPack = () => {
  return (
    <>
      <div className="  py-[30px]">
        <form className="max-w-md m-auto ">
          <span className="p-10 text-center ">
            <h1 className="py-4 font-semibold text-slate-600 ">JOIN THE PACK</h1>
            <hr className="w-[80px] border-2 m-auto cursor-pointer hover:bg-purple-400" />
          </span>

          <div>
            <p className="text-center text-sm py-6 ">
              Be first-in-line for juicy product drops, giveaways and secret
              sales exclusive to our email list. Unsubscribe whenever, we're
              chill.
            </p>

          <div className="shrink-0 flex justify-center items-center">
            <span className="w-[80%] outline-1 outline outline-offset-2  rounded-sm flex justify-end ">
            <input
              type="email"
              placeholder="your-email@example.com"
              className="py-[10px]  focus:border-none w-full rounded-sm"
            />

            <button type="submit"  className="bg-amber-700/75 px-4 py-2 text-white rounded-md hover:bg-amber-700 ">
              JOIN
            </button>
            </span>
          </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default JoinPack;
