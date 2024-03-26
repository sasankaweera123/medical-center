import React from "react";
import Card from "react-bootstrap/Card";
import {ResourcePath} from "../dto/ResourcePath";
import Person4Icon from '@mui/icons-material/Person4';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <Card className="bg-dark text-white">
                <Card.Img src={ResourcePath.MAIN_BANNER_DESKTOP} alt="Card image" className="main-banner-desktop"/>
                <Card.Img src={ResourcePath.MAIN_BANNER_MOBILE} alt="Card image" className="main-banner-mobile"/>
                <Card.ImgOverlay className="image-text">
                    <Card.Title className="image-title">Welcome <br/> Medical Center</Card.Title>
                    <Card.Text className="image-icons">
                        <div className="person-icon">
                            <Person4Icon/>
                        </div>
                        <div className="hospital-icon">
                            <LocalHospitalIcon/>
                        </div>
                        <div className="admin-icon">
                            <AdminPanelSettingsIcon/>
                        </div>
                    </Card.Text>
                    <Card.Text className="image-body">
                        Medical Center is a platform where you can find the best doctors and book appointments with
                        them.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default WelcomePage;