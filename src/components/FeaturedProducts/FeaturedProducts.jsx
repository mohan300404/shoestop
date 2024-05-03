import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'



const FeaturedProducts = ({type}) => {


  const data = [
    {
      id:1,
      img:"https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_WHT-SIL-B.ORG.jpg?v=1705644651",
      img2:"https://www.campusshoes.com/cdn/shop/files/NORTHPLUS_11G-677_BLK.jpg?v=1705644888",
      title:"Running Shoes",
      isNew:true,
      oldPrice:1900,
      price:1200,
    },
    {
      id:2,
      img:"https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_WHT-SIL-B.ORG.jpg?v=1705644651",
      title:"Running Shoes",
      isNew:true,
      oldPrice:1900,
      price:1200,
    },
    {
      id:3,
    
      img:"https://www.campusshoes.com/cdn/shop/files/NORTHPLUS_11G-677_BLK.jpg?v=1705644888",
      title:"Running Shoes",
      oldPrice:1900,
      price:1200,
    },
    {
      id:4,
    
      img:"https://www.campusshoes.com/cdn/shop/files/NORTHPLUS_11G-677_BLK.jpg?v=1705644888",
      title:"Running Shoes",
      oldPrice:1900,
      price:1200,
    },
  ];

  return (
    <div className='FeaturedProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam delectus omnis eum eveniet commodi, quia illum esse cum non voluptate itaque accusantium fugiat corporis tempore eos temporibus natus ut!</p>
        </div>
        <div className="bottom">
          {data.map(item=>(
            <Card item={item} key={item.id}/>
          ))}
        </div>
    </div>
  )
}

export default FeaturedProducts