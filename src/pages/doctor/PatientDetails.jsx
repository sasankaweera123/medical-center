import React, {useContext, useEffect, useState} from "react";
import {MedicalCenterContext} from "../../context/MedicalCenterContext";
import CardComponent from "../../component/CardComponent";

const PatientDetails = () => {

    const {users} = useContext(MedicalCenterContext);

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const patientList = users.filter(user => user.role === "Patient");
        setPatients(patientList);
    }, [users]);

    return (
        <div className="paatient-list my-5 py-5">
            <div className="user-list">
                {patients.map(patient => (
                    <CardComponent key={patient.id} variable={patient}/>
                ))}
            </div>
        </div>
    );
}

export default PatientDetails;