import React, {useContext, useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {MedicalCenterContext} from "../../context/MedicalCenterContext";
import axios from "axios";
import {ResourcePath} from "../../dto/ResourcePath";
import {
    Button,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const AppointmentList = () => {

    const date = new Date();
    const today = date.toDateString();

    const {users} = useContext(MedicalCenterContext);

    const [appointments, setAppointments] = useState([]);
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState({});

    useEffect(() => {
        axios.get(ResourcePath.API + ResourcePath.APPOINTMENTS)
            .then(response => {
                console.log(response.data);
                setAppointments(response.data.data);
            }).catch(err => {
            console.log(err);
        });
    }, []);



    const getUserById = (userId) => {
        return users.find(user => user.id === userId);
    }

    const getDepartmentById = (departmentId) => {
        return users.find(user => user.id === departmentId);
    }

    const handleStatusChange = (e, appointmentId) => {
        const { value } = e.target;
        setStatus(prevState => ({
            ...prevState,
            [appointmentId]: value
        }));
        setShow(false)
    }

    const handleStatusUpdate = (appointmentId) => {
        axios.put(ResourcePath.API + ResourcePath.APPOINTMENTS + "/" + appointmentId, {status: status[appointmentId]})
            .then(response => {
                console.log(response.data);
                alert("Status Updated Successfully");
                setShow(true);
                window.location.reload();
            }).catch(err => {
            console.log(err);
        });
    }

    return (
        <Card bg="dark" text="white" className="appointment-list-card">
            <h1>{today} Appointments</h1>
            <TableContainer component={Paper} className={"appointment-table"}>
                <Table sx={{minWidth: 700}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Doctor</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Patient</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map(appointment => (
                            appointment.doctorAppointments.map((doctorAppointment,index) => (
                                <TableRow key={index}>
                                    <TableCell>{doctorAppointment.date}</TableCell>
                                    <TableCell>{doctorAppointment.time}</TableCell>
                                    {index === 0 && (
                                        <TableCell rowSpan={appointment.doctorAppointments.length}>
                                            {getUserById(appointment.doctorId).prefix +" "+getUserById(appointment.doctorId).name}
                                        </TableCell>
                                    )}
                                    {index === 0 && (
                                        <TableCell rowSpan={appointment.doctorAppointments.length}>
                                            {getDepartmentById(appointment.doctorId).department}
                                        </TableCell>
                                    )}
                                    <TableCell>{getUserById(doctorAppointment.patientId).name}</TableCell>
                                    <TableCell classes={{root: "status-cell"}}>
                                        <Select variant={"outlined"} value={status[doctorAppointment.appointmentId] || doctorAppointment.status}
                                                onChange={(e) => handleStatusChange(e, doctorAppointment.appointmentId)}>
                                            <MenuItem value="Pending">Pending</MenuItem>
                                            <MenuItem value="Confirm">Confirm</MenuItem>
                                            <MenuItem value="Cancel">Cancel</MenuItem>
                                        </Select>
                                        <Button color="success" className="status-button"
                                                hidden={status[doctorAppointment.appointmentId] === doctorAppointment.status || !status[doctorAppointment.appointmentId] || show}
                                                onClick={() => handleStatusUpdate(doctorAppointment.appointmentId)}
                                        ><CheckCircleOutlineIcon/></Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}

export default AppointmentList;