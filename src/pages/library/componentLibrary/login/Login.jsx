import React from 'react'
import Head from '../../../../components/headlib/head'
import Foot from '../../../../components/footlib/foot'
import { Divider, Button, Checkbox, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import './Login.scss'

export default function Login() {
  const onFinish = (values) => {
    console.log('Success:', values);
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
            <Input size='large' />
            <h3><b>Kata Sandi</b></h3>
            <Input.Password size='large' />
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
