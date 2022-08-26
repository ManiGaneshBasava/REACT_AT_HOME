import React from 'react'
import '../css/signUp.css'

export default function SignUp() {
  return (
    <div>
      <div className='form-style'>
        <div>
          <h>Free Sign Up</h>
          <p>Don’t have an account? Create your account, it takes less than a minute</p>
        </div>
        <form >
          <div>
            <div className='margin'>
              <label className="label-style">Name</label>
              <input placeholder='Your name' className="input-style" type="text" />
            </div>
            <div className='margin'>
              <label className="label-style">Email</label>
              <input placeholder='Your email address' className="input-style" type="email" />
            </div>
            <div className='margin'>
              <label className="label-style">Password</label>
              <input placeholder='Your password' className="input-style" type="password" />
            </div>
            <div className='terms '>
              <input type="checkbox" id="terms" name="terms"/>
              <label> I accept all Terms & Conditions and Privacy Policies</label>
            </div>
          </div>
          <button className="button-style" type="submit">
            SIGN UP
          </button>
        </form>
        <div className='login-style'>
          Already have account? Log In
        </div>

      </div>
      <div className='image-style'>
        <img src="/images/feng.png" alt='' height='1012' width='1398' />
      </div>
    </div>  
  )
}
