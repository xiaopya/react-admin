import { Form, Input, Button, Card, Table, Popconfirm, message } from 'antd';
import { useAntdTable } from 'ahooks';
import { history } from 'umi';

interface Item {
  name: {
    last: string;
  };
  email: string;
  phone: string;
  gender: 'male' | 'female';
}

interface Result {
  total: number;
  list: Item[];
}

const getTableData = (
  { current, pageSize },
  formData: Object,
): Promise<Result> => {
  let query = `page=${current}&size=${pageSize}`;
  Object.entries(formData).forEach(([key, value]) => {
    if (value) {
      query += `&${key}=${value}`;
    }
  });

  return fetch(`https://randomuser.me/api?results=55&${query}`)
    .then((res) => res.json())
    .then((res) => ({
      total: res.info.results,
      list: res.results,
    }));
};

const ArticleTableList = () => {
  const [form] = Form.useForm();

  const { tableProps, search, params } = useAntdTable(getTableData, {
    defaultPageSize: 10,
    form,
  });
  const { submit } = search;

  const confirm = () => {
    message.info('删除成功');
  };

  const columns = [
    {
      title: 'name',
      dataIndex: ['name', 'last'],
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      render: () => {
        return (
          <div
            style={{
              width: '4rem',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <a onClick={() => history.push('/article/edittable')}>修改</a>
            <Popconfirm
              placement="top"
              title="确定要删除吗?"
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <a>删除</a>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const searchForm = (
    <Card>
      <div
        style={{
          marginBottom: 4,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <p>搜索数据json格式: &nbsp;&nbsp;&nbsp;{JSON.stringify(params[1])}</p>
        <div style={{ display: 'flex' }}>
          <Form
            form={form}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Form.Item
              name="name"
              initialValue="hello"
              rules={[{ required: true, message: 'name is required' }]}
            >
              <Input.Search
                placeholder="enter name"
                style={{ width: 320 }}
                onSearch={submit}
              />
            </Form.Item>
          </Form>
          <Button
            style={{ marginLeft: '1.25rem' }}
            onClick={() => history.push('/article/edittable')}
          >
            新增
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div>
      {searchForm}
      <Table columns={columns} rowKey="email" {...tableProps} />
    </div>
  );
};

export default ArticleTableList;
