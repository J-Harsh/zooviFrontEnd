import React from 'react'
import Searchbar from '../components/Atoms/Searchbar'

const Shopping = () => {
  const setOpen=()=>{

  }
  return (
    <div className=''>
        <nav>
            <Searchbar setOpen={setOpen}/>
        </nav>
        <div className='content'>
          <h1>Search Results</h1>
          <div className='filterContainer'>

          </div>
          <div className='productContainer'>

          </div>
        </div>
    </div>
  )
}

export default Shopping