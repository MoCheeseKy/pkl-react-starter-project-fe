import React from "react";
import "./kontak.scss"
import Header from "../../../components/header/header";
import Foot from "../../../components/footer/foot/foot";
import Subscribe from "../../../components/footer/subscribe/subscribe";

import { useState } from "react";
import { Alert } from "antd";
import axios from "axios";

export default function Kontak() {

    const [nama_lengkap, setNama] = useState('');
    const [user_email, setEmail] = useState('');
    const [no_hp, setNoHP] = useState('');
    const [subject, setSubject] = useState('');
    const [user_msg, setMessage] = useState('');

    var token = localStorage.getItem('token')
    console.log(token)

    const postData = () => {
        axios.post(`https://1fe3-2001-448a-302b-150d-e5d1-541a-de2e-8e1d.ngrok.io/formulir`, {
            nama_lengkap,
            user_email,
            no_hp,
            subject,
            user_msg
        },
            {
                headers: {
                    'Authorization': "Token " + token
                }
            }
        ).then(<Alert message="Data berhasil di kirim, silahkan tunggu hasilnya !!!" type="success" />)
    }
    return (
        <>
            <Header></Header>
            <div className="kontak">
                <div className="kontak-headline">
                    <h1>Kontak</h1>
                </div>
                <div className="kontak-tittle">
                    <div className="icon"></div>
                    <h2>Kontak Kami</h2>
                </div>
                <div className="kontak-content">
                    <div className="kontak-content-item">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126907.60746524946!2d106.7530177!3d-6.2817698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f449bc26bf09%3A0x3dabae99a930c057!2sSTIH%20IBLAM!5e0!3m2!1sid!2sid!4v1666942758843!5m2!1sid!2sid" title="jakarta"></iframe>
                        <h4>Kampus A (Jakarta)</h4>
                        <p>Jl. Kramat Raya No. 25, Jakarta Pusat, Indonesia</p>
                        <p>Telepon. +62 21 2139 2851</p>
                        <p>Handphone/WhatsApp. +62852-1557-6002</p>
                        <p>Email. info@iblam.ac.id</p>
                    </div>
                    <div className="kontak-content-item">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7930.203544748152!2d106.80161!3d-6.3808632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eeb2d5fbadf3%3A0x75547f606f1fca28!2sSTIH%20IBLAM%20(Kampus%20A%20Depok)!5e0!3m2!1sid!2sid!4v1666943353836!5m2!1sid!2sid" title="depok"></iframe>
                        <h4>Kampus B (Depok)</h4>
                        <p>Jl. Raden Sanim No. 99 Tanah Baru, Kec. Beji, Depok, Indonesia</p>
                        <p>Telepon. +62 21 776 4310</p>
                        <p>Fax. +62 21 776 2969</p>
                    </div>
                </div>
                <div className="kontak-input tab">
                    <h3>Isi formulir ini dan kami akan menghubungi Anda lebih lanjut.</h3>
                    <input onChange={(e) => setNama(e.target.value)} placeholder="Masukan Nama lengkap . . . ." type="text" />
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Masukan Email . . . ." type="text" />
                    <input onChange={(e) => setNoHP(e.target.value)} placeholder="Masukan No HP . . . ." type="text" />
                    <input onChange={(e) => setSubject(e.target.value)} placeholder="Input Subject . . . ." type="text" />
                    <textarea onChange={(e) => setMessage(e.target.value)} placeholder="input Pesan . . . ."></textarea>
                    <button onClick={postData}>Kirim !</button>
                </div>

            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}