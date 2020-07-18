import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  saveUserToken(user_name) {
      window.localStorage.setItem(config.USER_TOKEN, user_name)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  getUserToken() {
      return window.localStorage.getItem(config.USER_TOKEN)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  clearUserToken() {
      window.localStorage.removeItem(config.USER_TOKEN)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(user_name, password) {
    return window.btoa(`${user_name}:${password}`)
  },
}

export default TokenService
