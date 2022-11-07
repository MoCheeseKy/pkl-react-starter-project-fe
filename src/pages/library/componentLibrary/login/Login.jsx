import React, {useState} from 'react'
import Head from '../../../../components/headlib/head'
import Foot from '../../../../components/footlib/foot'
import { Divider, Button, Checkbox, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.scss'

export default function Login() {
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
    axios.post("https://1fe3-2001-448a-302b-150d-e5d1-541a-de2e-8e1d.ngrok.io/login-gate", values).then((res) => {
      const resData = res?.data;
      localStorage.setItem('token', resData?.token);
      localStorage.setItem('login', true)
      localStorage.setItem('username', values.username)

      navigate('/')
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='loglib'>
      <Head/>
      <div className="container">
        <h2>Masuk Otomasi Perpustakaan | IBLAM Library</h2>
        <Divider/>
        <div className="login-form">
          <Form name="log" initialValues={{remember: true,}} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <h3><b>Nama Akun</b></h3>
            <Input size='large' onChange={handlechange} />
            <h3><b>Kata Sandi</b></h3>
            <Input.Password size='large' onChange={handlechange} />
            <Checkbox>Ingat saya</Checkbox><br /><br />
            <div className="row">
              <Button type="primary" htmlType="submit">
                Masuk
              </Button>
              <Link>Lupa kata sandi</Link>
            </div>
          </Form>
        </div>
      </div>
      <Foot/>
    </div>
  )
}
