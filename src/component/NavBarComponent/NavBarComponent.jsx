import React, {useContext, useEffect, useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import {ResourcePath} from "../../dto/ResourcePath";
import Container from 'react-bootstrap/Container';
import {MedicalCenterContext} from "../../context/MedicalCenterContext";
import {Avatar, Button} from "@mui/material";
import AdminNavBar from "../admin/AdminNavBar";
import DoctorNavBar from "../doctor/DoctorNavBar";
import PatientNavBar from "../patient/PatientNavBar";
import BasicNavBar from "./BasicNavBar";

const NavBarComponent = () => {

    const {user, logout} = useContext(MedicalCenterContext);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(user.id !== 0);

    useEffect(() => {
        setIsUserLoggedIn(user.id !== 0);
    }, [user]);


    const handleLogout = () => {
        if (isUserLoggedIn) {
            logout();
            setIsUserLoggedIn(false);
            window.location.href = ResourcePath.HOME;
        } else {
            window.location.href = ResourcePath.LOGIN;
        }
    }

    const handleProfile = () => {
        window.location.href = ResourcePath.PROFILE;
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark" fixed="top">
            <Container>
                <Navbar.Brand href={ResourcePath.HOME}>MC</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="nav-bar-col">
                    {user.role === "admin" ? <AdminNavBar/> : null}
                    {user.role === "doctor" ? <DoctorNavBar/> : null}
                    {user.role === "patient" ? <PatientNavBar/> : null}
                    {user.role !== "admin" && user.role !== "doctor" && user.role !== "patient" ? <BasicNavBar/> : null}
                    <Button
                        onClick={handleLogout}
                        variant="outlined"
                        color={`${!isUserLoggedIn ? "primary" : "error"}`}>
                        {`${isUserLoggedIn ? "LogOut" : "Login"}`}
                    </Button>
                    <Avatar
                        onClick={handleProfile}
                        hidden={!isUserLoggedIn}
                        src={user.image}
                        sx={{width: 35, height: 35}}
                        className="avatar m-3"/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;