import React, {useContext, useState} from "react";
import {MedicalCenterContext} from "../context/MedicalCenterContext";
import CardComponent from "../component/CardComponent";
import {OutlinedInput, Select, MenuItem} from "@mui/material";

const OurUsersPage = () => {

    const {users} = useContext(MedicalCenterContext);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    let filteredUsers = users.filter(user => {
        if (selectedCategory === "all") {
            return user.name.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
            return user.role === selectedCategory && user.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleCategoryChange = (e) => {
        console.log(e.target.value);
        setSelectedCategory(e.target.value);
    }


    return (
        <div className="our-doctor-page my-5 py-5">
            <h1 className="page-header">USERS</h1>
            <form className="search-form">
                <Select onChange={handleCategoryChange} value={selectedCategory}>
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="Doctor">Doctor</MenuItem>
                    <MenuItem value="Staff Member">Staff Member</MenuItem>
                </Select>
                <OutlinedInput type="search" placeholder="Search Doctor" onChange={handleSearchChange} value={searchTerm}/>
            </form>
            <div className="user-list">
                {filteredUsers.map(mc_user => (
                    <CardComponent  key={mc_user.id} variable={mc_user}/>
                ))}
            </div>
        </div>
    );
}

export default OurUsersPage;