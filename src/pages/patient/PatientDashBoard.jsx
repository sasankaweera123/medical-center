import React, {useEffect, useState} from "react";
import axios from "axios";
import {ResourcePath} from "../../dto/ResourcePath";
import AppointmentCard from "../../component/patient/AppointmentCard";

const PatientDashBoard = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get(ResourcePath.API + ResourcePath.APPOINTMENTS + "/id")
            .then(response => {
                console.log(response.data.data);
                setAppointments(response.data.data);
            }).catch(err => {
            console.log(err);
        });
    }, []);


    return (
        <div className="patient-dashboard my-5 py-5">
            <h1 className="pb-5">My Appointments</h1>
            <div className="appointments-list">
                {appointments.map((appointment,index) => (
                    <AppointmentCard key={index} appointment={appointment}/>
                ))}
            </div>
        </div>
    );
}

export default PatientDashBoard;