import React from 'react';
import './Signin.css';

function Signin() {
  return (
    <div className='Signin_content hide'>
      <div className='content'>
        <p>See personalized recommendations</p>
        <button className='button'>Sign in</button>
        <p>New customer?<span className='start'>Start here</span></p>
      </div>
    </div>
  )
}

export default Signin