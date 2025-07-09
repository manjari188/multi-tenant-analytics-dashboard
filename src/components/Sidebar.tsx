import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function Sidebar() {
    const location = useLocation();
    return (
        <aside className="w-64 bg-white shadow h-full">
            <div className="p-6 font-bold text-lg border-b">Menu</div>
            <nav className="flex flex-col p-4 space-y-2">
                <Link
                    to="/dashboard"
                    className={`p-2 rounded hover:bg-gray-200 ${location.pathname === '/dashboard' ? 'bg-gray-200 font-semibold' : ''}`}>
                    Dashboard
                </Link>
                <Link
                    to="/settings"
                    className={`p-2 rounded hover:bg-gray-200 ${location.pathname === '/settings' ? 'bg-gray-200 font-semibold' : ''}`}>
                    Settings
                </Link>
            </nav>
        </aside>
    )
}