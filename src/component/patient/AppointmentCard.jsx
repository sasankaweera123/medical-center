import React, {useContext} from "react";
import {MedicalCenterContext} from "../../context/MedicalCenterContext";
import Card from "react-bootstrap/Card";
import {Avatar, Chip} from "@mui/material";

const AppointmentCard = ({appointment}) => {

    const {users} = useContext(MedicalCenterContext);
    const doctorName = users.find(user => user.id === appointment.doctorId).name;
    const department = users.find(user => user.id === appointment.doctorId).department;

    const chipColor = appointment.status === "Pending" ? "warning" : appointment.status === "Confirm" ? "success" : "error";

    return (
        <Card className="appointment-card" bg="dark" text="white">
            <Card.Body>
                <Card.Title>
                    <span>{doctorName}</span>
                </Card.Title>
                <Card.Text>
                    {department}
                </Card.Text>
                <Card.Text>
                    {appointment.date}
                </Card.Text>
                <Card.Text>
                    {appointment.fromTime + " - " + appointment.toTime}
                </Card.Text>
                <Chip label={appointment.status} color={chipColor}/>
            </Card.Body>
            <Card.Body>
                <Avatar className="avatar" src={users.find(user => user.id === appointment.doctorId).image}
                        sx={{width: 70, height: 70}}/>
            </Card.Body>
        </Card>
    );
}

export default AppointmentCard;