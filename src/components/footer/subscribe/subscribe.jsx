import React from 'react'
import './subscribe.scss'
import { Button, Form, Input } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function Subscribe() {
  return (
    <section>
        <div className="subscribe">
            <div className="subs-content">
                <div className="text-subs">
                    Dapatkan update terkini tentang IBLAM dalam inbox Anda
                </div>
                <Form>
                    <div className="input-subs">
                        <Input size='large' autoComplete='off' type="email" placeholder='Email_anda@gmail.com' name='email' />
                    </div>
                    <div className="btn-subs">
                        <Button ghost size='large'>Subscribe <ArrowRightOutlined /></Button>
                    </div>
                </Form>
            </div>
        </div>
    </section>
  )
}
