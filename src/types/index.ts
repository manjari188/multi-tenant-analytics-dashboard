export type MetricData = {
    title: string;
    value: string;
    change: number;
  };
  
  export type ChartPoint = {
    name: string;
    value: number;
  };
  
  export type DashboardData = {
    metrics: MetricData[];
    chart: ChartPoint[];
  };