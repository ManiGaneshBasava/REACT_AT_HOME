import React from 'react'
import "../css/confirmPassword.css"

function ConfirmPassword() {

    return (
        <div>
            <div className='form-style'>
                <div>
                    <h1>Reset Password</h1>
                    <p>Enter your email address and we’ll send you an email with instructions to reset your password</p>
                </div>
                <div>
                    <div className='margin'>
                        <label className="label-style">Password</label>
                        <input placeholder='New password' className="input-style" type="password" />
                    </div>
                    <div className='margin'>
                        <label className="label-style">Confirm Password</label>
                        <input placeholder='Confirm Password' className="input-style" type="password" />
                    </div>
                    <button className="button-style" type="onClick">RESET PASSWORD</button>
                </div>
                <div className='login-style'>
                    Back to Log In
                </div>
            </div>
            <div className='image-style'>
                <img src='/images/RectangleCopy (1).png' alt='' height='1012' width='1398'/>
            </div>
        </div>
    )
}

export default ConfirmPassword