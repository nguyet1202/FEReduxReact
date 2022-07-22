// import logo from './logo.svg';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Content from './layout/Content';
import ThaypinPage from './layout/ThaypinPage';
import ThayvoPage from './layout/ThayvoPage';
import ThayMH_EKPage from './layout/ThayMH_EKPage';
import ThayphancungPage from './layout/ThayphancungPage';
// import Create from './Pages/Create';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/ThayPin" element={<ThaypinPage />} />
            <Route path="/ThayVo" element={<ThayvoPage />} />
            <Route path="/ThayMH_EK" element={<ThayMH_EKPage />} />
            <Route path="/ThayPhanCung" element={<ThayphancungPage/>} />
        </Routes>
    );
}

export default App;