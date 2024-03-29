import React, {useContext, useEffect, useState} from "react";
import {MedicalCenterContext} from "../../context/MedicalCenterContext";
import { PieChart } from '@mui/x-charts/PieChart';
import Card from "react-bootstrap/Card";
import {CardBody} from "react-bootstrap";

const UserCount = () => {
    const {users} = useContext(MedicalCenterContext);

    const [usersCount, setUsersCount] = useState([]);

    useEffect(() => {
        const data = users.reduce((acc, user) => {
            if (acc[user.role]) {
                acc[user.role] += 1;
            } else {
                acc[user.role] = 1;
            }
            return acc;
        }, {});
        setUsersCount(Object.keys(data).map((key) => ({ id: key, value: data[key] , label: key})));

    }, [users]);

    console.log(usersCount);
    return (
        <Card bg="dark" text="white" className="user-count-card m-5">
            <Card.Body>
            <h4>Total Users: {users.length}</h4>
            <PieChart className="pie-chart"
                series={[
                    {
                        data: usersCount,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    },
                ]}
                height={200}
            />
            </Card.Body>
        </Card>
    );
}

export default UserCount;