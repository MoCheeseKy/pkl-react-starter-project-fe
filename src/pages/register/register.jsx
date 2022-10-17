import {
    Button,
    Form,
    Input,
} from 'antd';
import React from 'react';
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
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    navigate('/');
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
              <Input />
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
              <Input />
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
              <Input.Password />
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
              <Input.Password />
              </Form.Item>
      
              <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                  Register
              </Button><br />
              Have an accout ?&nbsp;&nbsp;
              <Link to={`/login`}>
                  Login!
              </Link>
              </Form.Item>
          </Form>
    </div>
  );
};
export default Register;