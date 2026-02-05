import request from '@/utils/request'

// Get dashboard data
export function getDashboardData() {
  return request({
    url: '/system/dashboard/data',
    method: 'get'
  })
}
