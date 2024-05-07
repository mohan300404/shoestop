import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Cart = () => {

    const data = [
        {
          id:1,
          img:"https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_WHT-SIL-B.ORG.jpg?v=1705644651",
          img2:"https://www.campusshoes.com/cdn/shop/files/NORTHPLUS_11G-677_BLK.jpg?v=1705644888",
          title:"Running Shoes",
          desc:"lorem kdcgdj aagiacb ajcafcyug ayfauycga juyafya uywivsjvsd hgdy.",
          isNew:true,
          oldPrice:1900,
          price:1200,
        },
        {
          id:2,
          img:"https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_WHT-SIL-B.ORG.jpg?v=1705644651",
          title:"Running Shoes",
          desc:"lorem kdcgdj aagiacb ajcafcyug ayfauycga juyafya uywivsjvsd hgdy.",
          isNew:true,
          oldPrice:1900,
          price:1200,
        }];
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map((item)=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1 x {item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>1900</span>
        </div>
        <button>Procced to Checkout </button>
        <span className='reset'> Reset Cart</span>
    </div>
  )
}

export default Cart