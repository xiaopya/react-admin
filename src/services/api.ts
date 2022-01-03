import request from "@/utils/request";

/** 获取当前的用户 GET /api/user/currentUser */
export async function currentUser(body: string) {
  return request('/api/user/currentUser', {
    method: 'POST',
    data: {
      username: body,
    },
  });
}

/** 
* 退出登录接口 POST /api/user/outLogin  
*/
export async function outLogin() {
  return request('/api/user/outLogin', {
    method: 'GET',
  });
}

/** 登录接口 POST /api/user/login */
export async function login(body: string) {
  return request('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });
}

/** 
 * 检验token POST /api/user/checkToken
 * */
export async function checkToken(body: { token: string, }) {
  return request('/api/user/checkToken', {
    method: 'POST',
    headers: {
      'authorization': body.token,
      'Content-Type': 'application/json',
    },
  });
}


/** 
 * 检验token POST /api/user/checkToken
 * */
export async function userInfo(body: any) {
  return request('/api/user/userInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });
}