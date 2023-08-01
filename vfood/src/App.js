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
import Test from './Components/Categories/Categories';

const App = () => {
    const [login, setLogin] = useState(0);
    useEffect(() => {
        if (localStorage.getItem("userid" + Token)) {
            setLogin(1);
        }
    }, [])

    return (
        <div style={{ minHeight: '100vh' }} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={login ? (<Home />) : (<Login />)} />
                    <Route path="/description" element={login ? (<Description />) : (<Login />)} />
                    <Route path="/info" element={login ? (<Info />) : (<Login />)} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/faq" element={login ? (<faq />) : (<Login />)} />
                    <Route path="/profile" element={login ? (<Profile />) : (<Login />)} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};
export default App;