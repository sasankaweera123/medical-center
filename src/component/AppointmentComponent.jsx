import React, {useContext, useState} from "react";
import {MedicalCenterContext} from "../context/MedicalCenterContext";
import Card from "react-bootstrap/Card";
import {Modal} from "react-bootstrap";
import {Button} from "@mui/material";
import axios from "axios";
import {ResourcePath} from "../dto/ResourcePath";

const AppointmentComponent = (props) => {

    const{doctorId, timeSlot} = props;
    const {date, fromTime, toTime, availableCount} = timeSlot;

    const {users} = useContext(MedicalCenterContext);
    const [show, setShow] = useState(false);


    const doctorName = users.find(user => user.id === doctorId).name;

    const handelClose = () => {
        setShow(false);
    }

    const handelShow = () => {
        setShow(true);
    }

    const createAppointment = () => {
        axios.post(ResourcePath.API + ResourcePath.APPOINTMENT_CREATE, {
            doctorId: doctorId,
            timeSlotId: props.timeSlot.id
        }).then(response => {
            console.log(response.data);
            handelClose();
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="appointment-component">
            <Card className="card-component available-card" bg="dark" text="white">
                <div className="card-inside">
                    <Card.Body>
                        <Card.Title>
                            <span>{"Dr. " + doctorName}</span>
                        </Card.Title>
                        <Card.Text>
                            {date}
                        </Card.Text>
                        <Card.Text>
                            {fromTime + " - " + toTime}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Text className="available-capacity">
                            <span>Available Capacity</span> <span className="count">{availableCount}</span>
                        </Card.Text>
                    </Card.Body>
                </div>
                <Button variant="outlined" onClick={handelShow}>Book Appointment</Button>
            </Card>

            <Modal id="appointmentModal" show={show} onHide={handelClose} className="dark-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title> Appointment Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to book an appointment with </p>
                    <h5>Dr. {doctorName} </h5>
                    <ul>
                        <li>Date: {date}</li>
                        <li>Time: {fromTime} - {toTime}</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handelClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createAppointment}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AppointmentComponent;
