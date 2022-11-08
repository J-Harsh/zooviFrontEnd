import React from 'react'
import { DataState } from '../../DataContext';
import "./SearchPopup.scss"

const SearchPopup = () => {

    const {products}=DataState();
    

  return (
    <div className='popUpContianer'>
        <div className='trendSection'>
            <h2>Latest Trends</h2>
            <div className='photoWrapper'>
                {/* {products?.slice(0,4).map((item,index)=>console.log(item))} */}
                <div className='photoCard'>
                    <img src='' ></img>
                </div>
            </div>
        </div>
        <div className='popularSection'>
        </div>
    </div>
  )
}

export default SearchPopup