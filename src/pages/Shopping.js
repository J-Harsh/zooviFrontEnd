import React, { useState,useEffect } from "react";
import Searchbar from "../components/Atoms/Searchbar";
import FilterSection from "../components/FilterSection";
import ProductSection from "../components/ProductSection";
import Logo from "../assets/images/logo.png";
import "./Shopping.scss";
import { useNavigate } from "react-router-dom";
import { DataState } from "../DataContext";

const Shopping = () => {
  
  const setOpen = () => {};
  const{filters}=DataState();

  useEffect(() => {
    setInput(filters.search)
  }, [])
  
  const [input, setInput] = useState("");
  const navigate=useNavigate();

  return (
    <div>
      
      <img onClick={()=>{navigate('/')}} className="logoStatic" src={Logo}></img>
      <div className="searchbarContainer">
        <Searchbar input={input} setInput={setInput} setOpen={setOpen} />
      </div>
      
      <h1
      className="heading">Search Results</h1>
      <div className="content">
        <FilterSection />
        <ProductSection />
      </div>
    </div>
  );
};

export default Shopping;
