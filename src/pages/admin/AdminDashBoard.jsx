import React from "react";
import UserCount from "../../component/admin/UserCount";
import DepartmentCount from "../../component/admin/DepartmentCount";
import AppointmentList from "../../component/admin/AppointmentList";

const AdminDashBoard = () => {
    return (
        <div className="admin-dashboard m-5 p-5">
            <UserCount/>
            <DepartmentCount/>
            <AppointmentList/>
        </div>
    );
}

export default AdminDashBoard;