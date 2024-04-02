import React from "react";
import BasicNavItem from "./BasicNavItem";
import Nav from "react-bootstrap/Nav";
import {ResourcePath} from "../../dto/ResourcePath";

const BasicNavBar = () => {
    return (
        <Nav className="m-auto">
            <BasicNavItem />
            <Nav.Item>
                <Nav.Link href={ResourcePath.USERS}>Our Users</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default BasicNavBar;