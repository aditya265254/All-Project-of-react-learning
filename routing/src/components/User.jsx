import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className="bg-zinc-200 w-full h-screen">
      <div className="bg-zinc-100 w-1/2 m-auto pt-7 p-8 rounded-4xl">
        <h1 className="text-5xl pl-4 text-blue-300">User</h1>
        <div className="flex w-1/2 flex-col gap-2 mt-7"> 
          <Link
            className="bg-red-200 text-2xl mb-3 pb-2 rounded-2xl hover:bg-red-400"
            to="/user/aditya"
          >
            Aditya
          </Link>
          <Link
            className="bg-red-200 text-2xl mb-3 pb-2 rounded-2xl hover:bg-red-400"
            to="/user/amit"
          >
            Amit
          </Link>
          <Link
            className="bg-red-200 text-2xl mb-3 pb-2 rounded-2xl hover:bg-red-400"
            to="/user/harivansh"
          >
            Harivansh
          </Link>
          <Link
            className="bg-red-200 text-2xl mb-3 pb-2 rounded-2xl hover:bg-red-400"
            to="/user/ghansayam"
          >
            Ghansayan
          </Link>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default User;
