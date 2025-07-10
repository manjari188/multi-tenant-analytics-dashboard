import React from 'react';
import Chart from './components/Chart';
import Metric from './components/Metric';
import { fetchDashboardData } from '../../services/api';
import { useQuery } from '@tanstack/react-query';
import { DashboardData } from '../../types';

export default function DashboardPage() {

  const {data, isLoading} = useQuery<DashboardData>({
    queryKey: ['dashboardData'],
    queryFn: fetchDashboardData,
  })

  if (isLoading) return <p>Loading...</p>;
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {data?.metrics.map((m)=>( <div className="bg-white p-4 shadow rounded"><Metric {...m}/></div>))}
        </div>
        <Chart data={data?.chart}/>
      </div>
    );
  }
  