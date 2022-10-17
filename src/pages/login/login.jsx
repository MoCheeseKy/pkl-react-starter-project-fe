import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="Login">
        <center>
            <h1>Login</h1>
        </center>
        <Form
        name="basic"
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
            <Input />
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
            <Input.Password />
        </Form.Item>

        <Form.Item
            wrapperCol={{
              xs: {
                span: 15,
                offset: 0
              },
              sm: {
                span: 7,
                offset: 7,
              },
            }}
        >
            <Button type="primary" htmlType="submit" className="login-form-button">
                <Link to={`/`}>
                    Log in
                </Link>
            </Button><br />
            Don't have an account ? 
            <Link to={`/register`}>
                register now!
            </Link>
        </Form.Item>
        </Form>
    </div>
  );
};
export default Login;