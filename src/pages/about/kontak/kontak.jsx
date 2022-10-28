import React from "react";
import "./kontak.scss"
import Header from "../../../components/header/header";
import Foot from "../../../components/footer/foot/foot";
import Subscribe from "../../../components/footer/subscribe/subscribe";
// import { Link } from "react-router-dom";

export default function Kontak() {
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126907.60746524946!2d106.7530177!3d-6.2817698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f449bc26bf09%3A0x3dabae99a930c057!2sSTIH%20IBLAM!5e0!3m2!1sid!2sid!4v1666942758843!5m2!1sid!2sid"></iframe>
                        <h4>Kampus A (Jakarta)</h4>
                        <p>Jl. Kramat Raya No. 25, Jakarta Pusat, Indonesia</p>
                        <p>Telepon. +62 21 2139 2851</p>
                        <p>Handphone/WhatsApp. +62852-1557-6002</p>
                        <p>Email. info@iblam.ac.id</p>
                    </div>
                    <div className="kontak-content-item">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7930.203544748152!2d106.80161!3d-6.3808632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eeb2d5fbadf3%3A0x75547f606f1fca28!2sSTIH%20IBLAM%20(Kampus%20A%20Depok)!5e0!3m2!1sid!2sid!4v1666943353836!5m2!1sid!2sid"></iframe>
                        <h4>Kampus B (Depok)</h4>
                        <p>Jl. Raden Sanim No. 99 Tanah Baru, Kec. Beji, Depok, Indonesia</p>
                        <p>Telepon. +62 21 776 4310</p>
                        <p>Fax. +62 21 776 2969</p>
                    </div>
                </div>
                <div className="kontak-input tab">
                    <h3>Isi formulir ini dan kami akan menghubungi Anda lebih lanjut.</h3>
                    <input placeholder="Masukan Nama . . . ." type="text" />
                    <input placeholder="Masukan Email . . . ." type="text" />
                    <input placeholder="Masukan No HP . . . ." type="text" />
                    <input placeholder="Input Subject . . . ." type="text" />
                    <textarea placeholder="input Pesan . . . ."></textarea>
                    <button>Kirim !</button>
                </div>

            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}