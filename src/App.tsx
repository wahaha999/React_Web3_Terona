import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './app/components/Header';
import DashboardPage from './app/pages/DashboardPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </>
  );
}

export default App;
