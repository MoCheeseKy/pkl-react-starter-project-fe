import React from "react";
import './graduates.scss'
import Header from "../../components/header/header";
import Subscribe from "../../components/footer/subscribe/subscribe";
import Foot from "../../components/footer/foot/foot";
import { WhatsAppOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function Graduates() {
    return (
        <>
            <Header></Header>
            <div className="graduates">

                {/* Headline . . . . */}
                <div className="headline graduates">

                </div>

                {/* Content . . . . */}
                <div className="content tab">
                    <div className="sider con">
                        <div className="tittle">
                            <div className="icon">

                            </div>
                            <div className="text">
                                Graduates
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
                        <div className="image about">

                        </div>
                        <div className="image-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aperiam sint voluptates quis officiis mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vel?
                        </div>
                        <button>Selengkapnya {">"}</button>
                    </div>
                </div>

                {/* Program . . . . */}
                <div className="program tab">
                    <Link to={'/graduates/s2'}>
                        <div className="program-item">
                            <div className="isi">
                                <div className="icon"></div>
                                <h1>Kurikulum S2</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/academic/pengajar'}>
                        <div className="program-item">
                            <div className="isi">
                                <div className="icon"></div>
                                <h1>Pengajar</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/admission/beasiswa'}>
                        <div className="program-item">
                            <div className="isi">
                                <h1>Beasiswa</h1>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* note : bagian ini hanya muncul di tampilan adroid */}
                <div className="help">
                    <h1>Butuh Bantuan ?</h1>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, repudiandae.</div>
                    <button><WhatsAppOutlined /> <div className="text">Kampus Jakarta</div></button>
                    <button><WhatsAppOutlined /> <div className="text">Kampus Depok</div></button>
                </div>

            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}