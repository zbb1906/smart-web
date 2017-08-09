import {
  getToken,
  setToken,
  removeToken
} from 'utils/token';

const user = {
  state: {
    token: getToken()
  }
}

export default user;
