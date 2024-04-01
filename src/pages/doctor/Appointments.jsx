import React, {useContext, useEffect, useState} from "react";
import {MedicalCenterContext} from "../../context/MedicalCenterContext";
import axios from "axios";
import {ResourcePath} from "../../dto/ResourcePath";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Card from "react-bootstrap/Card";

const Appointments = () => {

    const {users} = useContext(MedicalCenterContext);
    const [appointmentList, setAppointmentList] = useState([]);
    const [department, setDepartment] = useState("");

    useEffect(() => {
        axios.get(ResourcePath.API + ResourcePath.APPOINTMENTS + "/doctor")
            .then(response => {
                console.log(response.data.data);
                setAppointmentList(response.data.data.appointments);
                setDepartment(response.data.data.department);
            }).catch(err => {
            console.log(err);
        });
    }, []);

    const getNameById = (userId) => {
        return users.find(user => user.id === userId).name;
    }

    return (
        <div className="appointments my-5 py-5 container">
            <Card bg="dark" text="white" className="appointment-list-card">
                <h1>Appointments</h1>
                <h5>Department : {department}</h5>
                <TableContainer component={Paper} className={"appointment-table"}>
                    <Table sx={{minWidth: 700}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Time - (From)</TableCell>
                                <TableCell>Time - (To)</TableCell>
                                <TableCell>Patient</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointmentList.map(appointment => (
                                <TableRow key={appointment.id}>
                                    <TableCell>{appointment.date}</TableCell>
                                    <TableCell>{appointment.fromTime}</TableCell>
                                    <TableCell>{appointment.toTime}</TableCell>
                                    <TableCell>{getNameById(appointment.patientId)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    );
}

export default Appointments;