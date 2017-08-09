import http from 'utils/http';

/**
 * 用户登录
 * @param {obj} loginDto
 */
export function login(loginDto) {
  return http({
    method: 'post',
    url: '/login',
    data: loginDto
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
