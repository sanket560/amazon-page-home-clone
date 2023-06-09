import './Home.css'
import React from 'react'
import banner from '../Images/hero_image.jpg'
import pharma from '../Images/pharma.jpg'
import bus from '../Images/bus.jpg'
import plane from '../Images/plane.jpg'
import train from '../Images/train.jpg'
import travel from '../Images/travel.jpg'
import asus_store from '../Images/asus_store.jpg'
import brand from '../Images/brands.jpg'
function Home() {
  return (
    <>
    <div className="banner hide">
      <img src={banner} alt="" />
    </div>
    <div className="banner-cards hide">
      <div className="card">
        <div className="card-details">
           Up to 30% off on medicines
        </div>
        <img src={pharma} alt="" />
        <p>View Store</p>
      </div>
      <div className="card">
        <div className="card-details">
        Planning for your next trip? | Book travel tickets
        </div>
        <div className="card-img">
          <div className="imgbox">
            <img src={bus} alt="" />
              Guaranteed rewards on bus tickets
          </div>
          <div className="imgbox">
            <img src={train} alt="" />
              Zero gateway fees on trains
          </div>
          <div className="imgbox">
            <img src={plane} alt="" />
              Get up to 10% off* on flight tickets
          </div>
          <div className="imgbox">
            <img src={travel} alt="" />
              Products for your travel needs
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-details">
          Up to 70% off | Clearance store 
        </div>
        <img src={asus_store} alt="" />
        <p>View Store</p>
      </div>
      <div className="card-column">
        <div className="focus">
          <h2>Sign in for your best experience</h2>
          <button className='singin_btn'>Sign in Securely</button>
        </div>
        <div className="add">
          <img src={brand} alt="" />
        </div>
      </div>
    </div>
    </>

  )
}

export default Home