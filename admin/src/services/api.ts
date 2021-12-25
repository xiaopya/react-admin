import request from '@/utils/request'

// 登录接口 POST /api/user/login
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
    return request<API.LoginResult>('/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

// 获取当前用户的 信息
export async function currentUser(body: API.LoginParams,options?: { [key: string]: any }) {
    return request<{
      data: API.CurrentUser;
    }>('/api/user/currentUser', {
      method: 'POST',
      data: {
          username: body,
      },
      ...(options || {}),
    });
  }
