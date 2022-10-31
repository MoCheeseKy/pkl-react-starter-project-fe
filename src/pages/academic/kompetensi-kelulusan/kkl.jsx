import React from 'react'
import './kkl.scss'
import Header from '../../../components/header/header'
import Foot from '../../../components/footer/foot/foot'

export default function KompetensiKelulusan() {
    return (
        <>
            <Header></Header>
            <div className="kompetensi-kelulusan">
                <div className="kkl-headline">
                    <h1>Kompetensi Kelulusan</h1>
                </div>
                <p>Sistem pendidikan di IBLAM School of Law tidak hanya mempersiapkan lulusan yang baik secara akademis, namun juga mampu menyesuaikan diri di dunia pekerjaan. Para lulusan akan dapat melakukan skill analitik untuk memecahkan masalah secara profesional.</p>
                <p>Dengan dibekali hard skill dan soft skill selama proses pembelajaran, lulusan IBLAM School of Law mampu bekerja di berbagai sektor bahkan menciptakan lapangan pekerjaan.</p>
                <div className="kkl-tittle">
                    <div className="icon"></div>
                    <h2>Bidang Profesi</h2>
                </div>
                <p>Berbagai profesi di bidang hukum yang dapat dimasuki alumni IBLAM School of Law sangat luas di antaranya :</p>
                <div className="profession-content">
                    <div className="profession-item">
                        <div className="profession-image">

                        </div>
                        <h4>Praktisi Hukum</h4>
                        <p>Advokat</p>
                        <p>Pengacara</p>
                        <p>Konsultan Hukum</p>
                        <p>Notaris Litigator</p>
                        <p>Mediator</p>
                    </div>
                    <div className="profession-item">
                        <div className="profession-image">

                        </div>
                        <h4>Instansi/Aparat Penegak Hukum</h4>
                        <p>Politisi</p>
                        <p>Jaksa</p>
                        <p>Hakim</p>
                        <p>Lembaga Pemasyarakatan</p>
                        <p>Imigrasi</p>
                        <p>Bea Cukai</p>
                    </div>
                    <div className="profession-item">
                        <div className="profession-image">

                        </div>
                        <h4>Konsultan Hukum</h4>
                        <p>Perpajakan</p>
                        <p>Pasar Modal Lising</p>
                        <p>HAKI</p>
                        <p>Perbankan</p>
                        <p>Perusahaan</p>
                    </div>
                    <div className="profession-item">
                        <div className="profession-image">

                        </div>
                        <h4>Perusahaan Perbankan Lembaga Keuangan Lain</h4>
                        <p>Legal Corporate</p>
                        <p>HRD/Personalia</p>
                        <p>Legal Audit</p>
                        <p>Apprisal</p>
                        <p>Divisi Kredit & Collection</p>
                        <p>Taksasi</p>
                        <p>Real Estate</p>
                    </div>

                    <div className="profession-item">
                        <div className="profession-image">

                        </div>
                        <h4>Akademisi/Keahlian</h4>
                        <p>Dosen/Assisten Dosen</p>
                        <p>Peneliti & Pengembangan (Litbang)</p>
                        <p>Peneliti & Staff Ahli di Bidang Hukum</p>
                        <p>Pembicara Publik di Bidang Hukum</p>
                    </div>
                </div>
            </div>
            <Foot></Foot>
        </>
    )
}