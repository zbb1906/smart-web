import http from 'utils/http';
import {
  setToken
} from 'utils/token';

/**
 * 用户登录
 * @param {string} usernam
 * @param {string} password
 */
export function login(username, password) {
  debugger;
  const data = {
    username,
    password
  }
  return http({
    method: 'post',
    url: '/login',
    data
  })
}
/**
 * 用户登出
 */
export function logout() {
  return http({
    method: 'post',
    url: '/logout',
    data
  })
}
