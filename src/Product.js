/*eslint-disable*/

import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { 재고context } from "./App";

function Product(props) {
  let 재고 = useContext(재고context);
  let history = useHistory();

  return (
    <div>
      <div
        className="col-md-4"
        onClick={() => {
          history.push("/detail/" + props.shoes.id);
        }}
      >
        <img
          src={
            "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
          }
          width="100%"
        />
        <h4>{props.shoes.title}</h4>
        <p>
          {props.shoes.content}&{props.shoes.price}
        </p>
        {재고}
      </div>
    </div>
  );
}

export default Product;
