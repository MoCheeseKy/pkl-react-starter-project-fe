import React from 'react'
import Header from '../../components/header/header'
import Foot from '../../components/footer/foot/foot'
import './lpm.scss'
import { Breadcrumb, Collapse } from 'antd'
import { Link } from 'react-router-dom'

export default function Lpm() {
  const { Panel } = Collapse;
  const docIn =
    <div className="isian">
        <p><strong>a. Document SPMI</strong></p>
        <ol>
            <li>Kebijakan Mutu</li>
            <li>Manual Mutu</li>
            <li>Standar Mutu</li>
            <li>Formulir Mutu</li>
        </ol>
        <p><strong>b. Standar Melampaui</strong></p>
        <ol>
            <li>Standar Identitas</li>
            <li>Standar Visi, Misi, Tujuan dan sasaran</li>
            <li>Standar Tata Kelola dan Kepemimpinan</li>
            <li>Standar Suasana Akademik</li>
            <li>Standar Sistem Informasi</li>
            <li>Standar Kerjasama Pendidikan dan Pengajaran</li>
            <li>Standar Kemahasiswaan</li>
            <li>Standar Pengelolaan Keuangan</li>
        </ol>
    </div>
  const docEks =
  <div className="isian">
    <ol>
        <li>Peraturan dan Perundangan-undangan</li>
        <li>Panduan-panduan</li>
    </ol>
  </div>
  const AMI =
    <div className="isian">
        <ol>
            <li>Pedoman Audit Mutu Internal</li>
            <li>Laporan Audit Mutu Internal</li>
        </ol>
    </div>
  const BPM =
    <div className="isian">
        <ol>
            <li>Dummy Input Teks</li>
        </ol>
    </div>
  const keg =
    <div className="isian"></div>
  return (
    <div className='lpm'>
        <Header />
        <div className="content">
            <div className="entry">
                <div className="img">
                    <img src="https://iblam.ac.id/wp-content/uploads/2022/09/LPM-image.jpeg" alt="" />
                </div>
            </div>
            <div className="container">
                <div className="breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/lpm'}>LPM</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="header">
                    <h3 className='title'>Profil Lembaga Penjamin Mutu</h3>
                </div>
                <div className="hr"><hr /></div>
                <div className="text">
                    <p>Lembaga Penjaminan Mutu (LPM) merupakan bagian dari organisasi STIH IBLAM yang dibentuk untuk menjalankan pengawasan dengan mengevaluasi fungsi dan pelaksanaan proses pembelajaran dan bertanggung jawab kepada Ketua. Struktur LPM terdiri atas Kepala, dan sekretaris, pelaksana SPME, pelaksana SPMI, Gugus SPMI Prodi 1 dan Prodi S2, Auditor.</p>
                </div>
                <div className="header">
                    <h3 className='title'>Tugas Lembaga Penjaminan Mutu Sekolah Tinggi Ilmu Hukum IBLAM</h3>
                </div>
                <div className="hr"><hr /></div>
                <div className="text">
                    <p>Mengembangkan sistem penjaminan mutu yang mencakup antara lain:</p>
                    <ol>
                        <li>Mengkoordinasikan penyusunan Kebijakan, Manual, Standar, dan Formulir SPMI sekolah tinggi.</li>
                        <li>Mengkoordinasikan penyusunan dokumen Prosedur dan Instruksi Kerja di tingkat sekolah tinggi.</li>
                        <li>Melakukan monitoring dan evaluasi pelaksanaan standar sekolah tinggi.</li>
                        <li>Menyampaikan laporan hasil monev dan rekomendasinya secara tertulis kepada Pimpinan sekolah tinggi.</li>
                        <li>Memantau, mengevaluasi, dan melakukan analisis terhadap tindak lanjut pelaksanaan monev.</li>
                    </ol>
                </div>
                <div className="header">
                    <h3 className='title'>Gugus SPMI Program Studi</h3>
                </div>
                <div className="hr"><hr /></div>
                <div className="text">
                    <ol>
                        <li>Bertanggung jawab terhadap pelaksanaan Penjaminan Mutu di tingkat program studi.</li>
                        <li>Struktur gugus mutu merupakan unit penjaminan mutu terkecil dengan seorang kepala.</li>
                        <li>Dalam melaksanakan tugasnya berkoordinasi dengan LPM.</li>
                    </ol>
                </div>
                <div className="header">
                    <h3 className='title'>Tugas Gugus SPMI Program Studi</h3>
                </div>
                <div className="hr"><hr /></div>
                <div className="text">
                    <p>Mengembangkan sistem penjaminan mutu yang mencakup antara lain:</p>
                    <ol>
                        <li>Mensosialisasikan Kebijakan, Manual, Standar, dan Formulir SPMI kepada sivitas akademika Program Studi.</li>
                        <li>Memfasilitasi penyusunan dokumen Prosedur dan Instruksi Kerja (dokumen mutu) di tingkat Program Studi.</li>
                        <li>Melakukan monitoring dan evaluasi penyelenggaraan Pendidikan bidang akademik di tingkat prodi.</li>
                        <li>Memantau, mengevaluasi, dan melakukan analisis terhadap tindak lanjut pelaksanaan monev dan AMI.</li>
                        <li>Melakukan koordinasi dengan LPM.</li>
                    </ol>
                </div>
                <div className="header">
                    <h3 className='title'>Tugas Auditor Mutu Internal</h3>
                </div>
                <div className="hr"><hr /></div>
                <div className="text">
                    <p>Auditor Mutu Internal mempunyai tugas mengaudit Unit Kerja akademik dan/atau non akademik berdasarkan dokumen Sistem Penjaminan Mutu Internal STIH IBLAM. Ketua Auditor Mutu Internal menyelenggarakan fungsi:</p>
                    <ol>
                        <li>melakukan audit mutu internal STIH IBLAM secara berkala sesuai program kerja Lembaga Penjaminan Mutu dan/atau atas permintaan Unit Kerja melalui Kepala Lembaga Penjaminan Mutu;</li>
                        <li>mendapatkan informasi awal dari Unit Kerja yang akan diaudit (Auditee) berkoordinasi dengan Lembaga Penjaminan Mutu;</li>
                        <li>melakukan tinjauan dokumen dan persyaratan lain Auditee di database Lembaga Penjaminan Mutu;</li>
                        <li>mempersiapkan rencana dan jadwal audit mutu internal di bawah koordinasi Kepala Lembaga Penjaminan Mutu;</li>
                        <li>merancang dan mengembangkan checklist audit mutu internal dengan menggunakan database Lembaga Penjaminan Mutu dan sumber-sumber lain yang relevan di bawah koordinasi Lembaga Penjaminan Mutu;</li>
                        <li>melaksanakan audit mutu internal sesuai ketetapan dan kaidah audit mutu internal perguruan tinggi;</li>
                        <li>mengumpulkan dan menganalisis bukti penerapan Sistem Manajemen Mutu Unit Kerja akademik dan/atau non akademik;</li>
                        <li>menyusun laporan hasil kegiatan audit mutu internal Unit Kerja akademik dan/atau non akademik sesuai dengan format laporan yang telah ditetapkan;</li>
                        <li>menyerahkan laporan lengkap hasil kegiatan audit mutu internal Unit Kerja akademik dan/atau non akademik tertentu kepada Lembaga Penjaminan Mutu dalam bentuk hardcopy dan softcopy sesuai ketentuan yang ditetapkan;</li>
                        <li>memantau perbaikan dan tindak lanjut hasil audit mutu internal Unit Kerja akademik dan/atau non akademik berkoordinasi dengan Lembaga Penjaminan Mutu; dan pelaksanaan tugas-tugas lain atas perintah atasannya.</li>
                    </ol>
                </div>
                <div className="collapse-wrap">
                    <div className="collapse">
                        <Collapse accordion>
                            <Panel header="Dokumen Internal" key={1}>
                                {docIn}
                            </Panel>
                            <Panel header="Dokumen Eksternal" key={2}>
                                {docEks}
                            </Panel>
                            <Panel header="Audit Mutu Internal" key={3}>
                                {AMI}
                            </Panel>
                            <Panel header="Benchmarking Penjamin Mutu" key={4}>
                                {BPM}
                            </Panel>
                            <Panel header="Kegiatan" key={5}>
                                {keg}
                            </Panel>
                        </Collapse>
                    </div>
                </div>
                <div className="kosong">
                    <p><br /></p>
                    <p><br /></p>
                </div>
            </div>
        </div>
        <Foot />
    </div>
  )
}
