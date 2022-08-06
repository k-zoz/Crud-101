import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import Axios from "axios";

export default function Showpp() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [seeAllpoducts, setSeeAllProducts] = useState([]);

  const fetchItems = async () => {
    try {
      const {
        data: { product },
      } = await Axios.get("http://localhost:5000/api/v1/products");

      setSeeAllProducts(product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {seeAllpoducts.map((prod) => {
        return (
          <div>
            <Product key={prod._id} product={prod.product} price={prod.price} />
          </div>
        );
      })}
    </div>
  );
}
