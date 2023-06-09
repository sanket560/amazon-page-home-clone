import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './SubNavbar.css'

function SubNavbar() {
  return (
    <div className='subnavbar hide'>

      <p>
      <FontAwesomeIcon icon={faBars} style={{color: "#ffffff", marginRight:"10px" }} /> All
      </p>
      <p className='border'>Amazon miniTV</p>
      <p className='border'>Sell</p>
      <p className='border'>Best Sellers</p>
      <p className='border'>Mobile</p>
      <p className='border'>Today's Deals</p>
      <p className='border'>Customers Service</p>
      <p className='border'>New Relases</p>
      <p className='border'>Electronic</p>
      <p className='border'>Home & Kitchen</p>
      <p className='border'>Fashion</p>

    </div>
  )
}

export default SubNavbar