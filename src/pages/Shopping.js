import React, { useState } from "react";
import ProductCard from "../components/Atoms/ProductCard";
import Searchbar from "../components/Atoms/Searchbar";
import FilterSection from "../components/FilterSection";
import ProductSection from "../components/ProductSection";
import { DataState } from "../DataContext";
import "./Shopping.scss";

const Shopping = () => {
  const setOpen = () => {};
  

  return (
    <div className="navBar">
      <nav>
        <Searchbar setOpen={setOpen} />
      </nav>
      <h1>Search Results</h1>
      <div className="content">
          <FilterSection/>  
        <div className="productContainer">
          <ProductSection/>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
