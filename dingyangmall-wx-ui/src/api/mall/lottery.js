import request from '@/utils/request'

export function getConfig() {
  return request({
    url: '/mall/lottery/config',
    method: 'get'
  })
}

export function saveConfig(obj) {
  return request({
    url: '/mall/lottery/config',
    method: 'post',
    data: obj
  })
}

export function getRecordPage(query) {
  return request({
    url: '/mall/lottery/record/page',
    method: 'get',
    params: query
  })
}
