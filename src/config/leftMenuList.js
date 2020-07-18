const leftMenuList = [
  {
    key: '/Home',
    title: '首页',
    icon: 'UserOutlined',
  },{
    key: '/Product',
    title: '商品',
    icon: 'LaptopOutlined',
    children: [{
      key: '/Product/Categroy',
      title: '品类管理',
      icon: 'UserOutlined',
    },{
      key: '/Product/Goods',
      title: '商品管理',
      icon: 'UserOutlined',
    }]
  },{
    key: '/Role',
    title: '角色',
    icon: 'NotificationOutlined',
  },{
    key: '/Charts',
    title: '图表',
    icon: 'UserOutlined',
    children: [{
      key: '/Charts/Bar',
      title: '柱状图',
      icon: 'UserOutlined',
    },{
      key: '/Charts/Line',
      title: '折线图',
      icon: 'UserOutlined',
    },{
      key: '/Charts/Pie',
      title: '饼图',
      icon: 'UserOutlined',
    }]
  }
]

export default leftMenuList