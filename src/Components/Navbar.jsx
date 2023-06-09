import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import india from '../Images/india.png'
import logo from '../Images/amazon_logo.png'
import './Nabar.css'
function Navbar() {
  return (
    <div className='navbar hide'>
      <div className='navbar-logo border'>
        <img src={logo} alt='logo' />
      </div>

      <div className='address border'>
        <p>Hello</p>
        <div className='location'>
        <FontAwesomeIcon icon={faLocationDot} />
        <p>Select your address</p>
        </div>
      </div>

      <div className="navbar-search">
        <select name="" id="" className='select'>
            <option value="All">All</option>
            <option value="Electronic">Electronic</option>
            <option value="Mobile">Mobile</option>
            <option value="Headphones">Headphone</option>
        </select>
        <input type="text" className='searchbox' placeholder='Search Amazon.in'/>
        <div className="search-symbol">
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} />
        </div>
      </div>

      
      <div className="language border">
      <img src={india} alt="india" />
        <select name="" id="" className='language-select'>
            <option value="">EN</option>
            <option value="">HI</option>
        </select>
      </div>

      <div className='signin border'>
        <p>Hello,Sign in </p>
        <div className='user'>
        <p>Account & List</p>
        <FontAwesomeIcon icon={faCaretDown} style={{color: "#fff",}} className='drop' />
        </div>
      </div>

      <div className='orders border'>
        <p>Return</p>
        <div className='return'>
        <p>& Orders</p>
        <FontAwesomeIcon icon={faCaretDown} style={{color: "#fff",}} className='drop' />
        </div>
      </div>
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} className='cart border' />
    </div>
  )
}

export default Navbar
