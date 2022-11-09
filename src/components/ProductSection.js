import React from 'react'
import { DataState } from '../DataContext'
import "./ProductSection.scss"

const ProductSection = () => {


    const {products}=DataState();

    return (
<div class="cards">
        {products?.map((item)=>(
        <div class="card">
            <img class="card__image" src="https://fakeimg.pl/400x300/009578/fff/" alt=""></img>
            <div class="card__content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
                </p>
                <p>
                    Alias itaque praesentium eum, pariatur consequatur ducimus asperiores accusantium velit minima?
                </p>
            </div>
            <div class="card__info">
                <div>
                    <i class="material-icons">thumb_up</i>310
                </div>
                <div>
                    <a href="./" class="card__link">View Article</a>
                </div>
            </div>
        </div>
    ))}
    </div>
    )
}

export default ProductSection