import React from 'react';

export default function DashboardPage() {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">Metric 1</div>
          <div className="bg-white p-4 shadow rounded">Metric 2</div>
          <div className="bg-white p-4 shadow rounded">Metric 3</div>
        </div>
      </div>
    );
  }
  