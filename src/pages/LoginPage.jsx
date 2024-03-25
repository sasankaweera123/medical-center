import React, {useContext, useState} from "react";
import axios from "axios";
import {ResourcePath} from "../dto/ResourcePath";
import { jwtDecode } from "jwt-decode";
import {MedicalCenterContext} from "../context/MedicalCenterContext";

const LoginPage = () => {

    const {setUserContext} = useContext(MedicalCenterContext);

    const [loginUser, setLoginUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginUser({
            ...loginUser,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginUser);
        axios.post(ResourcePath.API + ResourcePath.AUTH, loginUser)
            .then(res => {
                const user = jwtDecode(res.data.token);
                setUserContext(user);
                console.log(user);
                window.location.href = ResourcePath.HOME;
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={loginUser.email} onChange={handleChange} placeholder="Email" />
                <input type="password" name="password" value={loginUser.password} onChange={handleChange} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;