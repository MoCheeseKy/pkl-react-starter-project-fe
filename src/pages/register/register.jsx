import { Button, Form, Input, Space, } from 'antd';
import axios from 'axios';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.scss'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 15,
    },
    sm: {
      span: 7,
    },
  },
  wrapperCol: {
    xs: {
      span: 15,
    },
    sm: {
      span: 10,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 15,
      offset: 0,
    },
    sm: {
      span: 7,
      offset: 7,
    },
  },
};
const Register = () => {
  const [payloadLogin, setPayloadLogin] = useState({});
  const handlechange = (e) => {
    setPayloadLogin({
        ...payloadLogin,
        [e.target.name]: e.target.value
    });
  };
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    axios.post("https://bf87-2001-448a-302e-3eba-30a8-6232-ffb7-6c9c.ngrok.io/User-Register/", values).then((res) =>{
      navigate('/')
    })
  };
  return (
      <div className="Register">
          <center><h3>Register</h3></center>
          <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
              autoComplete='off'
          >
              <Form.Item
              name="username"
              label="Username"
              rules={[
                  {
                  required: true,
                  message: 'Please input your username!',
                  whitespace: true,
                  },
              ]}
              >
              <Input onChange={handlechange} />
              </Form.Item>
              <Form.Item
              name="email"
              label="E-mail"
              rules={[
                  {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                  },
                  {
                  required: true,
                  message: 'Please input your E-mail!',
                  },
              ]}
              >
              <Input onChange={handlechange} />
              </Form.Item>
      
              <Form.Item
              name="password"
              label="Password"
              rules={[
                  {
                  required: true,
                  message: 'Please input your password!',
                  },
              ]}
              hasFeedback
              >
              <Input.Password onChange={handlechange} />
              </Form.Item>
      
              <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                  {
                  required: true,
                  message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                  validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                  }),
              ]}
              >
              <Input.Password onChange={handlechange} />
              </Form.Item>
      
              <Form.Item {...tailFormItemLayout}>
              <Space direction='vertical'>
              <Button type="primary" htmlType="submit">
                  Register
              </Button>
              Have an accout ?
              <Link to={`/login`}>
                  Login!
              </Link>
              </Space>
              </Form.Item>
          </Form>
    </div>
  );
};
export default Register;