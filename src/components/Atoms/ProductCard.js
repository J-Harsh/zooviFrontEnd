import React, { useState } from 'react'
import { RiHeart3Fill } from "react-icons/ri";
import "./ProductCard.scss"

const ProductCard = ({item}) => {

  const [like, setLike] = useState(false)
  const [display, setDisplay] = useState(false)

  return (
    <li key={item.id} className="cards_item">
            <div className="card" onMouseEnter={()=>{setDisplay(true)}} onMouseLeave={()=>{setDisplay(false)}} >
              <RiHeart3Fill
                onClick={() => {setLike(!like)}}
                className={
                  like ? "heart_icon active" : " heart_icon"
                }
              />
              <img className="card_image" src={item.imgUrl} />
              
              {display && <button className='view-btn'>View Product</button>}
              <div className="card_content">
                <h3 className="card_title">{item.name}</h3>
                <div className="priceSection">
                  <h4 className="original _price">
                    Rs.{item.price + 0.2 * item.price}
                  </h4>
                  <h4 className="discounted _price">Rs.{item.price}</h4>
                </div>
                <div className="ratingSection">
                  <p className="ratings">
                    {"★".repeat(item.rating)} {item.numberOfRatings}
                  </p>
                </div>
              </div>
            </div>
          </li>
  )
}

export default ProductCard