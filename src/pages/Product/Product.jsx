import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

  const[selectedImg,setSelectedImg] = useState(0);

  const[quanity,setQuantity] = useState(0);

  const images = [
    "https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_WHT-SIL-B.ORG.jpg?v=1705644651",
    "https://www.campusshoes.com/cdn/shop/files/NORTHPLUS_11G-677_BLK.jpg?v=1705644888"
  ];
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>1900</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, quo iure! Soluta ex nostrum fuga harum velit eius adipisci recusandae.</p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev === 1?1 : prev-1)}>-</button>
            {quanity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon/> Add to Cart
        </button>
        <div className="links">
          <div className="item">
          <FavoriteBorderIcon/>Add to WishList
          </div>
          <div className="item">
            <BalanceIcon/> Add to compare
          </div>
        </div>
        <div className="info">
          <span>Manufacturer: Nike</span>
          <span>Product Type:Sport Shoe</span>
          <span>Tag:Sport, Running, Men, Women</span>
        </div>
        <div className="details">
          <span>Description</span>
          <hr />
          <span>Additional Information</span>
          <hr />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, tenetur!</p>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product