import React from "react";

export default function Product(props) {
  return (
    <div className="box">
      <div className="product-box">
        <p> {props.product} </p>
        <p> {props.price} </p>
      </div>
    </div>
  );
}
