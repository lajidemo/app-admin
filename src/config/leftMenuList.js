const leftMenuList = [
  {
    key: '/Home',
    title: '首页',
    icon: 'UserOutlined',
  },{
    key: '/Product',
    title: '商品',
    icon: 'LaptopOutlined',
  },{
    key: '/Role',
    title: '角色',
    icon: 'NotificationOutlined',
  },{
    key: '/Categroy',
    title: '图表',
    icon: 'UserOutlined',
    children: [{
      key: '/Categroy/Bar',
      title: '柱状图',
      icon: 'UserOutlined',
    },{
      key: '/Categroy/Line',
      title: '折线图',
      icon: 'UserOutlined',
    },{
      key: '/Categroy/Pie',
      title: '饼图',
      icon: 'UserOutlined',
    }]
  }
]

export default leftMenuList