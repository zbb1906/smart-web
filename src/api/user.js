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
 * 拉取当前登录用户信息,含有
 *
 * 用户基本信息,
 * 菜单
 */
export function getInfo() {
  return http({
    method: 'get',
    url: '/user/info'
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
