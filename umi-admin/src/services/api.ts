import request from "@/utils/request";

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(body: string) {
  return request('/api/user/currentUser', {
    method: 'POST',
    data: body,
  });
}

/** 
* 退出登录接口 POST /api/login/outLogin  
*/
export async function outLogin() {
  return request<Record<string, any>>('/api/user/outLogin', {
    method: 'GET',
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: string) {
  return request('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });
}