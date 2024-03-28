import React, {useContext} from "react";

import "./pages.css";
import LoginComponent from "../component/LoginComponent";
import RegisterComponent from "../component/RegisterComponent";
import {MedicalCenterContext} from "../context/MedicalCenterContext";

const LoginPage = () => {

    const {user} = useContext(MedicalCenterContext);

    const isUserLoggedIn = () => {
        return user.id !== 0;
    }

    return (
        <div className="login-page container my-5 py-5">
            <div className={`login-container ${isUserLoggedIn() ? "hidden-div" : null} `}>
                <div className="login-header">
                    <h1>Login</h1>
                </div>
                <LoginComponent/>
            </div>
            <div className="register-container">
                <div className="login-header">
                    <h1>Register</h1>
                </div>
                <RegisterComponent/>
            </div>
        </div>
    );
}

export default LoginPage;