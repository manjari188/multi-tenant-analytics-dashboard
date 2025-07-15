import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <aside className="w-64 bg-white shadow h-full">
            <div className="p-6 font-bold text-lg border-b">Menu</div>
            <nav className="flex flex-col p-4 space-y-2">
                <Link
                    to="/dashboard"
                    className={`p-2 rounded hover:bg-gray-200 ${location.pathname === '/dashboard' ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : ''}`}>
                    {t('dashboard')}
                </Link>
                <Link 
  to="/settings"
  className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${location.pathname === '/settings' ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : ''}`}>
   {t('settings')}
</Link>
            </nav>
        </aside>
    )
}