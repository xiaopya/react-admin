import { history } from 'umi';
import { login, userInfo } from '@/services/api';
import { message } from 'antd';
import { APIModel } from './api';
import { setToken } from '@/utils/localToken';

export interface UsersModelState {
  all_token?: {};
  userInfo?: {};
}

const UsersModel: APIModel.DvaModel<UsersModelState> = {
  namespace: 'users',

  state: {
    all_token: {},
    userInfo: {},
  },

  effects: {
    // 登录
    *logins(
      { payload: { initialState, values, setInitialState, setUserLoginState } },
      { call, put },
    ) {
      const data = yield call(login, values);
      if (data.status === 'ok') {
        message.success('登录成功');
        // 存储token
        yield setToken(data.data.token);
        // 存储用户名
        sessionStorage.setItem('user_name', data.data.username);
        const userInfo = yield initialState?.fetchUserInfo?.(
          data.data.username,
        );
        if (userInfo) {
          yield setInitialState((v: {}) => ({ ...v, currentUser: userInfo }));
        }
        history.push('/');
        return;
      }
      // 如果失败去设置用户错误信息
      setUserLoginState(data);
      yield put({
        type: 'loginvals',
        payload: data,
      });
    },
    // 用户个人信息
    *userInfos(
      { payload: { info, setInitialState, setInitial } },
      { call, put },
    ) {
      const data = yield call(userInfo, info);
      if (data?.success === 'ok') {
        message.success('修改成功');
        setInitialState((v: { currentUser: {} }) => ({
          ...v,
          currentUser: { ...v.currentUser, ...info.info },
        }));
        setInitial(info.info);
      } else {
        message.success('修改失败');
      }
      yield put({
        type: 'userInfovals',
        payload: data,
      });
    },
  },
  reducers: {
    loginvals(state, { payload }) {
      return {
        all_token: payload,
      };
    },
    userInfovals(state, { payload }) {
      // console.log(state, payload, 'state...')
      return {
        userInfo: payload,
      };
    },
  },
};

export default UsersModel;
