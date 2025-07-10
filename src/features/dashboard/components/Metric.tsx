import React from 'react';
import { MetricData } from "../../../types";

export default function Metric({ title, value, change }: MetricData) {
    const changeColor = change >= 0 ? "text-green-600" : "text-red-600";
    return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <p className={`mt-1 ${changeColor}`}>
        {change >= 0 ? "▲" : "▼"} {Math.abs(change)}%
      </p>
    </div>
)
}