import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Form, Icon, Input, Button, PageHeader } from 'antd' //Checkbox


class NormalLoginForm extends Component {

  state = {
    auth: {},
    user: {}
  }

  componentDidMount(){
    console.log(this.props)
  }
  
  handleChange = e => {
    let { auth } = this.state
    auth[e.target.name] = e.target.value
    console.log(auth)
    this.setState({ auth })
  }

  sendToServer = e => {
    e.preventDefault();
    let url = "http://localhost:3000/login"
    let {auth} = this.state
    console.log(auth)
    axios.post(url, auth, {withCredentials: true})
    .then(data => {
      console.log("The data I send", data)
      this.props.catched(data)
      this.props.history.push('/profile')
    })
    .catch(e => console.log(e))
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.sendToServer} className="login-form">
        <PageHeader title="Iniciar sesión"/> 
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input onChange={this.handleChange} name="email" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input onChange={this.handleChange} name="password" prefix={<Icon type="lock"  style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"  />
          )}
        </Form.Item>
        <Form.Item> 
          {/* <a className="login-form-forgot" href="">Forgot password</a> */}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Iniciar sesión
          </Button>
          O <NavLink to="/signup">regístrate con nosotros</NavLink>
           {/* <a href="/signup">register now!</a> */}
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm



