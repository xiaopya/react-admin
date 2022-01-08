import * as React from 'react';
import { Form, Input, message, Button, Space } from 'antd';
import Markdown_text from './Markdown_text';

interface IListProps {}

const List: React.FunctionComponent<IListProps> = (props) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success('Submit success!');
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    });
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="title"
          label="标题"
          rules={[
            { required: true },
            { message: '输入过长,请重新输入', max: 32 },
          ]}
        >
          <Input placeholder="请输入文章标题" />
        </Form.Item>
        <Markdown_text />
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            {/* <Button htmlType="button" onClick={onFill}>
                            Fill
                        </Button> */}
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default List;
