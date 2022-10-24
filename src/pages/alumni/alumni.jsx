import React from "react";
import './alumni.scss'
import Header from "../../components/header/header";
import Foot from "../../components/footer/foot/foot";
import Subscribe from "../../components/footer/subscribe/subscribe";
import { WhatsAppOutlined } from '@ant-design/icons';


export default function Alumni() {
    return (
        <>
            <Header></Header>
            <div className="alumni">
                {/* Headline Handler . . . . */}
                <div className="headline">

                    <h1>Komunitas Alumni</h1>

                </div>
                <div className="content">

                </div>

                {/* Content Handler . . . . */}
                <div className="content">
                    <div className="community">
                        <div className="tittle">
                            <div className="icon">

                            </div>
                            <div className="text">
                                Komunitas Alumni
                            </div>
                        </div>
                        <div className="text">
                            Sebagai institusi pendidikan yang berintegrasi , IBLAM School of Law senantiasa melahirkan para alumni yang berada di garda depan penerapan hukum di Indonesia.
                        </div>
                        <div className="quote">
                            Alumni IBLAM saat ini juga ambil bagian sebagai motor pembangunan bangsa dan negara Indonesia dan siap membawa IBLAM School of Law sebagai bagian dari komunitas global di 2020.
                        </div>
                        <div className="text">
                            Alumni IBLAM saat ini juga ambil bagian sebagai motor pembangunan bangsa dan negara Indonesia dan siap membawa IBLAM School of Law sebagai bagian dari komunitas global di 2020. Untuk mewujudkan itu, Komunitas Alumni IBLAM menyiapkan jejaring untuk menjembatani kegiatan para alumni dengan almamaternya.
                        </div>
                    </div>
                    <div className="sider">
                        <div className="help">
                            <h1>Butuh Bantuan ?</h1>
                            <div className="text">Tim IBLAM siap menjawab kebutuhanmu</div>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Jakarta</div></button>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Depok</div></button>
                        </div>
                        <div className="career">
                            <h1>Karir</h1>
                        </div>
                    </div>
                </div>

                {/* Alumni Preview Handler . . . . */}
                <div className="notable-alumnus">
                    <button>Alumnus Notable</button>
                    <div className="alumnus-list">
                        <div className="alumnus-item">
                            <div className="alumnus-image">

                            </div>
                            <div className="alumnus-name">
                                Nikita Willy, SH.
                            </div>
                        </div>
                        <div className="alumnus-item">
                            <div className="alumnus-image">

                            </div>
                            <div className="alumnus-name">
                                Zulkarnain SH., MH.
                            </div>
                        </div>
                        <div className="alumnus-item">
                            <div className="alumnus-image">

                            </div>
                            <div className="alumnus-name">
                                Desmon J Mahesa SH., MH.
                            </div>
                        </div>
                        <div className="alumnus-item">
                            <div className="alumnus-image">

                            </div>
                            <div className="alumnus-name">
                                Hutomo Mandala Putra, SH.
                            </div>
                        </div>
                        <div className="alumnus-item">
                            <div className="alumnus-image">

                            </div>
                            <div className="alumnus-name">
                                Whulandary Herman, SH.
                            </div>
                        </div>
                        <div className="alumnus-item">
                            <div className="alumnus-image">

                            </div>
                            <div className="alumnus-name">
                                Dr. Anwar Usman SH., MH.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}