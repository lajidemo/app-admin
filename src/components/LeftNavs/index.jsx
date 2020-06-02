import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import * as Icon from '@ant-design/icons';
import leftMenuList from 'config/leftMenuList'

const { SubMenu, Item } = Menu;

export default class LeftNavs extends Component {
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
  render() {
    return (
      <Menu
        mode="inline"
        theme="dark"
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {
          this.flatMenuList(leftMenuList)
        }
      </Menu>
    )
  }
}
