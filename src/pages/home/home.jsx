import React from "react";
import "./newsEvent.scss"

import Header from "../../components/header/header";
import Subscribe from "../../components/footer/subscribe/subscribe";
import Foot from "../../components/footer/foot/foot";
import { Link } from "react-router-dom";

import { SwapRightOutlined } from '@ant-design/icons';
// import { Carousel, Divider } from 'antd';

export default function Home() {
    return (
        <main>
            <Header />



            {/* ============================================================== */}
            {/* ==================== Bagian News && Event ==================== */}
            {/* ============================================================== */}
            <div className="newsEvent">
                <div className="newsEvent-header">
                    <div className="newsEvent-headline">
                        <div className="icon"></div>
                        <h2>Berita Dan Event Terkini</h2>
                    </div>
                    <Link to='/news-event'><button>Lihat Semua <SwapRightOutlined></SwapRightOutlined> </button></Link>
                </div>
                <div className="newsEvent-content">

                    {/* Mapping Start */}

                    <div className="newsEvent-content-item">
                        <div className="newsEvent-image">
                            <div className="newsEvent-subtittle">
                                <div className="icon"></div>
                                <h5>news and event</h5>
                            </div>
                            <div className="newsEvent-subject">
                                <p>Ceremony Penandatanganan Memorandum of Understanding (MoU) dan Memorandum of Agreement (MoA) Sekolah Tinggi Ilmu Hukum IBLAM dengan Komisi Pemilihan Umum Kota Administrasi Jakarta Timur</p>
                            </div>
                        </div>
                        <div className="newsEvent-subtittle">
                            <div className="icon"></div>
                            <h5>news and event</h5>
                        </div>
                        <div className="newsEvent-subject">
                            <p>Ceremony Penandatanganan Memorandum of Understanding (MoU) dan Memorandum of Agreement (MoA) Sekolah Tinggi Ilmu Hukum IBLAM dengan Badan Pengawasan Pemilu Kota Administrasi Jakarta Timur</p>
                            <div className="place-date-time">Jakarta, 25 Mei 2022 - Sekolah Tinggi Ilmu Hukum IBLAM (STIH IBLAM) mengunjungi kantor Badan Pengawas P...</div>
                        </div>
                        <Link to='/news-event'><button>show more</button></Link>
                    </div>

                    <div className="newsEvent-content-item">
                        <div className="newsEvent-image">
                            <div className="newsEvent-subtittle">
                                <div className="icon"></div>
                                <h5>news and event</h5>
                            </div>
                            <div className="newsEvent-subject">
                                <p>Ceremony Penandatanganan Memorandum of Understanding (MoU) dan Memorandum of Agreement (MoA) Sekolah Tinggi Ilmu Hukum IBLAM dengan Komisi Pemilihan Umum Kota Administrasi Jakarta Timur</p>
                            </div>
                        </div>
                        <div className="newsEvent-subtittle">
                            <div className="icon"></div>
                            <h5>news and event</h5>
                        </div>
                        <div className="newsEvent-subject">
                            <p>Ceremony Penandatanganan Memorandum of Understanding (MoU) dan Memorandum of Agreement (MoA) Sekolah Tinggi Ilmu Hukum IBLAM dengan Badan Pengawasan Pemilu Kota Administrasi Jakarta Timur</p>
                            <div className="place-date-time">Jakarta, 25 Mei 2022 - Sekolah Tinggi Ilmu Hukum IBLAM (STIH IBLAM) mengunjungi kantor Badan Pengawas P...</div>
                        </div>
                        <Link className="showing"><button>show more</button></Link>
                    </div>


                    <div className="newsEvent-content-item">
                        <div className="newsEvent-image">
                            <div className="newsEvent-subtittle">
                                <div className="icon"></div>
                                <h5>news and event</h5>
                            </div>
                            <div className="newsEvent-subject">
                                <p>Ceremony Penandatanganan Memorandum of Understanding (MoU) dan Memorandum of Agreement (MoA) Sekolah Tinggi Ilmu Hukum IBLAM dengan Komisi Pemilihan Umum Kota Administrasi Jakarta Timur</p>
                            </div>
                        </div>
                        <div className="newsEvent-subtittle">
                            <div className="icon"></div>
                            <h5>news and event</h5>
                        </div>
                        <div className="newsEvent-subject">
                            <p>Ceremony Penandatanganan Memorandum of Understanding (MoU) dan Memorandum of Agreement (MoA) Sekolah Tinggi Ilmu Hukum IBLAM dengan Badan Pengawasan Pemilu Kota Administrasi Jakarta Timur</p>
                            <div className="place-date-time">Jakarta, 25 Mei 2022 - Sekolah Tinggi Ilmu Hukum IBLAM (STIH IBLAM) mengunjungi kantor Badan Pengawas P...</div>
                        </div>
                        <Link className="showing"><button>show more</button></Link>
                    </div>
                </div>

                {/* Mapping END */}

                <Link to='/news-event'><button>Lihat Semua <SwapRightOutlined></SwapRightOutlined> </button></Link>
            </div>

            <Subscribe />
            <Foot />
        </main>
    )
}