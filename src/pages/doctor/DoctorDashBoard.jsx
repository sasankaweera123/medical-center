import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {ResourcePath} from "../../dto/ResourcePath";
import Card from "react-bootstrap/Card";
import {MedicalCenterContext} from "../../context/MedicalCenterContext";
import {Avatar} from "@mui/material";

const DoctorDashBoard = () => {

    const {users} = useContext(MedicalCenterContext);

    const [appointmentList, setAppointmentList] = useState([]);
    const [department, setDepartment] = useState("");

    useEffect(() => {
        const date = new Date();
        const today = date.toISOString().split('T')[0];
        console.log(today);
        axios.get(ResourcePath.API + ResourcePath.APPOINTMENTS + "/doctor")
            .then(response => {
                console.log(response.data.data);
                const todayAppointments = response.data.data["appointments"].filter(appointment => appointment.date === today);
                setAppointmentList(todayAppointments);
                console.log(todayAppointments);
                setDepartment(response.data.data.department);
            }).catch(err => {
            console.log(err);
        });
    }, []);

    const getUserById = (userId) => {
        return users.find(user => user.id === userId);
    }


    return (
        <div className="appointments my-5 py-5 container">
            <h1>Your Today's Appointments</h1>
            <h5>Department : {department}</h5>
            <div className="appointment-list">
                {appointmentList.map(appointment => (
                    <Card key={appointment.id} className="appointment-card" bg="dark" text="white">
                        <Card.Body>
                            <Card.Title>Patient : {getUserById(appointment.patientId).name}</Card.Title>
                            <Card.Text>
                                Date : {appointment.date} <br/>
                                From : {appointment.fromTime} <br/>
                                To : {appointment.toTime}
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Avatar src={getUserById(appointment.patientId).image} sx={{ width: 56, height: 56 }}/>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default DoctorDashBoard;