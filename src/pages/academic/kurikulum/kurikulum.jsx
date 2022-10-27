import React from 'react'
import './kurikulum.scss'
import Header from '../../../components/header/header'
import Foot from '../../../components/footer/foot/foot'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

export default function Kurikulum() {
  return (
    <div className='kurikulum'>
        <Header />
        <div className="content">
            <div className="entry">
                <img src="https://iblam.ac.id/wp-content/uploads/2019/12/Header_02.jpg" alt="" />
            </div>
            <div className="container">
                <div className="breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/academic'}>Academic</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/tes'}>Kurikulum</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="title-main">
                    <h2>
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/icon-1.png" alt="" /><br className='br' /> &nbsp;
                        <strong>Rumpun Ilmu Higher School of Law IBLAM</strong>
                    </h2>
                    <p>Rumpun Ilmu adalah pengelompokan kajian keilmuan yang dibangun dalam rangka spesialisasi kepakaran dari para pengajar. Hal ini juga memudahkan para pengajar dan mahasiswa dalam mengidentifikasi konsentrasi atau kepakaran mereka dalam dunia kerja.</p>
                    <p>Rumpun Ilmu di Higher School Of Law IBLAM  dibagi ke dalam 5 (lima) kelompok yakni International Trade & Commerce (ITC), International Communication & Technology (ICT), Fundamental Law, Fundamental Business Law, dan Fundamental Criminal Law.</p>
                </div>
                <div className="isi">
                    <div className="img">
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/banner-kurikulum-itc.jpg" alt="" />
                    </div>
                    <div className="txt">
                        <ul>
                            <li>Hukum Perdagangan Internasional</li>
                            <li>Aspek Hukum Koperasi dan UKM</li>
                            <li>Aspek Hukum CSR</li>
                            <li>Hukum Anti Monopoli dan Persaingan Usaha Tidak Sehat</li>
                            <li>Hukum Bisnis Internasional</li>
                            <li>Hukum Investasi & Pasar Modal</li>
                        </ul>
                        <ul>
                            <li>Hukum Keuangan Negara</li>
                            <li>Hukum Perdata Internasional</li>
                            <li>Hukum Pengadaan Barang dan Jasa</li>
                            <li>Hukum Pengangkutan</li>
                            <li>Hukum ASEAN</li>
                            <li>Hukum Internasional</li>
                        </ul>
                        <ul>
                            <li>Hukum Pariwisata</li>
                            <li>Hukum Maritim</li>
                            <li>Hukum Sumber Daya Alam</li>
                            <li>Hukum Kekayaan Intelektual</li>
                            <li>Hukum Perizinan dan Perindustrian</li>
                            <li>Hukum Bisnis Syariah</li>
                        </ul>
                    </div>
                    <div className="img">
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/banner-kurikulum-ict.jpg" alt="" />
                    </div>
                    <div className="txt">
                        <ul>
                            <li>Hukum Siber</li>
                            <li>Hukum Komunikasi</li>
                        </ul>
                    </div>
                    <div className="img">
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/banner-kurikulum-fundamental.jpg" alt="" />
                    </div>
                    <div className="txt">
                        <ul>
                            <li>Pendidikan Agama</li>
                            <li>Pancasila</li>
                            <li>Pengantar Ilmu Hukum</li>
                            <li>Pengantar Hukum Indonesia</li>
                            <li>Ilmu Negara</li>
                            <li>Sosiologi Hukum</li>
                            <li>Bahasa Inggris Hukum</li>
                            <li>Pendidikan Kewarganegaraan</li>
                        </ul>
                        <ul>
                            <li>Hukum Acara PTUN & Peradilan Konstitusi</li>
                            <li>Metode Penelitian dan Penulisan Hukum</li>
                            <li>Ilmu Perundang-undangan</li>
                            <li>Filsafat Hukum</li>
                            <li>Analisa & Argumentasi Hukum</li>
                            <li>Hukum & Kebijakan Publik</li>
                            <li>Hukum Birokrasi</li>
                        </ul>
                        <ul>
                            <li>Hukum Tata Negara</li>
                            <li>Hukum Islam</li>
                            <li>Bahasa Indonesia</li>
                            <li>Hukum Administrasi Negara</li>
                            <li>Hukum Desa</li>
                            <li>Hukum Lingkungan</li>
                            <li>Hukum Adat dan Agraria</li>
                        </ul>
                    </div>
                    <div className="img">
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/banner-kurikulum-business.jpg" alt="" />
                    </div>
                    <div className="txt">
                        <ul>
                            <li>Dasar-dasar Manajemen</li>
                            <li>Hukum Perdata</li>
                            <li>Hukum Dagang</li>
                            <li>Hukum Korporasi</li>
                            <li>Hukum Perbankan</li>
                        </ul>
                        <ul>
                            <li>Hukum Acara Perdata</li>
                            <li>Etika Bisnis dan Profesi Hukum</li>
                            <li>Hukum Alternative Dispute Resolution (ADR)</li>
                            <li>Hukum Perancangan Kontrak</li>
                        </ul>
                        <ul>
                            <li>Hukum Ketenagakerjaan</li>
                            <li>Hukum Perlindungan Konsumen</li>
                            <li>Hukum Pajak</li>
                            <li>Hukum Kepailitan</li>
                        </ul>
                    </div>
                    <div className="img">
                        <img src="https://iblam.ac.id/wp-content/uploads/2020/04/banner-kurikulum-criminal2.jpg" alt="" />
                    </div>
                    <div className="txt">
                        <ul>
                            <li>Hukum Pidana</li>
                            <li>Tekhnik Penyidikan & Penuntutan</li>
                            <li>Hukum Pembuktian</li>
                            <li>Hukum Peradilan</li>
                            <li>Hukum Acara Banding Administrasi</li>
                            <li>Tekhnik Litigasir</li>
                        </ul>
                        <ul>
                            <li>Hukum Penyitaan & Eksekusi</li>
                            <li>Hukum Advokatur</li>
                            <li>Acara Peradilan Militer</li>
                            <li>Hukum Acara Pidana</li>
                            <li>Hukum Pidana Ekonomi</li>
                            <li>Kriminologi</li>
                        </ul>
                        <ul>
                            <li>Hukum Tindak Pidana Korupsi dan Tindak Pidana Pencucian Uang</li>
                            <li>Hukum Kejahatan Korporasi</li>
                            <li>Hukum Tindak Pidana Lingkungan dan Kehutanan</li>
                            <li>Hukum Tindak Pidana Perbankan</li>
                        </ul>
                    </div>
                    <div className="links">
                        <div className="s1">
                            <Link><img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/icon-undergraduate-3.png" alt="" /></Link>
                        </div>
                        <div className="s2">
                            <Link><img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/icon-graduate-1.png" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Foot />
    </div>
  )
}
