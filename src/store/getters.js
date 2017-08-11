const getters = {
  token: state => state.user.token, // 登录token
  menus: state => state.user.menus  // 用户菜单
};
export default getters
