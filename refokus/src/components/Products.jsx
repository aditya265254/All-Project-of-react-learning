import React from "react";
import Product from "./Product";
import { MdDescription } from "react-icons/md";

const Products = () => {
  var products = [
    {
      title: "arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis obcaecati necessitatibus porro?",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis obcaecati necessitatibus porro?",
      live: true,
      case: false,
    },
    {
      title: "YIR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis obcaecati necessitatibus porro?",
      live: true,
      case: true,
    },
    {
      title: "Yahoo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis obcaecati necessitatibus porro?",
      live: true,
      case: true,
    },
  ];
  return (
    <div>
   {products.map((val, index)=> <Product val={val}/>)}
    </div>
  );
};

export default Products;
