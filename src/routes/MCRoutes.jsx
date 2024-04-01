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
import OurUsersPage from "../pages/OurUsersPage";
import AvailableAppointmentsPage from "../pages/AvailableAppointmemtsPage";
import PatientDetails from "../pages/doctor/PatientDetails";
import Appointments from "../pages/doctor/Appointments";
import ProfilePage from "../pages/ProfilePage";

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
                <Route path={ResourcePath.USERS} element={<OurUsersPage/>}/>
                <Route path={ResourcePath.ADMIN_USERS} element={<OurUsersPage/>}/>
                <Route path={ResourcePath.USER_AVAILABLE_APPOINTMENTS} element={<AvailableAppointmentsPage/>}/>
                <Route path={ResourcePath.PATIENT} element={<PatientDetails/>}/>
                <Route path={ResourcePath.DOCTOR_APPOINTMENTS} element={<Appointments/>}/>
                <Route path={ResourcePath.PATIENT_APPOINTMENTS} element={<AvailableAppointmentsPage/>}/>
                <Route path={ResourcePath.PROFILE} element={<ProfilePage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default MCRoutes;