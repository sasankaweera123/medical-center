import {createContext, useCallback, useEffect, useMemo, useState} from "react";
import {TokenUser} from "../dto/TokenUser";
import axios from "axios";
import {ResourcePath} from "../dto/ResourcePath";

export const MedicalCenterContext = createContext(null);

const MedicalCenterContextProvider = (props) => {

    const [user, setUser] = useState(TokenUser);
    const [users, setUsers] = useState([]);
    const [doctorDepartments, setDoctorDepartments] = useState([]);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    useEffect(() => {
        axios.get(ResourcePath.API + ResourcePath.OUR_USERS)
            .then(response => {
                console.log(response.data['users']);
                setUsers(response.data['users']);
            }).catch(err => {
            console.log(err);
        });

    }, []);

    useEffect(() => {
        if (users.length > 1) {
            const doctorDepartments = users.filter(user => user.role === "Doctor").map(doctor => doctor.department);
            setDoctorDepartments(doctorDepartments);
            console.log(doctorDepartments);
        }
    }, [users]);


    const setUserContext = useCallback((user) => {
        localStorage.setItem('user', JSON.stringify(user));
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('user');
        setUser(TokenUser);
    }, []);

    const contextValue = useMemo(() => {
        return {
            user,
            setUserContext,
            logout,
            users,
            doctorDepartments
        }
    }, [user, setUserContext, logout, users, doctorDepartments]);
    return (
        <MedicalCenterContext.Provider value={contextValue}>
            {props.children}
        </MedicalCenterContext.Provider>
    );
}

export default MedicalCenterContextProvider;