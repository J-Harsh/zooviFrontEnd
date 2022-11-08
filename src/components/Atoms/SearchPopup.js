import React from 'react'
import { DataState } from '../../DataContext';
import "./SearchPopup.scss"

const SearchPopup = () => {

    const {products,setSearch}=DataState();

  return (
    <div className='popUpContianer'>
        
        <div className='trendSection'>
            <h2>Latest Trends</h2>
            <div className='photoWrapper'>
                {products?.slice(0,5).map((item)=><div onClick={(e)=>{setSearch(e.target.dataset.value)}} key={item.id} className='photoCard'>
                    <img data-value={item.name} width="100%" src={item.imgUrl} ></img>
                    <h4 data-value={item.name}>{item.name}</h4>
                </div>)}
                
            </div>
        </div>
        <div className='popularSection'>
            <h2>Popular Suggestions</h2>
            <ul>
                {products?.slice(5,10).map((item)=><li onClick={(e)=>{setSearch(e.target.innerText)}} key={item.id} >{item.name}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default SearchPopup