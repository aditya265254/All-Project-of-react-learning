import React from "react";

const About = () => {
  return (
    <div className="bg-zinc-200 w-full h-screen">
      <div className="bg-zinc-100 w-1/2 m-auto pt-7 p-8 rounded-4xl">
        <h1 className="text-5xl pl-4 text-blue-300">About us</h1>
        <p className=" pt-4  text-center  text-blue-800 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
          quod? Fuga minus qui ab ea temporibus molestias est architecto
          deleniti! Ipsam expedita minima ducimus perferendis quas, quos,
          placeat, quae ipsum eos vitae totam porro dolorum omnis veniam ut
          cumque quibusdam?
        </p>
        <button className=" bg-black text-white mt-10 h-10 w-30 rounded-full cursor-pointer">
          Explore more
        </button>
      </div>
    </div>
  );
};

export default About;
