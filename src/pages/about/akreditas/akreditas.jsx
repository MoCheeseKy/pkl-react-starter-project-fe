import React from "react";
import "./akreditas.scss"
import Header from "../../../components/header/header";
import Foot from "../../../components/footer/foot/foot";
import Subscribe from "../../../components/footer/subscribe/subscribe";
import { WhatsAppOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function Akreditas() {
    return (
        <>
            <Header></Header>
            <div className="akreditas">
                <div className="akreditas-headline"> </div>
                <div className="akreditas-content">
                    <div className="main-content">
                        <div className="main-content-tittle">
                            <div className="icon"></div>
                            <h2>Akreditasi</h2>
                        </div>
                        <p>IBLAM School of Law secara penuh berkomitmen untuk memberikan pendidikan yang berkualitas bagi para mahasiswa. Untuk itu, upaya peningkatan mutu pendidikan selalu dievaluasi secara rutin dan diperbaharui sesuai dengan perkembangan zaman dan teknologi. </p>
                        <p>Sistem pendidikan di IBLAM School of Law telah melalui proses penjaminan kualitas oleh Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) dan telah memenuhi standar kriteria evaluasi (Standar Pendidikan Tinggi) di level nasional.</p>
                        <div className="download-box">
                            <div className="download-box-image"></div>
                            <div className="download-box-text">
                                <h3>Sertifikan Akredirasi Kampus Iblam</h3>
                                <Link to='https://iblam.ac.id/wp-content/uploads/2020/07/Sertifikat-Akreditasi.pdf'><button>Download</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="side-content">
                        <div className="help">
                            <h2>Butuh Bantuan ?</h2>
                            <div className="text">Tim IBLAM siap menjawab kebutuhanmu</div>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Jakarta</div></button>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Depok</div></button>
                        </div>
                        <div className="side-content-nav">
                            <Link to='/about/visi-misi'><div className="side-content-nav-item visimisi"></div></Link>
                            <Link to='/about/iblam-campuss'><div className="side-content-nav-item campuss"></div></Link>
                            <Link to='/about/kontak-kami'><div className="side-content-nav-item contact"></div></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}