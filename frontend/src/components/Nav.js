import React from "react";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";

export default function Nav() {
  return (
    <nav>
      <Link to={"/"}>
        <h1>ADD PRODUCTS</h1>
      </Link>
      <Link to={"/products"}>
        <AiFillShopping /> <h1>SEE ALL PRODUCTS</h1>
      </Link>
    </nav>
  );
}
