import { useEffect, useImperativeHandle } from 'react';
import { Form, Modal } from 'antd';

const CreateModal = ({
  visible,
  onCreate,
  onCancel,
  modalContent,
  title,
  initialValue,
  textId,
  okText,
  footer,
  width,
  flag,
  okButtonProps,
  onRef,
}: {
  visible?: boolean;
  onCreate?: any;
  onCancel?: any;
  modalContent?: any;
  title?: string;
  initialValue?: any;
  textId?: any;
  okText?: any;
  footer?: any;
  width?: any;
  flag?: any;
  okButtonProps?: any;
  onRef?: any;
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(initialValue);
  }, [textId, visible]);
  const setGetValue = (arr: any, types: string) => {
    let result = '';
    if (types === 'set') {
      form.setFieldsValue(arr);
    } else if (types === 'get') {
      result = form.getFieldsValue();
    }
    return result;
  };
  useImperativeHandle(onRef, () => ({
    setGetValue,
  }));
  return (
    <>
      {visible && (
        <Modal
          visible={visible}
          title={title}
          width={width}
          okText={okText}
          footer={footer}
          cancelText="取消"
          onCancel={() => {
            form.resetFields();
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            flag ? onCancel(form) : onCancel();
          }}
          destroyOnClose
          okButtonProps={okButtonProps}
          onOk={() => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                onCreate(values);
              })
              .catch((info) => {
                console.log('Validate Failed:', info);
              });
          }}
        >
          {/* {...formItemLayout} */}
          <Form form={form} name="form_in_modal">
            {modalContent}
          </Form>
        </Modal>
      )}
    </>
  );
};

export default CreateModal;
