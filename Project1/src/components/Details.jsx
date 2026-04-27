import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-full flex h-screen gap-10 items-center justify-center  p-18  ">
      <img
      className="h-[60%] w-[50%] object-cover rounded-2xl "
        src="https://plus.unsplash.com/premium_photo-1686149811450-c55a5fa3851f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img"
      />
      <div className="content">
        <h1 className="text-2xl font-bold h-10 w-100 mb-10">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h2 className="text-red-200 mb-2 ">$ 109.95,</h2>
        <p className="h-[20px] w-120 mb-4 ">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
        <Link className="mt-10">Edit</Link>
        <Link>Delete</Link>
      </div>
    </div>
  );
};

export default Details;
