import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://media.architecturaldigest.com/photos/567098597450a9497ee52fc2/16:9/w_3087,h_1736,c_limit/new-balance-announces-plans-for-high-performance-3-d%E2%80%93printed-running-shoe-01.jpg",
    "https://wallpaperswide.com/download/converse_shoes-wallpaper-3840x2160.jpg",
    "https://media.wired.com/photos/64949938065114c6bc3082ae/16:9/w_2400,h_1350,c_limit/Hoka-Speedgoat-5-Angle-Gear.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;