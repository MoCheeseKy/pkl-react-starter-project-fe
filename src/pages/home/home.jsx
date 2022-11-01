import React from "react";
import "./newsEvent.scss"
import "./walkTogehter.scss"
import "./homeAbout.scss"

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



            {/* ======================================================================= */}
            {/* ==================== Bagian Melangkah bersama Kami ==================== */}
            {/* ======================================================================= */}
            <div className="melangkahBersama">
                <div className="melangkahBersama-tittle">
                    <div className="icon"></div>
                    <h2>Melangkah Bersama Iblam</h2>
                </div>
                <div className="melangkahBersama-content">
                    <div className="melangkahBersama-content-item">
                        <div className="content-image first">
                            <Link to='/academic/kurikulum'>
                                <button>Explore now <SwapRightOutlined></SwapRightOutlined></button>
                            </Link>
                        </div>
                        <h5>curriculum</h5>
                        <p>Pilihan konsentrasi pembelajaran hukum yang luas untuk mempersiapkan karir di dunia global</p>
                    </div>
                    <div className="melangkahBersama-content-item">
                        <div className="content-image second">
                            <Link to='/login'>
                                <button>Explore now <SwapRightOutlined></SwapRightOutlined></button>
                            </Link>
                        </div>
                        <h5>apply to iblam</h5>
                        <p>Ketahui proses pendaftaran untuk program S1 dan S2, ketentuan dan deadline. Daftar dengan mudah secara online</p>
                    </div>
                    <div className="melangkahBersama-content-item">
                        <div className="content-image third">
                            <Link to='/alumni'>
                                <button>Explore now <SwapRightOutlined></SwapRightOutlined></button>
                            </Link>
                        </div>
                        <h5>alumni</h5>
                        <p>Bergabung bersama ribuan alumni IBLAM yang telah sukses meraih mimpinya</p>
                    </div>
                </div>
            </div>


            {/* ============================================================ */}
            {/* ==================== Bagian About Iblam ==================== */}
            {/* ============================================================ */}
            <div className="homeAbout">
                <div className="homeAbout-content">
                    <h5>about iblam</h5>
                    <h2>Berkomitmen Membangun Bangsa.</h2>
                    <p>IBLAM berkomitmen untuk menghasilkan sumber daya yang memiliki integritas di bidang hukum, unggul di tingkat nasional, dan
                        berdaya saing global</p>
                    <Link to='/about'><button>More about Iblam <SwapRightOutlined></SwapRightOutlined></button></Link>
                </div>
                <div className="youtube">
                    <iframe src="https://www.youtube.com/embed/ufQmdvO_JaY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>


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