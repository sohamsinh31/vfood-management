import React from 'react';
import "./styles.css";
import Home from './Containers/Home';
import Login from './Containers/Login/Login';
import SignUp from './Containers/SignUp/SignUp';
import Info from "./Containers/Info/Info"
import Description from './Containers/Description/Description';

const App = () => (
    <div style={{ height: '100%' }}>
        {/* <Home /> */}
        {/* <Description /> */}
        {/* <Info /> */}
        {/* <SignUp /> */}
        <Login/>
    </div>
);
export default App;