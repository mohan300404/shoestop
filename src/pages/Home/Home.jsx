import React from 'react'
import Slider from "../../components/Slider/Slider"

import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts/>
    </div>
  )
}

export default Home