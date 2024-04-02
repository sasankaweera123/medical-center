import React, {useContext, useEffect, useState} from "react";
import {MedicalCenterContext} from "../context/MedicalCenterContext";
import axios from "axios";
import {ResourcePath} from "../dto/ResourcePath";
import {Avatar, Button, FormControl, InputLabel, MenuItem, Select, styled, TextField} from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Modal} from "react-bootstrap";

const ProfilePage = () => {

    const {user,logout} = useContext(MedicalCenterContext);
    const [userDetails, setUserDetails] = useState({});
    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const [updateUser, setUpdateUser] = useState({
        prefix: '',
        name: '',
        email: '',
        image: ''
    });

    useEffect(() => {
        axios.get(ResourcePath.API + ResourcePath.USER + "/" + user.id)
            .then(response => {
                console.log(response.data);
                setUserDetails(response.data);
                setUpdateUser({
                    prefix: response.data.prefix,
                    name: response.data.name,
                    email: response.data.email,
                    image: response.data.image
                });
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
                alert("User Deleted");
                logout();
                window.location.href = ResourcePath.HOME;
            }).catch(err => {
            console.log(err);
        });
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUpdateUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleEdit = () => {
        setIsEdit(!isEdit);
    }

    const handleUpdate = () => {
        console.log(updateUser);
        axios.put(ResourcePath.API + ResourcePath.USER_UPDATE, updateUser)
            .then(response => {
                console.log(response.data);
                alert("User Updated")
                document.location.reload();
            }).catch(err => {
            console.log(err);
        });
    }

    const handleUpdateImage = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                setUpdateUser(prevState => ({
                    ...prevState,
                    [name]: event.target.result // This is the data URL
                }));
            };
            reader.readAsDataURL(file);
        }
    }

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });



    return (
        <div className="profile-page m-5 p-5">
            <div className="page-header">
                <h1>{userDetails.prefix} {userDetails.name}</h1>
                <div className="group-buttons">
                    <Button
                        variant="outlined"
                        className="edit-button"
                        onClick={handleEdit}
                        hidden={isEdit}
                    ><EditOutlinedIcon/></Button>
                    <Button
                        variant="outlined"
                        className="delete-button"
                        color="error"
                        onClick={handleShow}
                        hidden={isEdit}>
                        <DeleteOutlineOutlinedIcon/></Button>
                    <Button
                        variant="outlined"
                        className="update-button"
                        color="success"
                        onClick={handleUpdate}
                        hidden={!isEdit}>
                        <CheckCircleOutlineIcon/></Button>
                </div>
            </div>
            <div className="profile-details">
                <div className="profile-picture">
                    <Avatar src={updateUser.image} sx={{width: 200, height: 200}}/>
                   <Button component="label"
                           role={undefined}
                           variant="outlined"
                           tabIndex={-1}
                           className="upload-button mt-5"
                   hidden={!isEdit}>
                       Upload file
                       <VisuallyHiddenInput type="file" name="image" onChange={handleUpdateImage} accept="image/*"/>
                   </Button>
                </div>
                <div className="profile-info">
                    <form className="project-form">
                        <div className="name-form form-group">
                            <div className="prefix-container">
                                <FormControl fullWidth>
                                    <InputLabel id="prefix">Prefix</InputLabel>
                                    <Select
                                        value={userDetails.prefix || updateUser.prefix}
                                        labelId="prefix"
                                        name="prefix"
                                        label="Prefix"
                                        onChange={handleChange}
                                        disabled={!isEdit}
                                    >
                                        <MenuItem value="Mr.">Mr.</MenuItem>
                                        <MenuItem value="Mrs.">Mrs.</MenuItem>
                                        <MenuItem value="Miss.">Miss.</MenuItem>
                                        <MenuItem value="Dr.">Dr.</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <TextField label="Name" type={"text"} value={updateUser.name} name="name"
                                       onChange={handleChange} disabled={!isEdit} focused={isEdit}/>
                        </div>
                        <div className="form-group">
                            <TextField label="Email" type={"email"} value={updateUser.email} name="email"
                                       onChange={handleChange} disabled={!isEdit}/></div>
                        <div className="form-group">
                            <TextField label="Role" type={"text"} value={userDetails.role || ""} disabled/>
                        </div>
                        <div className="form-group">
                            <TextField label="Department" type={"text"} value={userDetails.department || ""} disabled/>
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