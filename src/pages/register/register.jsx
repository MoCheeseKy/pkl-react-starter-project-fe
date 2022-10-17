import {
    Button,
    Form,
    Input,
    Select,
} from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const { Option } = Select;
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
const App = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    navigate('/');
  };
  return (
      <div className="Register">
          <center><h1>Register</h1></center>
          <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
          >
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
      
              <Form.Item
              name="nickname"
              label="Nickname"
              rules={[
                  {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true,
                  },
              ]}
              >
              <Input />
              </Form.Item>
              <Form.Item
              name="gender"
              label="Gender"
              rules={[
                  {
                  required: true,
                  message: 'Please select gender!',
                  },
              ]}
              >
              <Select placeholder="select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
              </Select>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                  Register
              </Button><br />
              Have an accout ?
              <Link to={`/login`}>
                  Login!
              </Link>
              </Form.Item>
          </Form>
    </div>
  );
};
export default App;