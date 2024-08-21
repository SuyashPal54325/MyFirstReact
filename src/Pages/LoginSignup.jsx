import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
<input type="text"  placeholder='Your name'/>
<input type="email"  placeholder='Your Email'/>
<input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already Have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuimg, i agree to the terms and conditions </p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignup