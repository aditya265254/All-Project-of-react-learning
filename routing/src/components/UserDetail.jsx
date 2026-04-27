import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const goBackhandler = () => {
    // navigate("/User");
    // we can do this from both user
    navigate(-1);
  };
  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-red-400 text-2xl">User detail</h1>
      <h2>Hello welcome to the page {name}</h2>
      <button
        onClick={goBackhandler}
        className="mt-2 bg-red-500 h-8 w-20 rounded-2xl cursor-pointer "
      >
        Go back
      </button>
    </div>
  );
};

export default UserDetail;
