import './App.css';
import React from 'react';
import MCRoutes from "./routes/MCRoutes";
import NavBarComponent from "./component/NavBarComponent/NavBarComponent";
import FooterComponent from "./component/FooterComponent";

function App() {
    return (
        <React.Fragment>
            <NavBarComponent/>
            <MCRoutes/>
            <FooterComponent/>
        </React.Fragment>
    );
}

export default App;
