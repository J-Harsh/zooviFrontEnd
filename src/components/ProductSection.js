import React from "react";
import { DataState } from "../DataContext";
import "./ProductSection.scss";

const ProductSection = () => {
  const { products } = DataState();

  return (
    <div className="productContainer">
      <div className="cards">
        {products?.map((item) => (
          <li key={item.id} className="cards_item">
            <div className="card">
                <img className="card_image" src={item.imgUrl} />
              <div className="card_content">
                <h3 className="card_title">{item.name}</h3>
                <div className="priceSection">
                  <h4 className="original _price">
                    Rs.{item.price + 0.2 * item.price}
                  </h4>
                  <h4 className="discounted _price">
                    Rs.{item.price}
                  </h4>
                </div>
                <div className="ratingSection">
                  <p className="ratings">★★★★★ {item.numberOfRatings}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
