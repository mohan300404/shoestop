import React from 'react'
import Slider from "../../components/Slider/Slider"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import "./Home.scss"
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="Featured"/>
      <Categories/>
      <FeaturedProducts type="Trending"/>
    </div>
  )
}

export default Home