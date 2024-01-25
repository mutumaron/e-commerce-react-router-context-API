import React from "react";
import './css/auth.css';

const AuthPage = () => {

    return(
        <div className="auth">
            <div className="auth-container">
                <h1>Sign Up</h1>
                <div className="auth-fields">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="email" placeholder="Enter Your Email"/>
                    <input type="password" placeholder="Enter Your Password"/>
                </div>
                <button>Continue</button>
                <p className="auth-login">Already hav an account? <span>Login</span></p>
                <div className="auth-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, I agree to the terms of use & privacy</p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;

