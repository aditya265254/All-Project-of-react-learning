import React from "react";

const Work = () => {
  var image = [
    {
      url: "https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1776943340398-67524b7bcf7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "70%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1701069018620-ece7b9d9e5ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "70%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1777033356671-59469ab29684?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "55%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1776715139302-281f91c0c9ca?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1770914038734-b843a315e423?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "70%",
      left: "55%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full bg-syy-100 mt-10">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {image.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className=" absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%] "
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
