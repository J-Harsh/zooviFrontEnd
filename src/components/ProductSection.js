import React, { useCallback } from "react";

import { DataState } from "../DataContext";
import ProductCard from "./Atoms/ProductCard";
import "./ProductSection.scss";

const ProductSection = () => {
  const { products } = DataState();


  return (
    <div className="productContainer">
        {products?.length>0? <div className="cards">{products?.map((item) => (
          <ProductCard key={item.id} item={item}/>
        ))}</div>:<h2 className="notFound">No items found please try again as we are constantly adding items in out inventory 😊😊</h2> }
    </div>
  );
};

export default ProductSection;
