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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia porro et commodi id culpa maiores asperiores tenetur ab est earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, commodi.
                        </div>
                        <div className="quote">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore velit ut, reprehenderit maiores odit doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, sapiente!
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis asperiores autem ea id illum, aperiam, non ab similique alias temporibus ipsum eius accusantium labore culpa doloremque distinctio! Hic deleniti aut voluptatum, eveniet a doloribus, enim reiciendis repudiandae fuga dignissimos tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto nesciunt amet itaque culpa sint minima maxime aut ut qui.
                        </div>
                    </div>
                    <div className="sider">
                        <div className="help">
                            <h1>Butuh Bantuan ?</h1>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, repudiandae.</div>
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