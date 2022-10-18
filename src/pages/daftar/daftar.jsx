import React from "react";
import { Row } from "antd";
import { CheckOutlined } from '@ant-design/icons';
import { Input, DatePicker } from 'antd';
import "./daftar.scss"

export default function Daftar() {
    return (
        <>
            <div className="daftar">
                <div className="sider">

                </div>
                <div className="form">
                    <div className="text">
                        Form Pendaftaran
                    </div>

                    <Row>
                        <Input className="input" size="large" placeholder="Masukan Nama...." />
                    </Row>
                    <Row>
                        <Input className="input" size="large" placeholder="Alamat Pendaftar...." />
                    </Row>
                    <Row>
                        <DatePicker className="input" placeholder="Tanggal Lahir...." />
                    </Row>
                    <Row>
                        <Input className="input" size="large" placeholder="Tempat Lahir...." />
                    </Row>
                    <Row>
                        <Input className="input" size="large" placeholder="Asal Sekolah...." />
                    </Row>
                    <button>
                        Submit <CheckOutlined />
                    </button>
                </div>
            </div>
        </>
    )
}