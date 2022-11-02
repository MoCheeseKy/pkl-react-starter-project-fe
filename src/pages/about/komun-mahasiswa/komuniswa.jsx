import React from "react";
import "./komunsiswa.scss"
import Header from "../../../components/header/header";
import Foot from "../../../components/footer/foot/foot";
import Subscribe from "../../../components/footer/subscribe/subscribe";

export default function KomunitasMahasiswa() {
    return (
        <>
            <Header></Header>
            <div className="komun-mahasiswa">
                <div className="komunsiswa-headline"></div>
                <div className="komunsiswa-tittle">
                    <div className="icon"></div>
                    <h2>Komunitas Mahasiswa</h2>
                </div>
                <div className="komunsiswa-content">
                    <div className="komunsiswa-content-item ">
                        <div className="komunsiswa-content-item-image satu"></div>
                        <h3>Koperasi Mahasiswa</h3>
                        <div className="border"></div>
                        <p>Koperasi Mahasiswa (KOPMA) IBLAM adalah Unit Kegiatan Mahasiswa untuk membangun potensi kewirausahaan mahasiswa</p>
                    </div>
                    <div className="komunsiswa-content-item ">
                        <div className="komunsiswa-content-item-image dua"></div>
                        <h3>Pers Setara Mahasiswa</h3>
                        <div className="border"></div>
                        <p>Pers Setara Mahasiswa IBLAM adalah Unit Kegiatan Mahasiswa jurnalistik untuk meningkatkan budaya literasi dan menulis mahasiswa. Mahasiswa dibina agar dapat menghasilkan karya tulis berupa bulletin, buku, jurnal, dan lain-lain.</p>
                    </div>
                    <div className="komunsiswa-content-item ">
                        <div className="komunsiswa-content-item-image tiga"></div>
                        <h3>Moot Court Competition</h3>
                        <div className="border"></div>
                        <p>Moot Court Competition (MCC) IBLAM adalah Unit Kegiatan Mahasiswa Peradilan Semi Nasional dan Internasional.</p>
                    </div>

                    <div className="komunsiswa-content-item ">
                        <div className="komunsiswa-content-item-image empat"></div>
                        <h3>Senat Mahasiswa</h3>
                        <div className="border"></div>
                        <p>Senat Mahasiswa (SM) IBLAM adalah Lembaga Legislatif Mahasiswa yang memiliki peran aspirasi, legislasi, dan pengawasan. SM IBLAM dipimpin oleh seorang Ketua dan Wakil Ketua. Ketua dan Wakil Ketua dibantu oleh para Ketua dan Wakil Ketua Komisi.</p>
                    </div>
                    <div className="komunsiswa-content-item ">
                        <div className="komunsiswa-content-item-image lima"></div>
                        <h3>Badan Eksekutif Mahasiswa</h3>
                        <div className="border"></div>
                        <p> Badan Eksekutif Mahasiswa (BEM) IBLAM adalah Lembaga Eksekutif Mahasiswa yang memiliki peran untuk mengeksekusi aspirasi mahasiswa dalam ruang lingkup kegiatan kemahasiswaan seperti pendidikan, olah raga, seni & budaya, kewirausahaan, dan lain-lain. Kabinet BEM dipimpin oleh seorang Presiden, Wakil Presiden, Menteri Koordinator (Menko), dan Menteri. Kemudian Kabinet BEM dibantu oleh para Wakil dan Staff Menteri.</p>
                    </div>
                    <div className="komunsiswa-content-item ">
                        <div className="komunsiswa-content-item-image enam"></div>
                        <h3>ASIAN Law Student Association</h3>
                        <div className="border"></div>
                        <p>ASIAN Law Student Association (ALSA) IBLAM adalah Unit Kegiatan Mahasiswa pada bidang hukum untuk membangun jejaring mahasiswa hukum di Tingkat Asia.</p>
                    </div>

                    <div className="komunsiswa-content-item ">
                        <div className="komunsiswa-content-item-image tujuh"></div>
                        <h3>Model United Nations</h3>
                        <div className="border"></div>
                        <p>IBLAM Model United Nations (MUN) adalah Unit Kegiatan Mahasiswa Simulasi Perserikatan Bangsa-bangsa (PBB).</p>
                    </div>
                    <div className="komunsiswa-content-item ">
                        <div className="komunsiswa-content-item-image delapan"></div>
                        <h3>English Debate</h3>
                        <div className="border"></div>
                        <p>English Debate IBLAM adalah Unit Kegiatan Mahasiswa dalam menggali bakat public speaking dan debate mahasiswa dengan menggunakan bahasa Inggris.</p>
                    </div>
                    <div className="komunsiswa-content-item ">
                        <div className="komunsiswa-content-item-image sembilan"></div>
                        <h3>Paduan Suara dan Teater Mahasiswa</h3>
                        <div className="border"></div>
                        <p>Paduan Suara dan Teater Mahasiswa IBLAM adalah Unit Kegiatan Mahasiswa untuk menggali potensi seni & budaya mahasiswa.</p>
                    </div>

                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}