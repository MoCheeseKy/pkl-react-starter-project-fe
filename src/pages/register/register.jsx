import { Button, Form, Input, Alert, } from 'antd';
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
      span: 8,
      offset: 8,
    },
  },
};
const Register = () => {
  const login = localStorage.getItem('login')
  var formAble
  if (login === "true") {
    formAble = true
  } else{
    formAble = false
  }
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
    axios.post("https://7d2f-180-244-137-26.ngrok.io/User-Register/", values).then((res) =>{
      alert("Now you can login with your account")
      navigate('/login')
    })
  };
  return (
      <div className="Register">
        <div className="title">
          <center>
            <h3>Register</h3>
            <div hidden={!formAble} className="alert-msg">
              <Alert message="Kamu sudah login, harap kembali ke homepage" type='error' />
            </div>
          </center>
        </div>
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            disabled={formAble}
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
            <Button className='btn-reg' type="primary" htmlType="submit">
                Register
            </Button>
              <div hidden={formAble} className="log">
              Have an account ?&nbsp;
              <Link to={`/login`}>
                  Login!
              </Link>
            </div>
            </Form.Item>
        </Form>
    </div>
  );
};
export default Register;