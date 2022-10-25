import React from 'react'
import './news.scss'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import Header from '../../components/header/header'
import Subscribe from '../../components/footer/subscribe/subscribe'
import Foot from '../../components/footer/foot/foot'
import { WhatsAppOutlined } from '@ant-design/icons'

export default function News() {
  return (
    <div className='news'>
        <Header />
        <div className="content">
            <div className="entry">
                <img src="https://iblam.ac.id/wp-content/uploads/2019/12/Header_26.jpg" alt="" />
            </div>
            <div className="container">
                <div className="breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/news-event'}>News and Event</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="title-main">
                    <h2>
                        <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/icon-2.png" alt="" />&nbsp;
                        <strong>News & Events</strong>
                    </h2>
                </div>
                <div className="row">
                    <div className="new-content">
                        <img src="https://iblam.ac.id/wp-content/uploads/2022/07/WhatsApp-Image-2022-06-29-at-09.46.27-1024x768.jpeg" alt="" />
                        <h3><Link>Ceremony Penandatanganan Memorandum of Understanding (MoU) dan Memorandum of Agreement (MoA) Sekolah Tinggi Ilmu Hukum IBLAM dengan Komisi Pemilihan Umum Kota Administrasi Jakarta Timur</Link></h3>
                        <div className="category-label">Latest News</div>
                        <div className="post-content">
                            Jakarta, 28 Juni 2022 - Komisi Pemilihan Umum Kota Administrasi Jakarta Timur mengunjungi kampus Sekolah Tinggi Ilmu Hukum IBLAM (STIH IBLAM)  untuk menyelenggarakan acara Ceremony Penandatanganan Memorandum of Understanding (MoU) dan Memorandum of Agreement (MoA). Acara tersebut membahas tentang kerjasama dalam bidang Tri Dharma Perguruan Tinggi.Acara ini dihadiri oleh para pimpinan STIH IBLAM  diantaranya ada Ketua STIH IBLAM Dr. Gunawan Nachrawi, S.H., M.H., lalu Dr. Marjan Miharja, S.H.,M.H., selaku Wakil Ketua I, Arrum Budi Leksono, S.T., S.H., M.H., selaku Wakil Ketua II, Feny Windiyastuti, S.H., M.H., selaku Ketua Program Studi S1, Yolla Aprillianny,  S.Pd., selaku Kabiro S2, Rani Yuwafi, S.H., M.H., selaku Kabiro Humas dan Kerjasam...
                            <p><strong><Link>Selengkapnya &gt;</Link></strong></p>
                        </div>
                    </div>
                    <div className="new-contact">
                        <div className="isian">
                            <h4><strong>Butuh Bantuan?</strong></h4>
                            <h6>Tim IBLAM siap menjawab kebutuhanmu</h6>
                            <div className="cntc">
                                <p><Link><WhatsAppOutlined/>&nbsp;Kampus Jakarta</Link></p>
                                <p><Link><WhatsAppOutlined/>&nbsp;Kampus Depok</Link></p>
                            </div>
                            <h4><strong>Upcoming Events</strong></h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="post-item">
                        <img src="https://iblam.ac.id/wp-content/uploads/2022/07/WhatsApp-Image-2022-05-25-at-15.34.34-350x250.jpeg" alt="" />
                        <div className="post-date">27 JUL 22</div>
                        <div className="post-title">
                            <Link>Ceremony Penandatanganan Memorandum of Understanding (MoU) dan Memorandum of Agreement (MoA) Sekolah Tinggi Ilmu Hukum IBLAM dengan Badan Pengawasan Pemilu Kota Administrasi Jakarta Timur</Link>
                        </div>
                        <div className="post-content">
                            Jakarta, 25 Mei 2022 - Sekolah Tinggi Ilmu Hukum IBLAM (STIH IBLAM) mengunjungi kantor Badan Pengawas Pemilu (Bawaslu) Kota Jakarta T...
                            <p><strong><Link>Selengkapnya &gt;</Link></strong></p>
                        </div>
                    </div>
                    <div className="post-item">
                        <img src="https://iblam.ac.id/wp-content/uploads/2022/07/baznas-buat-ig-4-350x250.jpg" 
                        alt="" />
                        <div className="post-date">27 JUL 22</div>
                        <div className="post-title">
                            <Link>Ceremony Penandatanganan MoU STIH IBLAM dengan Badan Pengawas Pemilu Kota Jakarta Pusat dalam bidang Tri Dharma Perguruan Tinggi dan Partisipasi Pengawasan Pemilu di Wilayah Jakarta Pusat</Link>
                        </div>
                        <div className="post-content">
                            Jakarta, Rabu 23 Maret 2022 - Sekolah Tinggi Ilmu Hukum IBLAM (STIH IBLAM) mengunjungi kantor Badan Pengawas Pemilu (Bawaslu) Kota Ad...
                            <p><strong><Link>Selengkapnya &gt;</Link></strong></p>
                        </div>
                    </div>
                    <div className="post-item">
                        <img src="https://iblam.ac.id/wp-content/uploads/2022/04/WhatsApp-Image-2022-03-25-at-14.01.33-350x250.jpeg" 
                        alt="" />
                        <div className="post-date">27 JUL 22</div>
                        <div className="post-title">
                            <Link>Ceremony Penandatanganan MoU STIH IBLAM dengan Badan Pengawas Pemilu Kota Jakarta Pusat dalam bidang Tri Dharma Perguruan Tinggi dan Partisipasi Pengawasan Pemilu di Wilayah Jakarta Pusat</Link>
                        </div>
                        <div className="post-content">
                            Jakarta, Rabu 23 Maret 2022 - Sekolah Tinggi Ilmu Hukum IBLAM (STIH IBLAM) mengunjungi kantor Badan Pengawas Pemilu (Bawaslu) Kota Ad...
                            <p><strong><Link>Selengkapnya &gt;</Link></strong></p>
                        </div>
                    </div>
                    <div className="post-item">
                        <img src="https://iblam.ac.id/wp-content/uploads/2022/04/WhatsApp-Image-2022-03-14-at-12.39.52-1-350x250.jpeg" 
                        alt="" />
                        <div className="post-date">7 APR 22</div>
                        <div className="post-title">
                            <Link>Audiensi Penjajakan Kerjasama Sekolah Tinggi Ilmu Hukum IBLAM dengan Komisi Pemilihan Umum Jakarta Timur</Link>
                        </div>
                        <div className="post-content">
                            Jakarta, Jumat, 14 Maret 2022 - Sekolah Tinggi Ilmu Hukum IBLAM (STIH IBLAM) berkunjung ke kantor Komisi Pemilihan Umum Jakarta Timur...
                            <p><strong><Link>Selengkapnya &gt;</Link></strong></p>
                        </div>
                    </div>
                    <div className="post-item">
                        <img src="https://iblam.ac.id/wp-content/uploads/2022/03/bawaslu-pusat-350x250.jpg" 
                        alt="" />
                        <div className="post-date">29 MAR 22</div>
                        <div className="post-title">
                            <Link>Ceremony Penandatanganan MoU STIH IBLAM dengan Badan Pengawas Pemilu Kota Jakarta Pusat dalam bidang Tri Dharma Perguruan Tinggi dan Partisipasi Pengawasan Pemilu di Wilayah Jakarta Pusat</Link>
                        </div>
                        <div className="post-content">
                            Jakarta, Rabu 23 Maret 2022 - Sekolah Tinggi Ilmu Hukum IBLAM (STIH IBLAM) mengunjungi kantor Badan Pengawas Pemilu (Bawaslu) Kota Ad...
                            <p><strong><Link>Selengkapnya &gt;</Link></strong></p>
                        </div>
                    </div>
                    <div className="post-item">
                        <img src="https://iblam.ac.id/wp-content/uploads/2022/03/IMG_0016-min-350x250.jpg" 
                        alt="" />
                        <div className="post-date">28 MAR 22</div>
                        <div className="post-title">
                            <Link>Audiensi Penjajakan Kerjasama dan Penandatanganan Nota Kesepahaman (MoU) STIH IBLAM dengan Harry Syahputra & Partners Law Firm</Link>
                        </div>
                        <div className="post-content">
                            Jakarta, Selasa 22 Februari 2022 Sekolah Tinggi Ilmu Hukum IBLAM (STIH IBLAM) berkunjung ke kantor HSP Law Firm untuk mengadakan audiensi penjajakan s...
                            <p><strong><Link>Selengkapnya &gt;</Link></strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Subscribe/>
        <Foot/>
    </div>
  )
}