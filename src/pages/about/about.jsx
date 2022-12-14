import React from "react";
import Header from "../../components/header/header";
import Foot from "../../components/footer/foot/foot";
import { Link } from "react-router-dom";
import './about.scss'

export default function About() {
    return (
        <>
            <Header></Header>
            <div className="headline about">
            </div>
            <div className="about tab">
                <div className="about-item">
                    <div className="tittle">
                        <div className="icon">

                        </div>
                        <div className="text">
                            Sejarah Iblam
                        </div>
                    </div>
                    <Link to='/about/sejarah-iblam'>
                        <div className="about-image-footer">
                            <div className="about-image sejarah">
                                <div className="about-image-content">
                                    <button className="after">{">"}</button>
                                    <p>IBLAM didirikan dengan prakarsa untuk meningkatkan mutu atau nilai tambah Sarjana Hukum dengan menyelenggarakan pendidikan dan pelatihan-pelatihan yang melembaga.</p>
                                </div>
                            </div>
                            <div className="about-footer">
                                <button className="before">{">"}</button>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="about-item">
                    <div className="tittle">
                        <div className="icon">

                        </div>
                        <div className="text">
                            Pendiri
                        </div>
                    </div>
                    <Link to='/about/pendiri-iblam'>
                        <div className="about-image-footer">
                            <div className="about-image pendiri">
                                <div className="about-image-content">
                                    <button className="after">{">"}</button>
                                    <p>Lebih dekat dengan pendiri IBLAM School of Law</p>
                                </div>
                            </div>
                            <div className="about-footer">
                                <button className="before">{">"}</button>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="about-item">
                    <div className="tittle">
                        <div className="icon">

                        </div>
                        <div className="text">
                            Visi dan Misi
                        </div>
                    </div>
                    <Link to='/about/visi-misi'>
                        <div className="about-image-footer">
                            <div className="about-image visimisi">
                                <div className="about-image-content">
                                    <button className="after">{">"}</button>
                                    <p>IBLAM School of Law menjadikan integritas sebagai visi dan misi utama dalam komitmen memberikan kunci perbaikan SDM di bidang hukum.</p>
                                </div>
                            </div>
                            <div className="about-footer">
                                <button className="before">{">"}</button>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="about-item">
                    <div className="tittle">
                        <div className="icon">

                        </div>
                        <div className="text">
                            Struktur Organisasi
                        </div>
                    </div>
                    <Link to={'/about/struktur-organisasi'}>
                        <div className="about-image-footer">
                            <div className="about-image organizationStruc">
                                <div className="about-image-content">
                                    <button className="after">{">"}</button>
                                    <p>Struktur organisasi IBLAM School of Law</p>
                                </div>
                            </div>
                            <div className="about-footer">
                                <button className="before">{">"}</button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="about-item">
                    <div className="tittle">
                        <div className="icon">

                        </div>
                        <div className="text">
                            Akreditas
                        </div>
                    </div>
                    <Link to='/about/akreditas'>
                        <div className="about-image-footer">
                            <div className="about-image akreditas">
                                <div className="about-image-content">
                                    <button className="after">{">"}</button>
                                    <p>Daftar akreditasi IBLAM School of Law</p>
                                </div>
                            </div>
                            <div className="about-footer">
                                <button className="before">{">"}</button>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="about-item">
                    <div className="tittle">
                        <div className="icon">

                        </div>
                        <div className="text">
                            Kampus Iblam
                        </div>
                    </div>
                    <div className="about-image-footer">
                        <div className="about-image campuss">
                            <div className="about-image-content">
                                <button className="after">{">"}</button>
                                <p>Temukan kampus IBLAM School of Law terdekat di kotamu</p>
                            </div>
                        </div>
                        <div className="about-footer">
                            <button className="before">{">"}</button>

                        </div>
                    </div>
                </div>
                <div className="about-item">
                    <div className="tittle">
                        <div className="icon">

                        </div>
                        <div className="text">
                            Komunitas Mahasiswa
                        </div>
                    </div>
                    <Link to='/about/komunitas-mahasiswa'>
                        <div className="about-image-footer">
                            <div className="about-image mahasiswa">
                                <div className="about-image-content">
                                    <button className="after">{">"}</button>
                                    <p>Terhubunglah dengan komunitas mahasiswa IBLAM School of Law</p>
                                </div>
                            </div>
                            <div className="about-footer">
                                <button className="before">{">"}</button>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="about-item">
                    <div className="tittle">
                        <div className="icon">

                        </div>
                        <div className="text">
                            Komunitas Alumni
                        </div>
                    </div>
                    <Link to='/alumni'>
                        <div className="about-image-footer">
                            <div className="about-image alumni">
                                <div className="about-image-content">
                                    <button className="after">{">"}</button>
                                    <p>Terhubung dengan komunitas alumni</p>
                                </div>
                            </div>
                            <div className="about-footer">
                                <button className="before">{">"}</button>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="about-item">
                    <div className="tittle">
                        <div className="icon">

                        </div>
                        <div className="text">
                            Iblam Career and Development
                        </div>
                    </div>
                    <Link to='/about/iblam-career-and-development'>
                        <div className="about-image-footer">
                            <div className="about-image careerDev">
                                <div className="about-image-content">
                                    <button className="after">{">"}</button>
                                    <p>IBLAM Career and Development Center mempersiapkan mahasiswa untuk dapat terjun ke dunia kerja dan bersaing secara global</p>
                                </div>
                            </div>
                            <div className="about-footer">
                                <button className="before">{">"}</button>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="about-item">
                    <div className="tittle">
                        <div className="icon">

                        </div>
                        <div className="text">
                            Kontak
                        </div>
                    </div>
                    <Link to='/about/kontak-kami'>
                        <div className="about-image-footer">
                            <div className="about-image contact">
                                <div className="about-image-content">
                                    <button className="after">{">"}</button>
                                    <p>Informasi lengkap mengenai kontak IBLAM School of Law</p>
                                </div>
                            </div>
                            <div className="about-footer">
                                <button className="before">{">"}</button>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="about-item">
                    <div className="tittle">
                        <div className="icon">

                        </div>
                        <div className="text">
                            Klinik Bantuan Hukum
                        </div>
                    </div>
                    <Link to='/about/bantuan-klinik-hukum'>
                        <div className="about-image-footer">
                            <div className="about-image helpCenter">
                                <div className="about-image-content">
                                    <button className="after">{">"}</button>
                                    <p>Dapatkan bantuan hukum dari para pakar di IBLAM School of Law</p>
                                </div>
                            </div>
                            <div className="about-footer">
                                <button className="before">{">"}</button>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="about-item">
                    <div className="tittle">
                        <div className="icon">

                        </div>
                        <div className="text">
                            Iblam Research and Consulting
                        </div>
                    </div>
                    <Link to='/about/iblam-resource-and-consulting-group'>
                        <div className="about-image-footer">
                            <div className="about-image researchConsult">
                                <div className="about-image-content">
                                    <button className="after">{">"}</button>
                                    <p>IBLAM Research and Consulting Group adalah lembaga think tank / pusat penelitian untuk isu-isu hukum kontemporer yang berdampak pada kebijakan publik.</p>
                                </div>
                            </div>
                            <div className="about-footer">
                                <button className="before">{">"}</button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Foot></Foot>
        </>
    )
}