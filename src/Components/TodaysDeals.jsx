import React from "react";
import "../Components/TodaysDeals.css";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img6 from "../Images/img6.jpg";
import img7 from "../Images/img7.jpg";
import img8 from "../Images/img8.jpg";
function TodaysDeals() {
  return (
    <div className="todaysDeals hide">
      <h2>Today's Deals</h2>
      <div className="product">
        <div className="product_card">
          <div className="product_img">
            <img src={img1} alt="" />
          </div>
          <div className="details">
            <p className="offer">
              <span className="discount">15% off </span>Deal of the Day
            </p>
            <p className="rate">
              ₹ 10,999.00{" "}
              <span className="original_rate">
                <strike>M.R.P.: ₹ 12,999.00</strike>
              </span>
            </p>
          </div>
        </div>
        <div className="product_card">
          <div className="product_img">
            <img src={img2} alt="" />
          </div>
          <div className="details">
            <p className="offer">
              <span className="discount">15% off </span>Deal of the Day
            </p>
            <p className="rate">Readmi A2</p>
          </div>
        </div>
        <div className="product_card">
          <div className="product_img">
            <img src={img6} alt="" />
          </div>
          <div className="details">
            <p className="offer">
              <span className="discount">15% off </span>Deal of the Day
            </p>
            <p className="rate">Hospital Clothes</p>
          </div>
        </div>
        <div className="product_card">
          <div className="product_img">
            <img src={img7} alt="" />
          </div>
          <div className="details">
            <p className="offer">
              <span className="discount">15% off </span>Deal of the Day
            </p>
            <p className="rate">Gamer Chair</p>
          </div>
        </div>
        <div className="product_card">
          <div className="product_img">
            <img src={img8} alt="" />
          </div>
          <div className="details">
            <p className="offer">
              <span className="discount">15% off </span>Deal of the Day
            </p>
            <p className="rate">Cream</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodaysDeals;
