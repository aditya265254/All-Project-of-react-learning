import axios from "axios"
import React, { useEffect, useState } from "react";

const Show = () => {
  const [product, setProducts] = useState([]);
  const getProduct = () => {
    const api = "/Axios";

    axios
      .get(api)
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    getProduct()
  })

  const addProduct = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .post(api, {
        id: 0,
        title: "string",
        price: 0.1,
        description: "string",
        category: "string",
        image: "http://example.com",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <button
        onClick={getProduct}
        className="h-10 mt-3 ml-3 bg-red-300 rounded-full"
      >
        Call product Api
      </button>
      <br /> <br />
      <button
        onClick={addProduct}
        className="h-10 mt-3 ml-3 bg-red-300 rounded-full"
      >
        save new product Api
      </button>
      <hr className="my-10" />
      <ul>
        {product.length > 0 ? (
          product.map((p) => (
            <li key={p.id} className="w-1/4 p-5 ml-2 mb-5 rounded bg-red-200">
              {p.title}
            </li>
          ))
        ) : (
          <h1>loading...</h1>
        )}
      </ul>
    </>
  );
};

export default Show;
