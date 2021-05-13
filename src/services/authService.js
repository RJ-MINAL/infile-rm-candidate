import jwtDecode from 'jwt-decode';
import http from './httpService';

const tokenKey = 'token';
http.setJwt(getJwt());

export async function login(email, password) {
  const { token, url } = await http.post(http.API.LOGIN, { email, password });
  localStorage.setItem(tokenKey, token);
  localStorage.setItem('userUrl', url);
}

export function loginWithJwt(token) {
  localStorage.setItem(tokenKey, token);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
