// import logo from './logo.svg';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './layout/Content';
import ThaypinPage from './layout/ThaypinPage';
import ThayvoPage from './layout/ThayvoPage';
import ThayMH_EKPage from './layout/ThayMH_EKPage';
import ThayphancungPage from './layout/ThayphancungPage';
import ThaypinDetail from './layout/ThaypinDetail';
import ThaykinhDetail from './layout/ThaykinhDetail';
import ThayvoDetail from './layout/ThayvoDetail';
import ThayphancungDetail from './layout/ThayphancungDetail';
import AboutUs from './layout/AboutUs';
import InforForm from './layout/InforForm';
// import Create from './Pages/Create';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/ThayPin" element={<ThaypinPage />} />
            <Route path="/ThayVo" element={<ThayvoPage />} />
            <Route path="/ThayMH_EK" element={<ThayMH_EKPage />} />
            <Route path="/ThayPhanCung" element={<ThayphancungPage/>} />
            <Route path="/ThayPinDetail/:id" element={<ThaypinDetail/>} />
            <Route path="/ThayvoDetail" element={<ThayvoDetail/>} />
            <Route path="/ThaykinhDetail" element={<ThaykinhDetail/>} />
            <Route path="/Thayphancung" element={<ThayphancungDetail/>} />
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/InforForm" element={<InforForm/>} />
        </Routes>
    );
}

export default App;