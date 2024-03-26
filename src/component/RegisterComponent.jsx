import React, {useState} from "react";
import {Button, InputAdornment, IconButton, OutlinedInput} from "@mui/material";
import axios from "axios";
import {ResourcePath} from "../dto/ResourcePath";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const RegisterComponent = () => {

    const [registerUser, setRegisterUser] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegisterChange = (e) => {
        setRegisterUser({
            ...registerUser,
            [e.target.name]: e.target.value
        });
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (registerUser.password !== registerUser.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        axios.post(ResourcePath.API + ResourcePath.AUTH_REGISTER, registerUser)
            .then(res => {
                console.log(res);
                alert("User registered successfully");
                window.location.href = ResourcePath.LOGIN;
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <form onSubmit={handleRegisterSubmit} className="project-form">
            <div className="form-group">
                <OutlinedInput type="email" name="email" value={registerUser.email} onChange={handleRegisterChange}
                               placeholder="Email"/>
            </div>
            <div className="form-group">
                <OutlinedInput type={showPassword ? "text" : "password"} name="password" value={registerUser.password}
                               onChange={handleRegisterChange} placeholder="Password"
                               endAdornment={
                                   <InputAdornment position="end">
                                       <IconButton onClick={togglePasswordVisibility}>
                                           {showPassword ? <VisibilityOffOutlinedIcon/> : <RemoveRedEyeOutlinedIcon/>}
                                       </IconButton>
                                   </InputAdornment>
                               }
                />
            </div>
            <div className="form-group">
                <OutlinedInput type={showConfirmPassword ? "text" : "password"} name="confirmPassword"
                               value={registerUser.confirmPassword} onChange={handleRegisterChange}
                               placeholder="Confirm Password"
                               endAdornment={
                                   <InputAdornment position="end">
                                       <IconButton onClick={toggleConfirmPasswordVisibility}>
                                           {showConfirmPassword ? <VisibilityOffOutlinedIcon/> :
                                               <RemoveRedEyeOutlinedIcon/>}
                                       </IconButton>
                                   </InputAdornment>
                               }
                />
            </div>
            <div className="form-group">
                <Button variant="outlined" type="submit" className="submit">Register</Button>
            </div>
        </form>
    );
}

export default RegisterComponent;