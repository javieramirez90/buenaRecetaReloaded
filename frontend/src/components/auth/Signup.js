import React, { Component } from 'react'
import axios from 'axios'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Form, Icon, Input, Button, PageHeader } from 'antd'

class NormalSignupForm extends Component {

  state = {
    user : {},
    errors: {},
    auth: {}
  }


  handleChange = e => {
    let { user, errors } = this.state
    user[e.target.name] = e.target.value
    errors = {}
    
    if (user.password !== user.password2) errors.password = "Las contraseñas no coinciden"
    this.setState({ user, errors })
    console.log(user)
}

  sendToServer = e => {
    e.preventDefault();
    let url = "http://localhost:3000/signup"
    let {user} = this.state
    axios.post(url, user) //, {withCredentials: true}
    .then(data => {
      console.log(data)
      this.props.history.push('/login')
    })
    .catch(e => console.log(e))
  }

  render() {
    const { errors } = this.state
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.sendToServer} className="login-form">
      <PageHeader title="Regístrate"/> 
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Por favor, introduce un nombre de usuario!' }],
          })(
            <Input name="username" onChange={this.handleChange} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre de usuario" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Por favor, introduce tu correo electrónico' }],
          })(
            <Input name="email" onChange={this.handleChange} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Por favor, introduce una contraseña' }],
          })(
            <Input name="password" onChange={this.handleChange} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña"  />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password2', {
            rules: [{ required: true, message: 'Por favor, introduce de nuevo tu contraseña' }],
          })(
            <Input name="password2" onChange={this.handleChange} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  type="password" placeholder="Repite tu contraseña" />,
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Regístrate
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalSignupForm = Form.create({ name: 'normal_login' })(NormalSignupForm);

export default WrappedNormalSignupForm



