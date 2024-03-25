import {createContext, useCallback, useEffect, useMemo, useState} from "react";

export const MedicalCenterContext = createContext(null);

const MedicalCenterContextProvider = (props) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    const setUserContext = useCallback((user) => {
        localStorage.setItem('user', JSON.stringify(user));
    }, []);

    const contextValue = useMemo(() => {
        return {
            user,
            setUserContext
        }
    }, [user, setUserContext]);
    return (
        <MedicalCenterContext.Provider value={contextValue}>
            {props.children}
        </MedicalCenterContext.Provider>
    );
}

export default MedicalCenterContextProvider;