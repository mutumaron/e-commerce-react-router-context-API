import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const ProductPage = () => {
  // const data = useRouteLoaderData('product-detail');

  const {allProduct} = useContext(ShopContext);
  const{productId} = useParams();
  const product = allProduct.find((e)=>e.id=== Number(productId));
  return (
    <div>
  
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts />
      
    </div>
  )
};

export default ProductPage;

// export const loader = ({params}) => {
//   const id = params.productId;

// };