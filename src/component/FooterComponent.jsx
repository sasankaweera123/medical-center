import React from "react";
import {ResourcePath} from "../dto/ResourcePath";

const FooterComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-text container">
                <span >All Rights Reserved 2024 @Medical Center</span>
                <span>Developed by <a href={ResourcePath.GITHUB}>{ResourcePath.DEVELOPER}.</a></span>
            </div>
        </footer>
    );
}

export default FooterComponent;