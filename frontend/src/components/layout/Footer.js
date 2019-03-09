import React from 'react'; 
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Layout } from 'antd';
const { Footer } = Layout;

const Foooter = () => {
  return (
    <Footer className="theFooter" style={{ textAlign: 'center' }}>
        Buena Receta ©2019 Created by XavierDev
      </Footer>
  )
}

export default Foooter