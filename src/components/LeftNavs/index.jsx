import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import { Menu } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import * as Icon from '@ant-design/icons';
import leftMenuList from 'config/leftMenuList'

const { SubMenu, Item } = Menu;

class LeftNavs extends Component {
  flatMenuList = (menuList) => {
    return menuList.map(item => {
      if(!item.children){
        return (
          <Item key={item.key} icon={React.createElement(
            Icon[item.icon],
          )} title={item.title}>
            <Link to={item.key}>
              {item.title}
            </Link>
          </Item>
        )
      }else{
        return (
          <SubMenu key={item.key} icon={React.createElement(
            Icon[item.icon],
          )} title={item.title}>
            {
              this.flatMenuList(item.children)
            }
          </SubMenu>
        )
      }
    })
  }
  getDefaultOpenKeys = (selectedKeys) => {
    let openKeys = ''
    leftMenuList.forEach((el) => {
      if(!el.children){
        if(el.key === selectedKeys){
          openKeys = el.key
        }
      }else{
        el.children.forEach(ele => {
          if(ele.key === selectedKeys){
            openKeys = el.key
          }
        })
      }
    })
    console.log('openKeys===',openKeys)
    return openKeys
  }
  componentDidMount(){

  }
  render() {
    console.log('LeftNavs.this.props==== ', this.props);
    const selectedKeys = this.props.location.pathname
    const openKeys = this.getDefaultOpenKeys(selectedKeys)
    return (
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[selectedKeys]}
        defaultOpenKeys={[openKeys]}
        style={{ height: '100%', borderRight: 0 }}
      >
        {
          this.flatMenuList(leftMenuList)
        }
      </Menu>
    )
  }
}

export default withRouter(LeftNavs)