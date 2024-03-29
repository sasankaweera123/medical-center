import React, {useContext, useEffect} from "react";
import Card from "react-bootstrap/Card";
import {MedicalCenterContext} from "../../context/MedicalCenterContext";
import axios from "axios";
import {ResourcePath} from "../../dto/ResourcePath";

const AppointmentList = () => {

    const{users} = useContext(MedicalCenterContext);
    const todayString = today.toISOString().split('T')[0];

    useEffect(() => {

    }, []);

    const date = new Date();
    const today = date.toDateString();

    return (
        <Card bg="dark" text="white" className="appointment-list-card">
            <h1>{today} Appointments</h1>
        </Card>
    );
}

export default AppointmentList;