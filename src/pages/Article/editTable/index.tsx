import * as React from 'react';
import List from './editlist';
import { Card } from 'antd';

interface IEditTableProps {}

const EditTable: React.FunctionComponent<IEditTableProps> = (props) => {
  return (
    <>
      <Card>
        <List />
      </Card>
    </>
  );
};

export default EditTable;
