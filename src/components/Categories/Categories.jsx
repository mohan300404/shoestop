import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://assets.ajio.com/medias/sys_master/root/20230601/u7Kf/6478b55cd55b7d0c6330ef1a/-473Wx593H-469486467-white-MODEL.jpg" alt="" />
                <button><Link className='link' to="/products/1" >Men</Link></button>
            </div>
            <div className="row">
                <img src="https://fashionrazor.com/cdn/shop/products/15_H708dcf146cb4490180b426398450b0c4R_0ed69c5a-2f36-4331-82cb-a4a5d2ad9849.jpg?v=1655223334" alt="" />
                <button><Link className='link' to="/products/1" >Formals</Link></button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/5fcad15c3a21cd15046cf19e2c885a5c.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" alt="" />
                <button><Link className='link' to="/products/1" >Casuals</Link></button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                <div className="row"><img src="https://img.lazcdn.com/g/p/cbdbf46d02f945a2945bd0e50c5fd0b2.jpg_720x720q80.jpg" alt="" />
                <button><Link className='link' to="/products/1" >Sneakers</Link></button></div>
                </div>
                <div className="col">
                <div className="row">
                    <img src="https://www.rankandstyle.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Frns-dev%2Fmedia%2Flists%2Fm%2Fmens-athletic-sneakers_n6hKLzI.jpg&w=640&q=75" alt="" />
                    <button><Link className='link' to="/products/1" >Sports</Link></button>
                </div>
                </div>
            </div>
            <div className="row">
                <img src="https://media.istockphoto.com/id/487745566/photo/woman-sitting-on-sofa-with-colorful-shoes-and-bags-shopping.jpg?s=612x612&w=0&k=20&c=pPfwgUbKdFcyoSufzRjGptjPaDFMCPpyJ85hmR2NNXg=" alt="" />
                <button><Link className='link' to="/products/1" >Women</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Categories