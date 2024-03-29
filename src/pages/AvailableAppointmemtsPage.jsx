import React, {useContext, useEffect, useState} from "react";
import {Select, MenuItem, TextField} from "@mui/material";
import {MedicalCenterContext} from "../context/MedicalCenterContext";
import axios from "axios";
import {ResourcePath} from "../dto/ResourcePath";
import {AvailableAppointments} from "../dto/AvailableAppointments";
import AppointmentComponent from "../component/AppointmentComponent";

const AvailableAppointmentsPage = () => {

    const {doctorDepartments} = useContext(MedicalCenterContext);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [availableAppointments, setAvailableAppointments] = useState([]);
    const [payload, setPayload] = useState(AvailableAppointments);


    useEffect(() => {
        axios.post(ResourcePath.API + ResourcePath.AVAILABLE_APPOINTMENTS, payload)
            .then(response => {
                console.log(response.data.data);
                setAvailableAppointments(response.data.data);
            }).catch(err => {
            console.log(err);
        });
    }, [payload]);


    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setPayload({...payload, department: e.target.value});
    }

    const handleFromDateChange = (e) => {
        if (e.target.id === "fromDate") {
            setFromDate(e.target.value);
            setPayload({...payload, fromDate: e.target.value});
        }
        if (e.target.id === "toDate") {
            setToDate(e.target.value);
            setPayload({...payload, toDate: e.target.value});
        }
    }

    return (
        <div className="available-appointments-page my-5 py-5">
            <form className="search-form">
                <Select variant={"outlined"} value={selectedCategory} onChange={handleCategoryChange}>
                    <MenuItem value="all">All</MenuItem>
                    {doctorDepartments.map(department => (
                        <MenuItem key={department} value={department}>{department}</MenuItem>
                    ))}
                </Select>
                <TextField type="date" id="fromDate" onChange={handleFromDateChange} value={fromDate} label="From" focused/>
                <TextField type="date" id="toDate" onChange={handleFromDateChange} value={toDate} label="To" focused/>
            </form>
            <div className="appointments-list">
                {availableAppointments.map(doctor => (
                    doctor.dateTime.map(timeSlot => (
                        <AppointmentComponent key={`${doctor.doctorId}-${timeSlot.date}-${timeSlot.fromTime}`} doctorId={doctor.doctorId} timeSlot={timeSlot}/>

                    ))
                ))}
            </div>
        </div>
    );
}

export default AvailableAppointmentsPage;