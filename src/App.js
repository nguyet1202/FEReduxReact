// import logo from './logo.svg';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './pages/Content';
import BatteryReplacePage from './pages/BatteryReplacePage';
import CaseReplacePage from './pages/CaseReplacePage';
import ScreenReplacePage from './pages/ScreenReplacePage';
import HardwareReplacePage from './pages/HardwareReplacePage';

import BatteryReplaceDetail from './pages/BatteryReplaceDetail';
import ScreenReplaceDetail from './pages/ScreenReplaceDetail';
import CaseReplaceDetail from './pages/CaseReplaceDetail';
import HardwareReplaceDetail from './pages/HardwareReplaceDetail';
import AboutUs from './pages/AboutUs';
import InforForm from './pages/InforForm';
import Search from './pages/Search';
import Slide from './components/Slide';
import MainReplacePage from './pages/MainReplacePage'
import FormBooking from './pages/FormBooking';
import Banner from './components/Banner';
import Call from './components/Call';
function App() {
    return (
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Slide" element={<Slide />} />
        <Route path="/Call" element={<Call />} />
        <Route path="/Banner" element={<Banner />} />
        <Route path="/BatteryReplace" element={<BatteryReplacePage />} />
        <Route path="/CaseReplace" element={<CaseReplacePage />} />
        <Route path="/ScreenReplace" element={<ScreenReplacePage />} />
        <Route path="/HardwareReplace" element={<HardwareReplacePage />} />
        <Route path="/MainReplace" element={<MainReplacePage />} />
        <Route
          path="/BatteryReplaceDetail/:id"
          element={<BatteryReplaceDetail />}
        />
        <Route path="/CaseReplaceDetail/:id" element={<CaseReplaceDetail />} />
        <Route
          path="/ScreenReplaceDetail/:id"
          element={<ScreenReplaceDetail />}
        />
        <Route
          path="/HardwareReplaceDetail/:id"
          element={<HardwareReplaceDetail />}
        />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/InforForm" element={<InforForm />} />
        <Route path="/Search" element={<Search />} />

        <Route path="/FormBooking" element={<FormBooking />} />
      </Routes>
    );
}

export default App;