import { DashboardData } from "../types";

export function fetchDashboardData(): Promise<DashboardData> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                metrics: [
                  { title: "Total Users", value: "12,300", change: 5 },
                  { title: "Revenue", value: "$45,000", change: -2 },
                  { title: "Bounce Rate", value: "47%", change: 1 },
                ],
                chart: [
                  { name: "Jan", value: 400 },
                  { name: "Feb", value: 300 },
                  { name: "Mar", value: 500 },
                  { name: "Apr", value: 700 },
                  { name: "May", value: 600 },
                ],
              });
        },1000)
    })
}