import React, { createContext, useContext, useEffect, useState } from 'react'
import {data} from "./util/fakerData"

const Data=createContext();

const DataContext = ({children}) => {

const [products, setProducts] = useState(null);
const [company, setCompany] = useState(null);
const [filters, setFilters] = useState({"brands":[],"rangeMax":null,"rating":[],"search":""});
console.log(filters);

useEffect(() => {

setCompany(data.brands);

}, [])

  useEffect(() => {
    let arr=data.products;
    if(filters.search.length!==0)
      arr=arr.filter((item)=> item.name.includes(filters.search))
    if(filters.brands.length!==0)
      arr=arr.filter((item)=> filters.brands.includes(item.brand))
    if(filters.rating.length!==0)
      arr=arr.filter((item)=> filters.rating.includes(item.rating))
    if(filters.rangeMax!==null)
      arr=arr.filter((item)=>item.price<=filters.rangeMax)
    
setProducts(arr);
  }, [filters])
  


  return (
    <Data.Provider value={{company,products,setProducts,filters,setFilters}}>
        {children}
    </Data.Provider>
  )
}

export default DataContext

export const DataState=()=>{
    return useContext(Data);
}