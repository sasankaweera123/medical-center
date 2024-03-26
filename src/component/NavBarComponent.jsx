import React, {useContext, useEffect, useState} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ResourcePath} from "../dto/ResourcePath";
import Container from 'react-bootstrap/Container';
import {MedicalCenterContext} from "../context/MedicalCenterContext";
import {Button} from "@mui/material";

const NavBarComponent = () => {

    const {user,logout} = useContext(MedicalCenterContext);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(user.id !== 0);

    useEffect(() => {
        setIsUserLoggedIn(user.id !== 0);
    }, [user]);


    const handleLogout = () => {
        if(isUserLoggedIn){
            logout();
            setIsUserLoggedIn(false);
        }else{
            window.location.href = ResourcePath.LOGIN;
        }
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark" fixed="top">
            <Container>
                <Navbar.Brand href={ResourcePath.HOME}>MC</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Item>
                            <Nav.Link href={ResourcePath.HOME}>Home</Nav.Link>
                        </Nav.Item>
                        {user.role === "admin" ?
                            <Nav.Item>
                                <Nav.Link href={ResourcePath.ADMIN_USERS}>Users</Nav.Link>
                            </Nav.Item> : null}
                        {user.role === "doctor" ?
                            <Nav.Item>
                                <Nav.Link href={ResourcePath.DOCTOR_APPOINTMENTS}>Appointments</Nav.Link>
                            </Nav.Item>
                            : null}
                        {user.role === "doctor" ?
                            <Nav.Item>
                                <Nav.Link href={ResourcePath.PATIENT}>Patients</Nav.Link>
                            </Nav.Item> : null}
                        <Nav.Item>
                            <Nav.Link href={ResourcePath.DOCTOR}>Doctors</Nav.Link>
                        </Nav.Item>
                        {user.role === "patient" ?
                            <Nav.Item>
                                <Nav.Link href={ResourcePath.PATIENT_APPOINTMENTS}>Appointments</Nav.Link>
                            </Nav.Item> : null}
                    </Nav>
                    <Button onClick={handleLogout} variant="outlined" color={`${!isUserLoggedIn?"primary":"error"}`}>{`${isUserLoggedIn ? "LogOut": "Login"}`}</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;