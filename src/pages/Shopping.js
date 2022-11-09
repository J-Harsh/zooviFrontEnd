import React, { useState } from "react";
import ProductCard from "../components/Atoms/ProductCard";
import Searchbar from "../components/Atoms/Searchbar";
import { DataState } from "../DataContext";
import "./Shopping.scss";

const Shopping = () => {
  const setOpen = () => {};
  const { products,company,filters,setFilters } = DataState();


  const [brandsFilter, setBrandsFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(false);

  

  const handleRange=(e)=>{
    setFilters((prev)=>
    {
      return({
        ...prev,
        rangeMax : Number(e.target.value),
      })
    })
  }

  const handleArray=(e)=>{
    const name=e.target.name;
    const newBrands={[e.target.name]: [...filters[name]]}
    if(newBrands[name].includes(e.target.value))
      newBrands[name].splice(newBrands[name].indexOf(e.target.value),1)
    else
      newBrands[name].push(e.target.value)

    setFilters((prev)=>{
      return({...prev,...newBrands})
    })
  }
  

  return (
    <div className="navBar">
      <nav>
        <Searchbar setOpen={setOpen} />
      </nav>
      <h1>Search Results</h1>
      <div className="content">
        <div className="filterSection">
          <h3
            onClick={() => {
              setBrandsFilter(!brandsFilter);
            }}
          >
            brandsFilter
          </h3>
          {brandsFilter && (
            <div className="filterContainer">
              {company.map((item,index)=><div key={index}>
                <input type="checkbox" name="brands" value={item.brand} onChange={(e)=>handleArray(e)} />
                <label>{item.brand}</label>
              </div>)}
            </div>
          )}
          <h3
            onClick={() => {
              setBrandsFilter(!brandsFilter);
            }}
          >
            brandsFilter
          </h3>
          {brandsFilter && (
            <div className="filterContainer">
              <div>
                <input type="range" name="rangeMax"  min="0" max="3000" onChange={(e)=>{handleRange(e)}} />
                <label>{filters?.rangeMax}</label>
              </div>
            </div>
          )}
          <h3
            onClick={() => {
              setBrandsFilter(!brandsFilter);
            }}
          >
            brandsFilter
          </h3>
          {brandsFilter && (
            <div className="filterContainer">
              <div>
                <input type="checkbox" name="rating" value="5" onChange={(e)=>handleArray(e)} />
                <label>Company</label>
              </div>
              <div>
                <input type="checkbox" name="rating" value="4" onChange={(e)=>handleArray(e)} />
                <label>Company</label>
              </div>
              <div>
                <input type="checkbox" name="rating" value="3" onChange={(e)=>handleArray(e)} />
                <label>Company</label>
              </div>
              <div>
                <input type="checkbox" name="rating" value="2" onChange={(e)=>handleArray(e)} />
                <label>Company</label>
              </div>
              <div>
                <input type="checkbox" name="rating" value="1" onChange={(e)=>handleArray(e)} />
                <label>Company</label>
              </div>
            </div>
          )}
        </div>
        <div className="productContainer">
          <div className="gridBox">
            {/* {products?.map((item)=><ProductCard key={item.id} item={item}/>)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
