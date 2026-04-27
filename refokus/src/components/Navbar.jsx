import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6   flex  justify-between border-b-[1px] border-zinc-700">
      <div className="nLeft flex items-center">
        <img
          src="/arrow_back_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
          alt=""
        />
        <p className="pl-2 font-extrabold">Refokus</p>
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a className="text-sm flex items-center gap-1.5" href="#">
                {index === 1 && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400  shadow-[0_0_0.25em_#00ff19] "></span>
                )}
                {elem}
              </a>
            ),
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
