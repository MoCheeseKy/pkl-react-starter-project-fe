import React from "react";
import './undergraduates.scss'
import Header from "../../components/header/header";
import Subscribe from "../../components/footer/subscribe/subscribe";
import Foot from "../../components/footer/foot/foot";
import { WhatsAppOutlined } from '@ant-design/icons';

export default function Undergraduates() {
    return (
        <>
            <Header></Header>
            <div className="graduates">

                {/* Headline . . . . */}
                <div className="headline">
                    <div className="image">

                    </div>
                    <div className="text">
                        Undergraduates
                    </div>
                </div>

                {/* Content . . . . */}
                <div className="content">
                    <div className="sider">
                        <div className="tittle">
                            <div className="icon">

                            </div>
                            <div className="text">
                                Undergraduates
                            </div>
                        </div>
                        <div className="help">
                            <h1>Butuh Bantuan ?</h1>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, repudiandae.</div>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Jakarta</div></button>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Depok</div></button>
                        </div>
                    </div>
                    <div className="about">
                        <div className="image">

                        </div>
                        <div className="image-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aperiam sint voluptates quis officiis mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vel?
                        </div>
                        <button>Selengkapnya ></button>
                    </div>
                </div>

                {/* Program . . . . */}
                <div className="program">
                    <div className="program-item">
                        <div className="isi">
                            <h1>S1 Reguler</h1>
                        </div>
                    </div>
                    <div className="program-item">
                        <div className="isi">
                            <h1>S1 Karyawan</h1>
                        </div>
                    </div>
                    <div className="program-item">
                        <div className="isi">
                            <h1>Kurikulum S1</h1>
                        </div>
                    </div>
                    <div className="program-item andro-hide">
                        <div className="isi">
                            <h1>Beasiswa</h1>
                        </div>
                    </div>
                    <div className="program-item andro-hide">
                        <div className="isi">
                            <h1>Pengajar</h1>
                        </div>
                    </div>
                    <div className="program-item andro-hide">
                        <div className="isi">
                            <h1>Komunitas Mahasiswa</h1>
                        </div>
                    </div>
                    <button>More</button>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}