import React from "react";
import './WomenWear.css'
import img1 from "../Images/women1.jpg";
import img2 from "../Images/women2.jpg";
import img3 from "../Images/women3.jpg";
import img4 from "../Images/women4.jpg";
import img5 from "../Images/women5.jpg";
import img6 from "../Images/women6.jpg";
import img7 from "../Images/women7.jpg";
import img8 from "../Images/women8.jpg";

function WomenWear() {
  return (
    <div className="women_wear hide">
      <h2>Up to 30% off | Summerwear for women</h2>
      <div className="products">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </div>
    </div>
  );
}

export default WomenWear;
