import { Effect, Reducer } from 'umi';

declare namespace USER {
  interface UsersModelState {
    all_token?: {};
    userInfo?: {};
  }

  interface UsersModelType {
    namespace: 'users';
    state: UsersModelState;
    effects: {
      logins: Effect;
      userInfos: Effect;
    };
    reducers: {
      loginvals: Reducer<UsersModelState>;
      userInfovals: Reducer<UsersModelState>;
    };
  }
}
