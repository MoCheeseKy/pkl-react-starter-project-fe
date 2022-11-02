import React from "react";
import './undergraduates.scss'
import Header from "../../components/header/header";
import Subscribe from "../../components/footer/subscribe/subscribe";
import Foot from "../../components/footer/foot/foot";
import { WhatsAppOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function Undergraduates() {
    return (
        <>
            <Header></Header>
            <div className="graduates">

                {/* Headline . . . . */}
                <div className="headline undergraduates">

                </div>

                {/* Content . . . . */}
                <div className="content">
                    <div className="sider">
                        <div className="tittle tab">
                            <div className="icon">

                            </div>
                            <div className="text">
                                Undergraduates
                            </div>
                        </div>
                        <div className="help">
                            <h1>Butuh Bantuan ?</h1>
                            <div className="text">Tim IBLAM siap menjawab kebutuhanmu</div>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Jakarta</div></button>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Depok</div></button>
                        </div>
                    </div>
                    <div className="about">
                        <div className="image">

                        </div>
                        <div className="image-desc">
                            Semua bisa jadi sarjana! IBLAM School of Law menyelenggarakan program pendidikan hukum yang komprehensif untuk para calon sarjana muda Indonesia.
                        </div>
                        <button>Selengkapnya {">"}</button>
                    </div>
                </div>

                {/* Program . . . . */}
                <div className="program tab">
                    <Link to={'/admission/beasiswa'}>
                        <div className="program-item s1reguler"></div>
                    </Link>
                    <Link to="/undergraduates/s1-reguler-karyawan">
                        <div className="program-item s1regulerKaryawan"></div>
                    </Link>
                    <Link to={'/undergraduates/s1'}>
                        <div className="program-item s1"></div>
                    </Link>
                    <Link to={'/admission/beasiswa'}>
                        <div className="program-item beasiswa andro-hide"></div>
                    </Link>
                    <Link to={'/academic/pengajar'}>
                        <div className="program-item pengajar andro-hide"></div>
                    </Link>
                    <Link to="/about/komunitas-mahasiswa">
                        <div className="program-item komunsiswa andro-hide"></div>
                    </Link>
                    <button>More</button>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}