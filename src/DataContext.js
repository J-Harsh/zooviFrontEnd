import React, { createContext, useContext, useEffect, useState } from 'react'
import {data} from "./util/fakerData"

const Data=createContext();

const DataContext = ({children}) => {

const [products, setProducts] = useState(null);
const [brands, setBrands] = useState(null);

 


useEffect(() => {

setBrands(data.brands);
setProducts(data.products);
  
}, [])

  


  return (
    <Data.Provider value={{brands,products}}>
        {children}
    </Data.Provider>
  )
}

export default DataContext

export const DataState=()=>{
    return useContext(Data);
}