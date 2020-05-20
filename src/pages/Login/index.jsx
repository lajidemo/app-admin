import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.less'

export default class Login extends Component {
  componentDidMount(){
    console.log('this.props==== ', this.props);
  }
  onFinish = values => {
    console.log('Received values of form: ', values);
    this.props.history.push('/')
  };
  render() {
    return (
      <div className='form-content'>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '必填!',
              },{
                pattern: /^[a-zA-Z0-9_]{6,16}$/,
                message: '用户名由6到16个字母数字_组成!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },{
                min: 8,
                message: '密码最少输入8位!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
