import React from 'react'

const Nav = () => {
  return (
     
      <nav className="w-[15%] h-fullbg-zinc-100 flex flex-col items-center pt-5">
        <a
          className="px-5 py-3 border border-blue-200 text-blue-300 rounded"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl mb-3 w-[80%]">Categories</h1>
        <ul className=" w-[80%] ">
          <li className="flex items-center mb-3">
            <span className="rounded-full mr-2  w-3.75 h-3.75 bg-blue-100 "></span>{" "}
            Cat 1
          </li>
          <li className="flex items-center mb-3">
            <span className="rounded-full mr-2  w-3.75 h-3.75 bg-red-100 "></span>{" "}
            Cat 2
          </li>
          <li className="flex items-center mb-3">
            <span className="rounded-full mr-2  w-3.75 h-3.75 bg-yellow-100 "></span>{" "}
            Cat 3
          </li>
        </ul>
      </nav>
    
  );
}

export default Nav