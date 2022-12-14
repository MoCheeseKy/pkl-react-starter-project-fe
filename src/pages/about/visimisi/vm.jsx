import React from "react";
import "./vm.scss"
import Header from "../../../components/header/header";
import Foot from "../../../components/footer/foot/foot";
import Subscribe from "../../../components/footer/subscribe/subscribe";
import { WhatsAppOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function VisiMisi() {
    return (
        <>
            <Header></Header>
            <div className="page-visimisi">
                {/* Headline Handler . . . . */}
                <div className="headline"></div>
                <div className="content"></div>
                {/* Content Handler . . . . */}
                <div className="content asd">
                    <div className="visimisi">
                        <div className="tittle">
                            <div className="icon"></div>
                            <div className="text">
                                Visi dan Misi
                            </div>
                        </div>
                        <h2>Visi dan Misi Institusi</h2>
                        <div className="visi">
                            <h3>Visi :</h3>
                            <p>Menjadi Sekolah Tinggi Ilmu Hukum yang berintegritas, unggul di tingkat nasional dan berdaya saing global.</p>
                        </div>
                        <div className="misi">
                            <h3>Misi :</h3>
                            <ol>
                                <li>Meningkatkan dan mengembangkan nilai-nilai integritas; </li>
                                <li>Meningkatkan dan mengembangkan kualitas pendidikan, penelitian, serta pengabdian pada masyarakat;</li>
                                <li>Menyelenggarakan tata kelola yang baik, dilandasi semangat kredibel, akuntabel, tanggung jawab dan keadilan;</li>
                                <li>Membentuk lulusan yang unggul di bidang hukum dan berdaya saing global.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="sider">
                        <div className="help">
                            <h1>Butuh Bantuan ?</h1>
                            <div className="text">Tim IBLAM siap menjawab kebutuhanmu</div>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Jakarta</div></button>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Depok</div></button>
                        </div>
                        <Link to='/about/visi-misi'><div className="side-info visimisi"></div></Link>
                        <Link to='/about/iblam-campuss'><div className="side-info campuss"></div></Link>
                        <Link to='/about/kontak-kami'><div className="side-info contact"></div></Link>
                    </div>
                </div>
                <div className="help">
                    <h1>Butuh Bantuan ?</h1>
                    <div className="text">Tim IBLAM siap menjawab kebutuhanmu</div>
                    <button><WhatsAppOutlined /> <div className="text">Kampus Jakarta</div></button>
                    <button><WhatsAppOutlined /> <div className="text">Kampus Depok</div></button>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}