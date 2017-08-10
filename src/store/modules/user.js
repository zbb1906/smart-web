import { getToken, setToken, removeToken } from 'utils/token';
import { login } from 'api/login';
import { info } from 'api/user';
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
          debugger;
          setToken(data.token);
          context.commit('SET_TOKEN', data.token);
          resolve(data);
        }).catch(error => {
          reject(error);
        });
      });
    },
    login2: ({ commit }, loginDto) => {
      info().then((data) => {
        console.log(data);
      })
    }
  }
}
export default user;
