import React from "react";
import './wwus.scss'
import Header from "../../components/header/header";
import Foot from "../../components/footer/foot/foot";
import Subscribe from "../../components/footer/subscribe/subscribe";
import { WhatsAppOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function Wwus() {
    return (
        <>
            <Header></Header>
            <div className="wwus">
                {/* Headline Handler . . . . */}
                <div className="headline">

                    <h1>Karir</h1>

                </div>
                <div className="content">

                </div>

                {/* Content Handler . . . . */}
                <div className="content">
                    <div className="content-info">
                        <div className="tittle">
                            <div className="icon">

                            </div>
                            <div className="text">
                                Work with us
                            </div>
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, non! Mollitia eius illum quis beatae eligendi. Rerum doloribus, exercitationem est dicta at quas tempore nulla eos! Officiis numquam deleniti ratione neque qui cumque doloribus facere fugit voluptas. Ipsa, excepturi veniam repudiandae temporibus maiores cumque repellendus architecto reiciendis fugit. Illum, facilis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio commodi libero qui similique aperiam quae minima minus architecto eius? Consequuntur, unde. Nisi, eveniet ducimus veniam esse soluta alias facere nihil harum molestiae officia itaque! Fuga nostrum a officia, debitis ipsa, modi repudiandae quod aliquid illum quidem deserunt explicabo, aliquam aperiam!
                        </div>
                        <div className="content-image">
                        </div>
                        <div className="text">
                            Alumni IBLAM saat ini juga ambil bagian sebagai motor pembangunan bangsa dan negara Indonesia dan siap membawa IBLAM School of Law sebagai bagian dari komunitas global di 2020. Untuk mewujudkan itu, Komunitas Alumni IBLAM menyiapkan jejaring untuk menjembatani kegiatan para alumni dengan almamaternya.
                        </div>

                        <div className="vacancy-content">
                            <div className="tittle">
                                <h2>Lowongan saat ini</h2>
                                <p>Jadi bagian dari IBLAM, kirim lamaranmu ke career@iblam.ac.id . </p>
                            </div>
                            <div className="vacancy-item">
                                <h2>Open Recruitment Dosen Tetap Sekolah Tinggi Ilmu Hukum IBLAM</h2>
                                <p>IBLAM</p>
                                <h3>Persyaratan</h3>
                                <p>Persyaratan UmumLulusan S3 (on going atau selesai)Maksimal usia 40 TahunDomisili JabodetabekTidak menjadi dosen di PT lainMemiliki integritas t...</p>
                                <button>Baca Selengkapnya . . .</button>
                            </div>
                            <div className="vacancy-item">
                                <h2>Open Recruitment Unit Kerjasama</h2>
                                <p>IBLAM</p>
                                <h3>Persyaratan</h3>
                                <p>Kepala Unit KerjasamaLulusan S1 Jurusan Hubungan Masyarakat(PR)/Ilmu KomunikasiIPK{">"}3.00Usia minimal 25 tahunMinimal 3 tahun pengalaman dibidang PR, Marke...</p>
                                <button>Baca Selengkapnya . . .</button>
                            </div>
                            <div className="vacancy-item">
                                <h2>Open Recruitment Dosen S3 IBLAM Shool Of Law</h2>
                                <p>IBLAM</p>
                                <h3>Persyaratan</h3>
                                <p>Persyaratan UmumLulusan S3 (on going atau selesai)Lulusan dari Progam Studi Ilmu Hukum terakreditasi minimal BSehat jasmani maupun rohani dan bebas dari narkotika,...</p>
                                <button>Baca Selengkapnya . . .</button>
                            </div>
                            <div className="vacancy-item">
                                <h2>Open Recruitment Unit Pembelajaran Online</h2>
                                <p>IBLAM</p>
                                <h3>Persyaratan</h3>
                                <p>Kepala Unit Pembelajaran OnlineLulusan S1 di semua jurusanUsia minimal 25 tahunMinimal 2 tahun pengalaman di bidang instansi pendidi...</p>
                                <button>Baca Selengkapnya . . .</button>
                            </div>
                            <div className="vacancy-item">
                                <h2>Open Recruitment Unit Kreatif & Sosial Media</h2>
                                <p>IBLAM</p>
                                <h3>Persyaratan</h3>
                                <p>Kepala Unit Kreatif & Sosial MediaLulusan S1 di semua jurusan IPK {">"} 3.00Usia min 25 tahunMin 3 Tahun pengalaman di bidang Mar...</p>
                                <button>Baca Selengkapnya . . .</button>
                            </div>
                        </div>
                    </div>
                    <div className="sider">
                        <div className="help">
                            <h1>Butuh Bantuan ?</h1>
                            <div className="text">Tim IBLAM siap menjawab kebutuhanmu</div>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Jakarta</div></button>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Depok</div></button>
                        </div>
                        <div className="side-info">
                            <h1><Link to={'/about/visi-misi'} style={{color: 'black'}}>Visi dan Misi</Link></h1>
                        </div>
                        <div className="side-info">
                            <h1><Link style={{color: 'black'}}>Kampus Iblam</Link></h1>
                        </div>
                        <div className="side-info">
                            <h1><Link to={'/about/kontak-kami'} style={{color: 'black'}}>Kontak</Link></h1>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}
