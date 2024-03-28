import React, {useContext, useState} from "react";
import {Card, Modal} from "react-bootstrap";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import {Avatar, Button, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import {MedicalCenterContext} from "../context/MedicalCenterContext";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from "axios";
import {ResourcePath} from "../dto/ResourcePath";


const CardComponent = ({variable}) => {

    const {user} = useContext(MedicalCenterContext);
    const [show, setShow] = useState(false);

    const [updateUser, setUpdateUser] = useState({
        id: variable.id,
        prefix: variable.prefix,
        name: variable.name,
        email: variable.email,
        department: variable.department,
        role: variable.role,
        gender: variable.gender,
        image: variable.image
    });


    const handleChange = (e) => {
        setUpdateUser({
            ...updateUser,
            [e.target.name]: e.target.value
        });
    }

    const handleUpdate = () => {
        axios.put(ResourcePath.API + ResourcePath.USER_UPDATE, updateUser)
            .then(response => {
                console.log(response.data);
                alert("User Updated")
                document.location.reload();
            }).catch(err => {
            console.log(err);
        });
    }

    const handleDelete = () => {
        axios.delete(ResourcePath.API + ResourcePath.USER_DELETE + variable.id)
            .then(response => {
                console.log(response.data);
                alert("User Deleted")
                document.location.reload();
            }).catch(err => {
            console.log(err);
        });
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div className="card-component-user">
        <Card className="card-component"  bg="dark" text="white">
            <Card.Body className="avatar">
                <Avatar alt="Remy Sharp" src={variable.image} sx={{ width: 70, height: 70 }}/>
            </Card.Body>
            <Card.Body>
                <Card.Title>
                    {variable.gender === "male"? <MaleIcon className="male"/> : <FemaleIcon className="female"/>}
                    <span>{"  "+ variable.prefix +" " + variable.name}</span>
                </Card.Title>
                <Card.Text>
                    {variable.department}
                </Card.Text>
                <Card.Link href={`mailto:${variable.email}`}>
                    {variable.email}
                </Card.Link>
            </Card.Body>
                {user.role === "admin" ?
                    <Card.Body className="button-group">
                        <Button onClick={handleShow}>
                            <EditOutlinedIcon className="edit-icon"/>
                        </Button>
                        <Button onClick={handleDelete}>
                            <DeleteOutlineOutlinedIcon className="delete-icon"/>
                        </Button>
                    </Card.Body>
                :null}

        </Card>

            <Modal show={show} onHide={handleClose} className="dark-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title> Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="edit-form">
                        <form className="project-form">
                            <Select onChange={handleChange} value={updateUser.prefix} name="prefix">
                                <MenuItem value="mr">Mr.</MenuItem>
                                <MenuItem value="mrs">Mrs.</MenuItem>
                                <MenuItem value="miss">Miss</MenuItem>
                                <MenuItem value="Dr.">Dr.</MenuItem>
                            </Select>
                            <TextField type="text" value={updateUser.name} name="name" onChange={handleChange}/>
                            <TextField type="text" value={updateUser.email} name="email" onChange={handleChange}/>
                            <TextField type="text" value={updateUser.department} name="department" onChange={handleChange}/>
                            <Select onChange={handleChange} value={updateUser.gender} name="gender">
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                            </Select>
                            <Select onChange={handleChange} value={updateUser.role} name="role">
                                <MenuItem value="admin">Admin</MenuItem>
                                <MenuItem value="Doctor">Doctor</MenuItem>
                                <MenuItem value="Staff Member">Staff Member</MenuItem>
                            </Select>
                            <TextField type="file" name="image" onChange={handleChange} inputProps={{ accept: 'image/*' }}/>
                        </form>
                        <Button onClick={handleUpdate}>Update</Button>
                        <Button onClick={handleClose}>Close</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default CardComponent;