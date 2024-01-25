import React, { useContext } from "react";

import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
  const { getTotalCartAmount, allProduct, cartItems, removeFromCart } = useContext(ShopContext);
  console.log(getTotalCartAmount());
  return (
    <div className="cart-item">
      <div className="cart-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProduct.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div>
              <div className="cart-format cart-main">
                <img src={item.image} alt="" className="carticon" />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className="cart-quantity">{cartItems[item.id]}</button>
                <p>${item.new_price*cartItems[item.id]}</p>
                <img
                  src={removeIcon}
                  className="remove-icon"
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                  alt=""
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cart-down">
        <div className="cart-total">
            <h1>Cart Total</h1>
            <div>
                <div className="total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className="total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>

            </div>
            <button>PROCEED TO CHECKOUT</button>
         
        </div>
        <div className="cart-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cart-promobox">
                    <input type="text" placeholder="Promo Code"/>
                    <button>Submit</button>
                </div>
            </div>
      </div>
    </div>
  );
};

export default CartItem;
