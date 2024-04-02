import React from "react";
import Nav from "react-bootstrap/Nav";
import {ResourcePath} from "../../dto/ResourcePath";

const BasicNavItem = () => {
    return(
        <Nav.Item>
            <Nav.Link href={ResourcePath.HOME}>Home</Nav.Link>
        </Nav.Item>
    );
}

export default BasicNavItem;