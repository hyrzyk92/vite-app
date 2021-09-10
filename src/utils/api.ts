import request from './request'

export function getConfig() {
  return request.get('basic/config_v2')
}