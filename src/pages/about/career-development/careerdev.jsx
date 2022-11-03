import React from "react";
import "./careerdev.scss"
import Header from "../../../components/header/header";
import Foot from "../../../components/footer/foot/foot";
import Subscribe from "../../../components/footer/subscribe/subscribe";
import { WhatsAppOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function CareerDevelopment() {
    return (
        <>
            <Header></Header>
            <div className="careerdev">
                <div className="careerdev-headline"></div>
                <div className="careerdev-content">
                    <div className="main-content">
                        <div className="main-content-tittle">
                            <div className="icon"></div>
                            <h2>Iblam Career Development Center</h2>
                        </div>
                        <div className="main-content-image"></div>
                        <div className="main-content-highlight">
                            <b>IBLAM School of Law menyediakan IBLAM Career and Development Center untuk menjadi tempat bimbingan, pelatihan, dan penyaluran tenaga kerja ke industri.</b>
                        </div>
                        <p>IBLAM School of Law akan membantumu dalam mencapai tujuan dengan staf, program, dan sumber daya kelas satu.</p>
                        <p>Terlepas dari kegiatan pembelajaran sehari-hari di dalam kelas, IBLAM School of Law menyediakan IBLAM Career and Development Center untuk menjadi tempat bimbingan, pelatihan, dan penyaluran tenaga kerja ke industri.</p>
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