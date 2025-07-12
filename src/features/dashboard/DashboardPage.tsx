import React from 'react';
import Chart from './components/Chart';
import Metric from './components/Metric';
import { useDashboardData } from './hooks/useDashboardData';

export default function DashboardPage() {

  const {data: dashboardData, isLoading} = useDashboardData();

  if (isLoading) return <p>Loading...</p>;
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {dashboardData?.metrics.map((m)=>( <div className="bg-white p-4 shadow rounded"><Metric {...m}/></div>))}
        </div>
        <Chart data={dashboardData?.chart}/>
      </div>
    );
  }
  