import React, { Component } from 'react'
import { Card, Button, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './style.css'

const columns = [
  {
    title: '分类名称',
    dataIndex: 'name',
  },
  {
    title: '操作',
    width: 300,
    render: () => (
      <div>
        <span className='null-link'>修改分类</span>&nbsp;&nbsp;&nbsp;
        <span className='null-link'>查看子分类</span>
      </div>
    )
  },
];
const data = [];
for (let i = 0; i < 15; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
  });
}

export default class Categroy extends Component {
  state = {
    mockObj: {}
  }
  addGoods = () => {
    console.log('添加新商品');
  }
  render() {
    const addBtn = <Button type="primary" onClick={this.addGoods} icon={<PlusOutlined />}>添加</Button>
    return (
      <div>
        <Card title="一级分类列表" extra={addBtn}>
          <Table 
            columns={columns} 
            dataSource={data} 
            pagination={{ defaultPageSize: 20, hideOnSinglePage: true }} 
            scroll={{ y: 350 }} 
          />
        </Card>
      </div>
    )
  }
}
