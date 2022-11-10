import React, { useCallback } from "react";

import { DataState } from "../DataContext";
import ProductCard from "./Atoms/ProductCard";
import "./ProductSection.scss";

const ProductSection = () => {
  const { products } = DataState();


  return (
    <div className="productContainer">
      <div className="cards">
        {products?.map((item) => (
          <ProductCard key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
