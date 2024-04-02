import React from "react";
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';

const ErrorPage = () => {
    return (
        <div className="error-page m-5 p-5">
            <SentimentVeryDissatisfiedOutlinedIcon className="error-icon"/>
            <h1>404</h1>
            <h2>Page Not Found</h2>
        </div>
    );
}

export default ErrorPage;