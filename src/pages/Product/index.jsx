import React, { Component } from 'react'
import {Table} from 'antd'
import './style.css'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default class Product extends Component {
  state = {
    mockObj: {}
  }
  render() {
    return (
      <div>
        <Table 
          columns={columns} 
          dataSource={data} 
          pagination={{ defaultPageSize: 20, hideOnSinglePage: true, pageSizeOptions: ['10','20','30','40','50'] }} 
          scroll={{ y: 350 }} 
        />
      </div>
    )
  }
}
