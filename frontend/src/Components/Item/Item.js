import React from "react";
import "./Item.css";
import { NavLink } from "react-router-dom";

const Item = (props) => {
  // console.log(props.newPrice)
  return (
    <div className="item">
      <NavLink to={`/product/${Number(props.id)}`}>
        <img src={props.image} onClick={window.scrollTo(0,0)} alt="" />
      </NavLink>

      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.newPrice}</div>
        <div className="item-price-old">${props.oldPrice}</div>
      </div>
    </div>
  );
};

export default Item;
