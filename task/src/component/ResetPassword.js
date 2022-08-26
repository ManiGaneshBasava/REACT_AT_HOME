import React from 'react'
import "../css/resetPassword.css"

function ResetPassword() {

    return (
        <div>
            <div className='form-style'>
                <div>
                    <h1>Reset Password</h1>
                    <p>Enter yoiur email address and we’ll send you an email with instructions to reset your password</p>
                </div>
                <div>
                    <div className='margin'>
                        <label className="label-style">Email Address</label>
                        <input placeholder='Your email address' className="input-style" type="email" />
                    </div>
                    <button className="button-style" type="onClick">RESET PASSWORD</button>
                </div>
                <div className='login-style'>
                    Back to Log In
                </div>
            </div>
            <div className='image-style'>
                <img src='/images/RectangleCopy.png' alt='' height='1012' width='1398'/>
            </div>
        </div>
    )
}

export default ResetPassword