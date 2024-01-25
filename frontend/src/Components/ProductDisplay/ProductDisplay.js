import React, { useContext } from "react";

import "./ProductDisplay.css";
import starIcon from "../Assets/star_icon.png";
import starDull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    // console.log(product.id);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="display-img-list">
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
        </div>
        <div className="display-img">
        <img className="display-main-img" src={product.image} alt=""/>
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="display-right-star">
        <img src={starIcon} alt=""/>
        <img src={starIcon} alt=""/>
        <img src={starIcon} alt=""/>
        <img src={starIcon} alt=""/>
        <img src={starDull} alt=""/>
        <p>(122)</p>
        </div>
        <div className="display-right-prices">
            <div className="display-right-old">
                ${product.old_price}
            </div>
            <div className="display-right-new">
                ${product.new_price}
            </div>
        </div>
        <div className="display-right-description">
            A lightweight, usually knitted, pullover shirt, close-fitting and with
            a round neckline and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className="display-right-size">
            <h1>Select Size</h1>
            <div className="display-number-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>

            </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
        <p className="display-right-category"><span>Category :</span> Women, T-Shirt, Crop Top</p>
        <p className="display-right-category"><span>Tags :</span> Modern, Latest</p>


      </div>
    </div>
  );
};

export default ProductDisplay;
