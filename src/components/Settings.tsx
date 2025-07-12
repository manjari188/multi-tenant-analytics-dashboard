import React, { useEffect, useState } from 'react';

export default function SettingsPage() {

    const [isDark, setIsDark] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('theme') === 'dark'){
            document.documentElement.classList.add('dark')
            setIsDark(true)
        }
    },[])

    const toggleTheme = () =>{
        if(isDark){
            setIsDark(false);
            localStorage.setItem('theme','light');
            document.documentElement.classList.remove('dark');
        }
        else{
            setIsDark(true);
            localStorage.setItem('theme','dark');
            document.documentElement.classList.add('dark');
        }
    }
    
    return (
        <div>
          <h2 className="text-2xl font-bold mb-4">Settings</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <label className="flex items-center space-x-4">
              <span className="text-gray-900 dark:text-gray-100">Dark Mode</span>
              <input
                type="checkbox"
                checked={isDark}
                onChange={toggleTheme}
                className="w-5 h-5"
              />
            </label>
          </div>
        </div>
      );
}