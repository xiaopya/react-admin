import { Form, Upload, Row, Col, Card, Input, message, Button, Space } from 'antd';
import { useState } from 'react';
import ImgCrop from 'antd-img-crop';
import { userInfo } from '@/services/api';
import { useModel } from 'umi';
// import CreateModal from '@/utils/model'

const Personal = () => {
    const { initialState } = useModel<any>('@@initialState');
    const name = sessionStorage.getItem('All_token');
    // 头像
    const [fileList, setFileList] = useState<never[]>([]);
    const [form] = Form.useForm();

    // 表单提交数据
    const onFinish = async (vals: {}) => {
        if (name) {
            const n = JSON.parse(name);
            const data = await userInfo({ username: initialState?.currentUser.username || n.username, info: vals, fileList: fileList[0] });
            console.log(data, 'data...')
            if (data.success === 'ok') {
                message.success('提交成功');
            } else {
                message.success('提交失败');
            }
        }
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    // const onFill = () => {
    //     form.setFieldsValue({
    //         url: 'https://taobao.com/',
    //     });
    // };

    // {
    //     uid: '-1',
    //     name: 'image.png',
    //     status: 'done',
    //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },


    const onChange = ({ fileList: newFileList }: { fileList: any }) => {
        console.log(newFileList, 'newFileList')
        setFileList(newFileList);
    };

    // 预览图片 打开一个新的窗口
    const onPreview = async (file: any) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        window.open(image.src)?.document.write(image.outerHTML);
    };

    const formData = () => (
        <>
            <Row>
                <Col span={14}>
                    <Form.Item
                        name="name"
                        label="名称"
                        rules={[
                            {
                                required: true,
                            },
                            {
                                pattern: /^[^\s]*$/,
                                message: '不允许空格哟',
                            }
                        ]}
                    >
                        <Input placeholder="发挥你的才能,想一个意义深长的名字吧" />
                    </Form.Item>
                </Col>
                <Col span={4} offset={4}>
                    <ImgCrop rotate>
                        <Upload
                            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 1 && '+ 头像上传'}
                        </Upload>
                    </ImgCrop>
                </Col>
            </Row>
            <Form.Item
                name="email"
                label="邮箱"
            >
                <Input placeholder="可以写上自己的邮箱" />
            </Form.Item>
            <Form.Item
                name="area"
                label="工作地区"
            >
                <Input placeholder="你也可以留下自己的工作的地方" />
            </Form.Item>
            <Form.Item
                name="saying"
                label="名言警句"
            >
                <Input placeholder="写上你自己名言警句,他会在主页展示" />
            </Form.Item>
            <Form.Item
                name="introduce"
                label="个人介绍"
            >
                <Input.TextArea placeholder="可以介绍一下,帅气的自己" showCount maxLength={200} />
            </Form.Item>
            <Form.Item>
                <Space>
                    <Button type="primary" htmlType="submit">
                        提交咯
                    </Button>
                    {/* <Button htmlType="button" onClick={onFill}>
                        Fill
                    </Button> */}
                </Space>
            </Form.Item>
        </>
    )


    return (
        <Card>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {formData}
            </Form>
        </Card>
    );
};

export default Personal;
