import { useQuery } from '@tanstack/react-query';
import { DashboardData } from '../../../types';
import { fetchDashboardData } from '../../../services/api';

export function useDashboardData() {
    
    const {data, isLoading} = useQuery<DashboardData>({
        queryKey: ['dashboardData'],
        queryFn: fetchDashboardData,
        staleTime: 5 * 60 * 1000,  // 5 minutes
        refetchOnWindowFocus: false,
      })

      return {
        data,
        isLoading
      }
    
}