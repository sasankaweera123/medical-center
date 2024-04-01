import React, {useContext, useEffect, useState} from "react";
import {MedicalCenterContext} from "../context/MedicalCenterContext";
import axios from "axios";
import {ResourcePath} from "../dto/ResourcePath";
import {Avatar, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {Modal} from "react-bootstrap";
import {Label} from "@mui/icons-material";

const ProfilePage = () => {

    const {user} = useContext(MedicalCenterContext);
    const [userDetails, setUserDetails] = useState({});
    const [show, setShow] = useState(false);

    const [updateUser, setUpdateUser] = useState({
        prefix: userDetails.prefix,
        name: userDetails.name,
        email: userDetails.email,
        image: userDetails.image
    });

    useEffect(() => {
        axios.get(ResourcePath.API + ResourcePath.USER + "/" + user.id)
            .then(response => {
                console.log(response.data);
                setUserDetails(response.data);
            }).catch(err => {
            console.log(err);
        });
    }, [user.id]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        axios.delete(ResourcePath.API + ResourcePath.USER_DELETE + userDetails.id)
            .then(response => {
                console.log(response.data);
                alert("User Deleted")
                document.location.reload();
            }).catch(err => {
            console.log(err);
        });
    }

    const handleChange = (e) => {
        setUpdateUser({
            ...updateUser,
            [e.target.name]: e.target.value
        });
    }


    return (
        <div className="profile-page m-5 p-5">
            <div className="page-header">
                <h1>{userDetails.prefix} {userDetails.name}</h1>
                <div className="group-buttons">
                    <button className="btn btn-primary"><EditOutlinedIcon/></button>
                    <button className="btn btn-danger" onClick={handleShow}><DeleteOutlineOutlinedIcon/></button>
                </div>
            </div>
            <div className="profile-details">
                <div className="profile-picture">
                    <Avatar src={userDetails.image} sx={{width: 200, height: 200}}/>
                </div>
                <div className="profile-info">
                    <form className="project-form">
                        <div className="name-form form-group">
                            <div className="prefix-container">
                                <InputLabel id="prefix">Prefix</InputLabel>
                                <Select onChange={handleChange}
                                        value={updateUser.prefix}
                                        labelId="prefix"
                                        id="prefix"
                                        name="prefix" label="prefix"
                                        className="prefix">
                                    <MenuItem value="mr">Mr.</MenuItem>
                                    <MenuItem value="mrs">Mrs.</MenuItem>
                                    <MenuItem value="miss">Miss</MenuItem>
                                    <MenuItem value="Dr.">Dr.</MenuItem>
                                </Select>
                            </div>
                            <TextField label="Name" type={"text"} value={userDetails.name} name="name"
                                       onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <TextField label="Email" type={"email"} value={userDetails.email} name="email"
                                       onChange={handleChange}/></div>
                        <div className="form-group">
                            <TextField label="Role" type={"text"} value={userDetails.role} aria-readonly={true}/>
                        </div>
                        <div className="form-group">
                            <TextField label="Department" type={"text"} value={userDetails.department}/>
                        </div>
                    </form>
                </div>
            </div>


            <Modal show={show} onHide={handleClose} className="dark-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger" onClick={handleClose}>Close</button>
                    <button className="btn btn-primary" onClick={handleDelete}>Delete</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ProfilePage;