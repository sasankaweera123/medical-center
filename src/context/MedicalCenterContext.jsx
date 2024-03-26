import {createContext, useCallback, useEffect, useMemo, useState} from "react";
import {TokenUser} from "../dto/TokenUser";
import axios from "axios";
import {ResourcePath} from "../dto/ResourcePath";

export const MedicalCenterContext = createContext(null);

const MedicalCenterContextProvider = (props) => {

    const [user, setUser] = useState(TokenUser);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    useEffect(() => {
        axios.get(ResourcePath.API + ResourcePath.USER_DOCTORS)
            .then(response => {
                console.log(response.data['users']);
                setDoctors(response.data['users']);
            }).catch(err => {
            console.log(err);
        });

    }, []);

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
            doctors
        }
    }, [user, setUserContext, logout, doctors]);
    return (
        <MedicalCenterContext.Provider value={contextValue}>
            {props.children}
        </MedicalCenterContext.Provider>
    );
}

export default MedicalCenterContextProvider;