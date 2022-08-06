import React from "react";
import { useState } from "react";
import Axios from "axios";

export default function Addpp() {
  const [allProducts, setAllProducts] = useState({ product: " ", price: 0 });

  const setStock = (event) => {
    setAllProducts((preVal) => {
      return {
        ...preVal,
        [event.target.name]: event.target.value,
      };
    });
  };

  const addToList = () => {
    Axios.post("http://localhost:5000/api/v1/products", { allProducts });
  };
  return (
    <div className="App">
      <h1>CRUD-01</h1>

      <input type="text" name="product" onChange={setStock} />
      <input type="number" name="price" onChange={setStock} />
      <div></div>
      <button onClick={addToList}>Add</button>
    </div>
  );
}
