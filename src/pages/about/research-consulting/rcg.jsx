import React from "react";
import "./rcg.scss"
import Header from "../../../components/header/header";
import Foot from "../../../components/footer/foot/foot";
import Subscribe from "../../../components/footer/subscribe/subscribe";
import { WhatsAppOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function ResourceConsulting() {
    return (
        <>
            <Header></Header>
            <div className="rcg">
                <div className="rcg-headline"></div>
                <div className="rcg-content">
                    <div className="main-content">
                        <div className="main-content-tittle">
                            <div className="icon"></div>
                            <h2>IBLAM Research & Consulting Goup</h2>
                        </div>
                        <div className="main-content-image"></div>
                        <p>IBLAM Research and Consulting Group adalah lembaga think tank/ pusat penelitian untuk isu-isu hukum kontemporer yang berdampak pada kebijakan publik. Lebih dari hukum itu sendiri, IBLAM Research and Consulting Group fokus untuk membahas topik mengenai perkembangan dunia bisnis, teknologi dan konstitusi.</p>
                        <div className="main-content-highlight">
                            <b>Dalam metodologi penelitiannya, IBLAM Research and Consulting Group menggunakan pendekatan kepustakaan dan empiris yang berbasiskan teknologi Big Data dan Artificial Intelligence, sehingga mampu mendapatkan hasil observasi data empiris yang lebih akurat agar menghasilkan ketajaman analisis pada laporan akhirnya.</b>
                        </div>
                        <p>IBLAM Research and Consulting Group bekerja ke semua penjuru. Mulai dari mendampingi pemerintah untuk penyusunan Undang-undang, Peraturan Pemerintah, Peraturan Daerah dan ketentuan hukum lainnya yang berlaku sebagai kebijakan publik bagi masyarakat, serta mendampingi perusahaan dalam melakukan penelitian tentang kebijakan hukum yang berdampak pada aktivitas bisnisnya.</p>
                        <p>Dalam metodologi penelitiannya, IBLAM Research and Consulting Group menggunakan pendekatan kepustakaan dan empiris yang berbasiskan teknologi Big Data dan Artificial Intelligence, sehingga mampu mendapatkan hasil observasi data empiris yang lebih akurat agar menghasilkan ketajaman analisis pada laporan akhirnya.</p>
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