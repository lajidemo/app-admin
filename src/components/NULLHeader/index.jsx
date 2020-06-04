import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Layout,Modal} from 'antd'
import utils from 'utils'
import './style.less'

const {Header} = Layout

class NULLHeader extends Component {
  signOut = () => {
    Modal.confirm({
      title: '你确定要退出登录吗?',
      cancelText: '取消',
      okText: '退出',
      onOk: () => {
        utils.signOut()
        this.props.history.replace('/login')
      },
    });
  }
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <span onClick={this.signOut}>退出</span>
      </Header>
    )
  }
}

export default withRouter(NULLHeader)