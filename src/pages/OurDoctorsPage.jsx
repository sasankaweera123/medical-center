import React, {useContext} from "react";
import {MedicalCenterContext} from "../context/MedicalCenterContext";
import CardComponent from "../component/CardComponent";

const OurDoctorsPage = () => {

    const {doctors} = useContext(MedicalCenterContext);

    return (
        <div className="our-doctor-page mt-5">
            <h1>Our Doctors</h1>
            <div className="doctor-list">
                {doctors.map(doctor => (
                    <CardComponent  key={doctor.id} variable={doctor}/>
                ))}
            </div>
        </div>
    );
}

export default OurDoctorsPage;