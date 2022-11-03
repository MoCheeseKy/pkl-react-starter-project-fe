import React from "react";
import "./bkh.scss"
import Header from "../../../components/header/header";
import Foot from "../../../components/footer/foot/foot";
import Subscribe from "../../../components/footer/subscribe/subscribe";

export default function BantuanKlinikhukum() {
    return (
        <>
            <Header></Header>
            <div className="bantuan-klinik-hukum">
                <div className="bkh-headline">
                </div>
                <div className="bkh-tittle">
                    <div className="icon"></div>
                    <h2>Klinik Bantuan Hukum</h2>
                </div>
                <div className="bkh-content">
                    <div className="bkh-content-image"></div>
                    <p>Kami harap Anda tidak pernah terlibat masalah hukum dan sampai di halaman ini. Meskipun, seperti yang kita ketahui, hukum bersinggungan erat dengan kehidupan dan ada di setiap kegiatan, setiap hari.</p>
                    <p>Selagi Anda sudah di sini, kemungkinan Anda sedang mencari pengetahuan lebih tentang masalah hukum atau (semoga tidak) terlibat masalah hukum. IBLAM School of Law menyediakan Klinik Bantuan Hukum untuk membantu mencari solusi tepat untuk permasalahan hukum Anda. Dengan tim yang solid dan terdiri dari dosen, peneliti, mahasiswa, dan penegak hukum, dapatkan jawaban yang tepat untuk permasalahan hukum Anda di sini.</p>
                    <p>Butuh bantuan hukum? Kirim email Anda ke lkbh@iblam.ac.id</p>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}