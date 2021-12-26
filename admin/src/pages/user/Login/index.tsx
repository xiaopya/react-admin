import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Alert, message, Checkbox } from 'antd';
import React, { useState } from 'react';
import { ProFormText, LoginForm } from '@ant-design/pro-form';
import { history, SelectLang, useModel } from 'umi';
// import Footer from '@/components/Footer';
import { login } from '@/services/api'
import styles from './index.less';

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

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<any>({});
  const { initialState, setInitialState } = useModel('@@initialState');
  const vals = sessionStorage.getItem('username') && JSON.parse(sessionStorage.getItem('username'));
  if (vals) {
    // 看是否为 勾选 自动登录
    if (vals.checked) {
      setTimeout(() => {
        history.push("/");
      }, 500)
    }
  }
  const fetchUserInfo = async (msg: { status?: string | undefined; type?: string | undefined; currentAuthority?: string | undefined; username?: any; }) => {
    const userInfo = await initialState?.fetchUserInfo?.(msg?.username);
    if (userInfo) {
      sessionStorage.setItem('username', JSON.stringify({ ...initialState, currentUser: userInfo[0], }));
      await setInitialState((v: any) => {
        return {
          ...v,
          currentUser: userInfo[0],
        }
      });
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {

    try {
      // 登录
      const msgs = await login({ ...values }); //, type
      console.log(msg, 'msg');
      if (msgs.status === 'ok') {
        message.success("登录成功");
        await fetchUserInfo(msgs);
        // 此方法会跳转到 redirect 参数所在的位置
        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as { redirect: string };
        history.push(redirect || '/');
        return;
      }
      console.log(msgs, 'msg');
      // 如果失败去设置用户错误信息
      setUserLoginState(msgs);
    } catch (error) {
      message.error("登录失败，请重试！");
    }
  };
  const { msg, status } = userLoginState;

  // 给当前登录的用户设置上自动登录
  const onChange = (v: { target: { checked: boolean; }; }) => {
    const bool = v.target.checked;
    setInitialState((s) => ({ ...s, checked: bool, }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {SelectLang && <SelectLang />}
      </div>
      <div className={styles.content}>
        <LoginForm
          logo={<img alt="logo" src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" />}
          title="xīngkōng"
          subTitle=" "
          initialValues={{
            autoLogin: true,
          }}
          // actions={[
          //   <FormattedMessage
          //     key="loginWith"
          //     id="pages.login.loginWith"
          //     defaultMessage="其他登录方式"
          //   />,
          //   <AlipayCircleOutlined key="AlipayCircleOutlined" className={styles.icon} />,
          //   <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={styles.icon} />,
          //   <WeiboCircleOutlined key="WeiboCircleOutlined" className={styles.icon} />,
          // ]}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          {status === 'error' && (
            <LoginMessage
              content={msg}
            />
          )}
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={styles.prefixIcon} />,
            }}
            placeholder="请输入用户名"
            rules={[
              {
                required: true,
                message: "请输入用户名!",
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={styles.prefixIcon} />,
            }}
            placeholder="请输入密码"
            rules={[
              {
                required: true,
                message: "请输入密码！",
              },
            ]}
          />
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <Checkbox defaultChecked={vals?.checked} onChange={onChange}>自动登录</Checkbox>
            <a
              style={{
                float: 'right',
              }}
              onClick={() => message.success("你不会忘记密码的!")}
            >
              忘记密码
            </a>
          </div>
        </LoginForm>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
