import request from '@/utils/request'

export function getPage(query) {
  return request({
    url: '/mall/coupon/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/mall/coupon',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/mall/coupon/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/mall/coupon/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/mall/coupon',
    method: 'put',
    data: obj
  })
}