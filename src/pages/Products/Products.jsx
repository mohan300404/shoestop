import React, { useState } from 'react'
import "./Products.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
const Products = () => {

  const catId=parseInt(useParams.id)
  const [maxPrice,setMaxPrice] = useState(3000)
  const[sort,setSort]=useState(null)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1}/>
            <label htmlFor='1'>Men</label>
            </div>
            <div className="inputItem">
            <input type="checkbox" id='2' value={2}/>
            <label htmlFor='2'>Women</label></div>
            <div className="inputItem">
            <input type="checkbox" id='3' value={3}/>
            <label htmlFor='3'>Sports</label></div>
            <div className="inputItem">
            <input type="checkbox" id='4' value={4}/>
            <label htmlFor='4'>Sneakers</label></div>
            <div className="inputItem">
            <input type="checkbox" id='5' value={5}/>
            <label htmlFor='5'>Casuals</label></div>
            <div className="inputItem">
            <input type="checkbox" id='6' value={6}/>
            <label htmlFor='6'>Formals</label>
          </div>
        </div>
        <div className="filterItem">
        <h2>Filter by price</h2>
        <div className="inputItem">
          <span>0</span>
          <input type="range" min={0} max={3000} onChange={(e)=>setMaxPrice(e.target.value)}/>
          <span>{maxPrice}</span>
        </div>
        </div>
        <div className="filterItem">
        <h2>Sort by</h2>
        <div className="inputItem">
          <input type="radio" name="price" id="asc" value='asc'onChange={(e)=>setSort("asc")}/>
          <label htmlFor='asc'>Price (Lowest first)</label>
        </div>
        <div className="inputItem">
          <input type="radio" name="price" id="des" value='des' onChange={(e)=>setSort("des")}/>
          <label htmlFor='des'>Price (Lowest first)</label>
        </div>
        </div>
      </div>
      <div className="right">
        <img src="/img/salebanner.jpg" alt="" className='catImg'/>
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
        
      </div>
    </div>
  )
}

export default Products