// import logo from './logo.svg';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './pages/Content';
import ThaypinPage from './pages/ThaypinPage';
import ThayvoPage from './pages/ThayvoPage';
import ThayMH_EKPage from './pages/ThayMH_EKPage';
import ThayphancungPage from './pages/ThayphancungPage';
import ThaypinDetail from './pages/ThaypinPage';
import ThaykinhDetail from './pages/ThaykinhDetail';
import ThayvoDetail from './pages/ThayvoDetail';
import ThayphancungDetail from './pages/ThayphancungDetail';
import AboutUs from './pages/AboutUs';
import InforForm from './pages/InforForm';
import Search from './pages/Search';


function App() {
    return (
        <Routes>

            <Route path="/" element={<Content/>} />
            <Route path="/ThayPin" element={<ThaypinPage/>} />
            <Route path="/ThayVo" element={<ThayvoPage />} />
            <Route path="/ThayMH_EK" element={<ThayMH_EKPage />} />
            <Route path="/ThayPhanCung" element={<ThayphancungPage/>} />
            <Route path="/ThayPinDetail/:id" element={<ThaypinDetail/>} />
            <Route path="/ThayvoDetail" element={<ThayvoDetail/>} />
            <Route path="/ThaykinhDetail" element={<ThaykinhDetail/>} />
            <Route path="/Thayphancung" element={<ThayphancungDetail/>} />
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/InforForm" element={<InforForm/>} />
            <Route path="/Search" element={<Search/>} />

        </Routes>
    );
}

export default App;