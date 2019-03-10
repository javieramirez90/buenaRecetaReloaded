import React from 'react'; 
import { NavLink} from 'react-router-dom'

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const Navbar = (props) => {
  console.log(props)
  return(
    <Header className="theNav">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
        <Menu.Item key="1"><NavLink to="/signup">Regístrate</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to="/login">Inicia Sesión</NavLink></Menu.Item>
      </Menu>
    </Header>
  )
}

export default Navbar