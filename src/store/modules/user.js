import { getToken, setToken, removeToken } from 'utils/token';
import { login, getInfo } from 'api/user';

const user = {
  state: {
    token: getToken(),
    menus: []
  },
  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
    SET_MENUS: (state, menus) => state.menus = menus
  },
  actions: {
    /**
     * 用户登录
     */
    login: ({ commit }, loginDto) => {
      return new Promise((resolve, reject) => {
        login(loginDto).then(results => {
          setToken(results.data.token);
          commit('SET_TOKEN', results.data.token);
          resolve(results);
        }).catch(error => reject(error));
      });
    },
    /**
     * 前端登出 token是无状态的, 直接丢弃此token 无需通知后台
     */
    logout: ({ commit }) => {
      setToken('');
      commit('SET_TOKEN', '');
    },
    /**
     * 拉取当前登录用户信息,含有
     *
     * 用户基本信息,
     * 菜单
     */
    getInfo: ({ commit }) => {
      return new Promise((resolve, reject) => {
        getInfo().then(results => {
          commit('SET_MENUS', results.data.menus);  //  设置菜单信息
          resolve(results);
        }).catch(error => reject(error));
      })
    }
  }
}
export default user;
