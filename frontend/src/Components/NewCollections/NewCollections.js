import React from "react";
import './NewCollections.css';
import newCollections from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collections">
                {newCollections.map((item) =>{
                    return (<Item 
                    key={item.id} 
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    newPrice={item.new_price}
                    oldPrice={item.old_price}/>
                )})}
            </div>
        </div>
    );
};

export default NewCollections;