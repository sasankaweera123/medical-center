import React, {useContext} from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ResourcePath} from "../dto/ResourcePath";
import ErrorPage from "../pages/ErrorPage";
import {MedicalCenterContext} from "../context/MedicalCenterContext";
import AdminDashBoard from "../pages/admin/AdminDashBoard";
import DoctorDashBoard from "../pages/doctor/DoctorDashBoard";
import PatientDashBoard from "../pages/patient/PatientDashBoard";
import WelcomePage from "../pages/WelcomePage";
import LoginPage from "../pages/LoginPage";

const MCRoutes = () => {

    const {user} = useContext(MedicalCenterContext);

    const getHomeElement = () => {
        switch (user.role) {
            case "admin":
                return <AdminDashBoard/>;
            case "doctor":
                return <DoctorDashBoard/>;
            case "patient":
                return <PatientDashBoard/>;
            default:
                return <WelcomePage/>;
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={ResourcePath.HOME} element={getHomeElement()}/>
                <Route path={ResourcePath.LOGIN} element={<LoginPage/>}/>
                <Route path={ResourcePath.ERROR} element={<ErrorPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default MCRoutes;