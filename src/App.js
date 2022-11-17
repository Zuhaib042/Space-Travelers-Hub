import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MissionsPage from './pages/MissionsPage';
import MyProfilePage from './pages/MyProfilePage';
import RocketsPage from './pages/RocketsPage';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        <Route path="/missionspage" element={<MissionsPage />} />
        <Route path="/myprofilepage" element={<MyProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
