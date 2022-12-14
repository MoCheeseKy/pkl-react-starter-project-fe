import React from "react";
import { Row } from "antd";
import { CheckOutlined } from '@ant-design/icons';
import { Input, DatePicker } from 'antd';
import axios from "axios";
import { useState } from "react";
import { Alert } from "antd";
import "./daftar.scss"

export default function Daftar() {

    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [asal_sekolah, setAsalSekolah] = useState('');
    const [tempat_lahir, setTempatLahir] = useState('');
    const [tanggal_lahir, setTanggalLahir] = useState('');
    // const [pengguna, setPengguna] = useState('')

    var token = localStorage.getItem('token')
    console.log(token)

    const postData = () => {
        axios.post(`https://1fe3-2001-448a-302b-150d-e5d1-541a-de2e-8e1d.ngrok.io/student-register/`, {
            nama,
            alamat,
            asal_sekolah,
            tempat_lahir,
            tanggal_lahir
        },
            {
                headers: {
                    'Authorization': "Token " + token
                }
            }
        ).then(<Alert message="Data berhasil di kirim, silahkan tunggu hasilnya !!!" type="success" />)
    }
    const getDate = (date, dateString) => {
        setTanggalLahir(dateString)
    };
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
                        <Input onChange={(e) => setNama(e.target.value)} className="input" size="large" placeholder="Masukan Nama...." />
                    </Row>
                    <Row>
                        <Input onChange={(e) => setAlamat(e.target.value)} className="input" size="large" placeholder="Alamat Pendaftar...." />
                    </Row>
                    <Row>
                        <DatePicker onChange={getDate} className="input" placeholder="Tanggal Lahir...." />
                    </Row>
                    <Row>
                        <Input onChange={(e) => setTempatLahir(e.target.value)} className="input" size="large" placeholder="Tempat Lahir...." />
                    </Row>
                    <Row>
                        <Input onChange={(e) => setAsalSekolah(e.target.value)} className="input" size="large" placeholder="Asal Sekolah...." />
                    </Row>
                    <button onClick={postData}>
                        Submit <CheckOutlined />
                    </button>
                </div>
            </div>
        </>
    )
}