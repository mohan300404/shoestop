import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Accessories</span>
          <span>Shoes</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Link</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
        <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aperiam autem ipsa deleniti sapiente, earum voluptas quam? Impedit sunt asperiores saepe doloremque architecto distinctio ea quod eius, quisquam corrupti eum.</span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aperiam autem ipsa deleniti sapiente, earum voluptas quam? Impedit sunt asperiores saepe doloremque architecto distinctio ea quod eius, quisquam corrupti eum.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Store</span>
          <span className='copyright'>&copy; Copyright 2024.All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer