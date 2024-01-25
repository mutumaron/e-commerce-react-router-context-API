import React, { useContext } from "react";
import './css/shop-category.css';
import { ShopContext } from "../Context/ShopContext";
import dropdownIcon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategoryPage = (props) => {
    const {allProduct} = useContext(ShopContext);
    return(
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt=""/>
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopCategory-sort">
                    Sort by <img src={dropdownIcon} alt=""/>
                </div>
            </div>
            <div className="shopCategory-products">
                {allProduct.map((item) =>{
                    if (props.category === item.category){
                        return(
                            <Item
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            newPrice={item.new_price}
                            oldPrice={item.old_price}/>
                        )
                    }
                    else{
                        return null
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
};

export default ShopCategoryPage;

