import React, { useState } from "react";
import { DataState } from "../DataContext";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import "./FilterSection.scss";

const FilterSection = () => {
  const { company, filters, setFilters } = DataState();
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [ratingOpen, setRatingOpen] = useState(false);

  const handleRange = (e) => {
    setFilters((prev) => {
      return {
        ...prev,
        rangeMax: Number(e.target.value),
      };
    });
  };

  const handleArray = (e) => {
    const name = e.target.name;
    const newBrands = { [e.target.name]: [...filters[name]] };
    if (newBrands[name].includes(e.target.value))
      newBrands[name].splice(newBrands[name].indexOf(e.target.value), 1);
    else newBrands[name].push(e.target.value);

    setFilters((prev) => {
      return { ...prev, ...newBrands };
    });
  };

  return (
    <div className="filterSection">
      <heading
        className="filterHeading "
        onClick={() => {
          setBrandsOpen(!brandsOpen);
        }}
      >
        <h2>brands</h2>
        {brandsOpen ? <AiOutlineUp />  : <AiOutlineDown />}
      </heading>
      {brandsOpen && (
        <div className="filterContainer">
          {company.map((item, index) => (
            <div key={index} className="fliterHolder">
              <input
                type="checkbox"
                name="brands"
                value={item.brand}
                onChange={(e) => handleArray(e)}
              />
              <label className="input_label">{item.brand}</label>
            </div>
          ))}
        </div>
      )}
      <heading
        className="filterHeading "
        onClick={() => {
          setPriceOpen(!priceOpen);
        }}
      >
        <h2>Price</h2>
        {priceOpen ? <AiOutlineUp />  : <AiOutlineDown />}
      </heading>
      {priceOpen && (
        <div className="filterContainer">
          <div>
            <input
              type="range"
              name="rangeMax"
              min="0"
              max="3000"
              onChange={(e) => {
                handleRange(e);
              }}
            />
            <label className="input_label">₹{filters?.rangeMax}</label>
          </div>
        </div>
      )}
      <heading
        className="filterHeading "
        onClick={() => {
          setRatingOpen(!ratingOpen);
        }}
      >
        <h2>Rating</h2>
        {ratingOpen ?<AiOutlineUp />  : <AiOutlineDown />}
      </heading>
      {ratingOpen && (
        <div className="filterContainer">
          <div class="rate">
            {[...Array(5)].map((_,index)=>{
              return(
                <div key={index} className="fliterHolder">
              <input
                type="checkbox"
                name="rating"
                value={index+1}
                onChange={(e) => handleArray(e)}
              />
              <label className="input_label">{"★".repeat(index+1)}</label>
            </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
