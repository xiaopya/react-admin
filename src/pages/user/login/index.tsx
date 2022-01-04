import React from 'react';
import { LoginForm, ProFormText } from '@ant-design/pro-form';
import { useState } from 'react';
// import { login } from '@/services/api';
import { history, useModel, connect } from 'umi';
import { Alert, message, Checkbox } from 'antd';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = ({ dispatch }: { dispatch: any }) => {
  // 设置用户登录的 错误信息
  const [userLoginState, setUserLoginState] = useState<{
    msg?: string | undefined;
    status?: string | undefined;
  }>({});
  const { initialState, setInitialState } = useModel<any>('@@initialState');

  const handleSubmit = async (values: API.LoginUser) => {
    // 登录
    dispatch({
      type: 'users/logins',
      payload: {
        values,
        setInitialState,
        initialState,
        setUserLoginState,
      },
    });
  };
  const { msg, status } = userLoginState;

  return (
    <div style={{ backgroundColor: 'white' }}>
      <LoginForm
        logo={
          <img
            alt="logo"
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
          />
        }
        title="xīngkōng"
        subTitle=" "
        initialValues={{
          autoLogin: true,
        }}
        onFinish={async (values: API.LoginUser) => {
          await handleSubmit(values);
        }}
      >
        {status === 'error' && <LoginMessage content={msg || ''} />}
        <ProFormText
          name="username"
          placeholder="请输入用户名"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          placeholder="请输入密码"
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        />
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <Checkbox>自动登录</Checkbox>
          <a
            style={{
              float: 'right',
            }}
            onClick={() => message.success('你不会忘记密码的!')}
          >
            忘记密码
          </a>
        </div>
      </LoginForm>
    </div>
  );
};

const mapStateToProps = ({ users }: { users: any }) => {
  console.log(users, '....');
  return {
    users,
  };
};

export default connect(mapStateToProps)(Login);
