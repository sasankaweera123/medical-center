import React, {useContext} from "react";
import Card from "react-bootstrap/Card";
import {MedicalCenterContext} from "../../context/MedicalCenterContext";

const DepartmentCount = () => {

    const {doctorDepartments} = useContext(MedicalCenterContext);


    return (
        <Card bg="dark" text="white" className="department-count-card m-5">
            <Card.Header className="department-header">
                <Card.Title>Departments</Card.Title>
            </Card.Header>
            <Card.Body className="department-count">
                <div className="department-list">
                {doctorDepartments.map((department, index) => (
                    <p key={index}>{department}</p>
                ))}
                </div>
                <p>Total Departments: <br/> <span className="department-length">{doctorDepartments.length}</span></p>
            </Card.Body>
        </Card>
    );
}

export default DepartmentCount;