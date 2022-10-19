import { Button, Form, Input, } from 'antd';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss'
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [payloadLogin, setPayloadLogin] = useState({});
  const handlechange = (e) => {
    setPayloadLogin({
        ...payloadLogin,
        [e.target.name]: e.target.value
    });
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    axios.post("https://bf87-2001-448a-302e-3eba-30a8-6232-ffb7-6c9c.ngrok.io/login-gate/", values).then((res) => {
        const resData = res?.data;
        localStorage.setItem('token', resData?.token);

        navigate('/')
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="Login">
        <div className="title">
          <center><h3>Login</h3></center>
        </div>
        <Form
        name="normal_login"
        className="login-form"
        labelCol={{
            span: 7,
        }}
        wrapperCol={{
            span: 10,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            label="Username"
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
            ]}
        >
            <Input placeholder='Username' onChange={handlechange} />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password placeholder='Password' onChange={handlechange} />
        </Form.Item>

        <Form.Item
            wrapperCol={{
              xs: {
                span: 15,
                offset: 0
              },
              sm: {
                span: 8,
                offset: 8,
              },
            }}
        >
            <Button type="primary" htmlType="submit" className="login-form-button btn-log">
              Log in
            </Button>
            <div className="reg">
              Don't have an account ? &nbsp;
              <Link to={`/register`}>
                  Register !
              </Link>
            </div>
        </Form.Item>
        </Form>
    </div>
  );
};
export default Login;