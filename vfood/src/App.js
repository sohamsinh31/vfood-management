import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from './Containers/Home';
import Login from './Containers/Login/Login';
import SignUp from './Containers/SignUp/SignUp';
import Info from "./Containers/Info/Info"
import Description from './Containers/Description/Description';
import Faq from './Containers/FAQ/Faq';
import Profile from './Containers/Profile/Profile';
import { Token } from './Services/Constant';

const App = () => {
    const [login,setLogin] = useState(0);
    useEffect(() => {
        if(localStorage.getItem("userid"+Token))
        {
            setLogin(1);
        }
    }, [])
    
    return (
        <div style={{ minHeight: '100vh' }} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={login ? (<Home />) : (<Login />)} />
                    <Route path="/description" element={<Description />} />
                    <Route path="/" element={<Info />} />
                    <Route path="/" element={<SignUp />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/" element={<Faq />} />
                    <Route path="/" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};
export default App;