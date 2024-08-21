import React from 'react'
import './Newsletters.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On your E-mail</h1>
        <p>Subscribe to our newletter and stay updated</p> 
        <div>
            <input type="email" placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
