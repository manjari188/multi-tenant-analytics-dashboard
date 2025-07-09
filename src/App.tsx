import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';

export default function App() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-1">
            <Navbar />
            <main className="flex-1 p-6 overflow-auto">
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />}/>
                    <Route path="/dashboard" element={<DashboardPage/>}/>
                </Routes>
                </main>
            </div>
        </div>
    )
}