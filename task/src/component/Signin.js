import React from 'react'
import '../css/signin.css'

function Signin() {
    return (
        <div>
            <div className='signin'>
                <form className='form-style'>
                    <div>
                        <h>Sign in</h>
                        <p>Enter your email address and password to access
                            account.</p>
                    </div>
                    <div className='margin'>
                        <label className="label-style">Enter User Email</label>
                        <input placeholder='Your email address' className="input-style" type="email" />
                    </div>
                    <div className='margin'>
                        <label className="label-style">Password</label>
                        <input placeholder='Password' className="input-style" type="password" />
                    </div>
                    <div className='terms '>
                        <input type="checkbox" id="terms" name="terms" />
                        <label> Keep me logged in</label>
                    </div>
                    <div className='forgot'>
                        oh no, I forgot my password
                    </div>
                    <button className="button-login" type='submit'>LOGIN</button>
                </form>
                <div>
                    <button className='button-signup-google'>Sign Up Google</button>
                </div>
                <div className='login-style'>
                    Already have account? Log In
                </div>
            </div>
            <div className='image-style'>
                <img src="/images/RectangleCopy (3).png" alt='' height='1012' width='1398' />
            </div>
        </div>
    )
}

export default Signin