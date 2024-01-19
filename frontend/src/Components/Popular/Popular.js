import React from "react";
import "./Popular.css";
import Item from "../Item/Item";
import dataProduct from "../Assets/data";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-container">
      <div className="popular-item">
        {dataProduct.map((item) => {
          return <Item 
          key={item.id}
           id={item.id} 
           name={item.name}
           image={item.image}
           newPrice={item.new_price}
           oldPrice={item.old_price}/>;
        })}
      </div>
      </div>
     
    </div>
  );
};

export default Popular;
