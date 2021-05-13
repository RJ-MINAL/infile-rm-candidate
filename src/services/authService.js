import http from './httpService';

const tokenKey = 'token';
const userUrl = 'userUrl';
http.setJwt(getJwt());

export async function login(email, password) {
  const { data } = await http.post(http.API.LOGIN, { email, password });
  console.log('login_response: ', data);
  localStorage.setItem(tokenKey, data.token);
  localStorage.setItem(userUrl, data.url);
}

export function loginWithJwt(token, url) {
  localStorage.setItem(tokenKey, token);
  localStorage.setItem(userUrl, url);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userUrl);
}

export function getCurrentUser() {
  try {
    const user = localStorage.getItem(userUrl);
    return user;
    // return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

const objExported = {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};

export default objExported;
