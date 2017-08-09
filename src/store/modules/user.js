import { getToken, setToken, removeToken } from 'utils/token';
import { login } from 'api/login';
const user = {
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN: (state, token) => state.token = token
  },
  actions: {
    login: (context, loginDto) => {
      return new Promise((resolve, reject) => {
        login(loginDto).then(data => {
          console.log("resolve login")
          // setToken(data.data.token);
          context.commit('SET_TOKEN', data.token);
          resolve(data);
        }).catch(error => {
          reject(error);
        });
      });
    },
    login2: ({ commit }, loginDto) => {
      login(loginDto).then(data => {
        console.log("then login2")
        // setToken(data.data.token);
        commit('SET_TOKEN', data.token);
      }).catch(error => {
      });
    }
  }
}
export default user;
