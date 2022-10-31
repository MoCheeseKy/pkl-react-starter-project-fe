import React from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons'
import Header from "../../../components/header/header";
import Foot from "../../../components/footer/foot/foot";
import './beasiswa.scss'

export default function Beasiswa() {
  return (
    <div className='beasiswa'>
        <Header/>
        <div className="content">
            <div className="entry">
                <img src="https://iblam.ac.id/wp-content/uploads/2019/12/Header_08.jpg" alt="" />
            </div>
            <div className="container">
                <div className="breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/admission'}>Admission</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/admission/beasiswa'}>Beasiswa</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="title-main">
                    <h2>
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/icon-2.png" alt="" />&nbsp;
                        <div className="br"><br /></div>
                        <strong>Beasiswa</strong>
                    </h2>
                </div>
                <div className="isi">
                    <div className="upper">
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/beasiswa-justia.png" alt="" />
                        <p>Demi meningkatkan kualitas Sumber Daya Manusia yang professional dan handal di bidang hukum, IBLAM School of Law memberikan kesempatan kepada siswa yang telah maupun yang belum menyelesaikan pendidikan jenjang SMA/Sederajat untuk menempuh pendidikan Sarjana (S1) melalui <strong style={{color: '#0026C5'}}>Beasiswa JUSTISIA (Jalur Prestasi Siswa)</strong>, dan penilaian beasiswa ini hanya berupa prestasi akademik dan/atau non-akademik.</p>
                    </div>
                    <div className="middle">
                        <h4><strong>Periode penerimaan beasiswa program Justisia diadakan 2 kali dalam setahun:</strong></h4>
                        <h5>1. Oktober - Februari</h5>
                        <h5>2. Februari - Agustus</h5>
                        <h4><strong>Persyaratan Beasiswa Justisia:</strong></h4>
                        <ol>
                            <li>Warga Negara Indonesia (WNI).</li>
                            <li>Lulusan SMA/Sederajat (usia maks. 22 tahun).</li>
                            <li>Nilai rapor semester I-IV dengan rata-rata min. 7,50.</li>
                            <li>Memiliki prestasi akademik dan/atau non-akademik yang dibuktikan dengan fotokopi sertifikat atau surat keterangan dari sekolah atau pihak terkait.</li>
                        </ol>
                        <h4><strong>Dokumen yang dibutuhkan:</strong></h4>
                        <ol>
                            <li>Mengisi formulir online.</li>
                            <li>Scan ijazah SMA/sederajat yang dilegalisir.</li>
                            <li>Scan rapor semester I-IV SMA/sederajat.</li>
                            <li>Scan KTP/Kartu Pelajar.</li>
                            <li>Scan Pas foto berwarna background merah ukuran 2x3, 3x4, 4x6 masing-masing 4 lembar.</li>
                        </ol>
                        <h5>Butuh Bantuan?</h5>
                        <p>Whatsapp kami dengan no. di bawah ini:</p>
                        <p><Link><WhatsAppOutlined />&nbsp;Kampus Jakarta</Link></p>
                        <p><Link><WhatsAppOutlined />&nbsp;Kampus Depok</Link></p>
                    </div>
                </div>
            </div>
            <div className="link-beasiswa">
                <Link><img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/banner-beasiswa.jpg" alt="" /></Link>
            </div>
        </div>
        <Foot/>
    </div>
  )
}
