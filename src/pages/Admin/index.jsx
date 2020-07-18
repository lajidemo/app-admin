import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import LeftNavs from 'components/LeftNavs'
import NULLHeader from 'components/NULLHeader'
import utils from 'utils'
import Home from '../Home'
import Categroy from '../Categroy'
import Product from '../Product'
import Role from '../Role'
import './style.css'

const { Content, Sider, Footer } = Layout;

export default class Admin extends Component {
  state = {
    collapsed: false
  }
  onCollapse = (collapsed) => {
    this.setState({
      collapsed,
    })
  }
  render() {
    console.log('-----',utils.judgeLoginExpired())
    if(utils.judgeLoginExpired()){
      return <Redirect to='/Login'></Redirect>
    }
    return (
      <Layout className="Home">
        <NULLHeader />
        <Layout>
          <Sider
            // 设置是否可收起左边导航栏
            collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
            >
              <LeftNavs></LeftNavs>
          </Sider>
          <Content style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '24px',flex: 1 }}>
              <Switch>
                <Route path='/Home' component={Home}></Route>
                <Route path='/Product/Categroy' component={Categroy}></Route>
                <Route path='/Product/Goods' component={Product}></Route>
                <Route path='/Role' component={Role}></Route>
                <Route path='/Charts/Bar' component={Role}></Route>
                <Route path='/Charts/Line' component={Role}></Route>
                <Route path='/Charts/Pie' component={Role}></Route>
                <Redirect to='/Home'></Redirect>
              </Switch>
            </div>
            <Footer>
              庄同学有限公司提供技术支持
            </Footer>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
