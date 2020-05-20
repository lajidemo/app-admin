import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Layout, Menu } from 'antd';
import Home from '../Home'
import LeftNavs from '../../components/LeftNavs'
import './style.css'

const { Header, Content, Sider } = Layout;

export default class Admin extends Component {
  state = {
    collapsed: true
  }
  onCollapse = (collapsed ) => {
    this.setState({
      collapsed,
    })
  }
  render() {
    return (
      <Layout className="Home">
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider
            collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
            className="site-layout-background">
              <LeftNavs></LeftNavs>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path='/Home' component={Home}></Route>
                <Redirect to='/Home'></Redirect>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
