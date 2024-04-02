import React from "react";
import Nav from "react-bootstrap/Nav";
import BasicNavItem from "../NavBarComponent/BasicNavItem";
import {ResourcePath} from "../../dto/ResourcePath";

const PatientNavBar = () => {
    return (
        <Nav className="m-auto">
            <BasicNavItem />
            <Nav.Item>
                <Nav.Link href={ResourcePath.PATIENT_APPOINTMENTS}>Appointments</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={ResourcePath.USERS}>Our Users</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default PatientNavBar;