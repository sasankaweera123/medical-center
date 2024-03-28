import React from "react";
import Nav from "react-bootstrap/Nav";
import {ResourcePath} from "../../dto/ResourcePath";
import BasicNavItem from "../NavBarComponent/BasicNavItem";

const AdminNavBar = () => {
    return (
        <Nav className="m-auto">
            <BasicNavItem />
            <Nav.Item>
                <Nav.Link href={ResourcePath.ADMIN_USERS}>Users</Nav.Link>
            </Nav.Item>
        </Nav>
    );

}

export default AdminNavBar;