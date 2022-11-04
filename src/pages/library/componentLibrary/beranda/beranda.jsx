import React from "react";
import { Link } from "react-router-dom";
import './beranda.scss'

export default function Beranda() {
    return (
        <>
            <div className="berandaLibrary">
                <h1>Pilih subjek yang menarik bagi Anda</h1>
                <div className="subject-choice">
                    <div className="subject-choice-item">
                        <div className="choice-image sastra"></div>
                        <div className="choice-name">kesastraan</div>
                    </div>
                    <div className="subject-choice-item">
                        <div className="choice-image ilmuSosial"></div>
                        <div className="choice-name">ilmu-ilmu sosial</div>
                    </div>
                    <div className="subject-choice-item">
                        <div className="choice-image ilmuTerapan"></div>
                        <div className="choice-name">ilmu-ilmu terapan</div>
                    </div>
                    <div className="subject-choice-item">
                        <div className="choice-image seniHiburan"></div>
                        <div className="choice-name">kesenian, hiburan, dan olahraga</div>
                    </div>
                    <div className="subject-choice-item">
                        <div className="choice-image other"></div>
                        <div className="choice-name">lainnya</div>
                    </div>
                </div>

                <div className="BooksContent">
                    <h2>Yang populer di antara koleksi kami</h2>
                    <p>Koleksi-koleksi kami yang dibaca oleh banyak pengunjung perpustakaan. Cari. Pinjam. Kami harap Anda menyukainya</p>
                    <div className="book-type-nav">
                        <Link><button>Hukum</button></Link>
                        <Link><button>pengantar ilmu hukum</button></Link>
                        <Link><button>perlindungan konsumen</button></Link>
                        <Link><button>hukum kepailitan</button></Link>
                        <Link><button>Hukum bisnis</button></Link>
                    </div>
                    <div className="book-wrapper">
                        <div className="book-item">
                            <div className="book-item-image popularFirst"></div>
                            <div className="book-tittle">Hukum agraria</div>
                        </div>
                        <div className="book-item">
                            <div className="book-item-image popularSecond"></div>
                            <div className="book-tittle">Pengantar Ilmu Hukum</div>
                        </div>
                        <div className="book-item">
                            <div className="book-item-image popularThird"></div>
                            <div className="book-tittle">KEJAHATAN MAYANTARA (Cyber Crime)</div>
                        </div>
                        <div className="book-item">
                            <div className="book-item-image popularFour"></div>
                            <div className="book-tittle">Perlindungan Hukum E-Commerce</div>
                        </div>
                        <div className="book-item">
                            <div className="book-item-image popularFive"></div>
                            <div className="book-tittle">Pengantar Ilmu Hukum</div>
                        </div>
                        <div className="book-item">
                            <div className="book-item-image popularSix"></div>
                            <div className="book-tittle">ILMU NEGARA Pengantar, Metode, dan Sejarah Perkembangan</div>
                        </div>
                    </div>
                </div>

                <div className="BooksContent">
                    <h2>Koleksi baru dan diperbarui</h2>
                    <p>Merupakan daftar koleksi-koleksi terbaru kami. Tidak semuanya baru, adapula koleksi yang data-datanya sudah diperbaiki. Selamat menikmati</p>
                    <div className="book-type-nav">
                        <Link><button>Hukum</button></Link>
                        <Link><button>Metedologi</button></Link>
                        <Link><button>Undang - undang</button></Link>
                        <Link><button>Cyber law</button></Link>
                        <Link><button>Hukum tata negara</button></Link>
                    </div>
                    <div className="book-wrapper">
                        <div className="book-item">
                            <div className="book-item-image newFirst"></div>
                            <div className="book-tittle">Hukum agraria</div>
                        </div>
                        <div className="book-item">
                            <div className="book-item-image newSecond"></div>
                            <div className="book-tittle">Pengantar Ilmu Hukum</div>
                        </div>
                        <div className="book-item">
                            <div className="book-item-image newThird"></div>
                            <div className="book-tittle">KEJAHATAN MAYANTARA (Cyber Crime)</div>
                        </div>
                        <div className="book-item">
                            <div className="book-item-image newFour"></div>
                            <div className="book-tittle">Perlindungan Hukum E-Commerce</div>
                        </div>
                        <div className="book-item">
                            <div className="book-item-image newFive"></div>
                            <div className="book-tittle">Pengantar Ilmu Hukum</div>
                        </div>
                        <div className="book-item">
                            <div className="book-item-image newSix"></div>
                            <div className="book-tittle">ILMU NEGARA Pengantar, Metode, dan Sejarah Perkembangan</div>
                        </div>
                    </div>
                </div>

                <div className="collectionLovers">
                    <h2>Penikmat Koleksi tahun ini</h2>
                    <p>Pengunjung terbaik kami, ada di sini. Nama dan foto Anda juga bisa muncul di sini. Rajin-rajinlah berkunjung dan membaca</p>
                    <div className="collectionLovers-item">
                        <div className="collectionLovers-user">
                            <div className="user-profile-image"></div>
                            <div className="user-name">MOSES S KARAENG</div>
                            <div className="user-job">Mahasiswa Kramat</div>
                            <div className="loans-title">
                                <b>5</b>
                                <p>Loans</p>
                                <p className="wall">|</p>
                                <b>5</b>
                                <p>Title</p>
                            </div>
                        </div>
                        <div className="collectionLovers-user">
                            <div className="user-profile-image"></div>
                            <div className="user-name">MOSES S KARAENG</div>
                            <div className="user-job">Mahasiswa Kramat</div>
                            <div className="loans-title">
                                <b>5</b>
                                <p>Loans</p>
                                <p className="wall">|</p>
                                <b>5</b>
                                <p>Title</p>
                            </div>
                        </div>
                        <div className="collectionLovers-user">
                            <div className="user-profile-image"></div>
                            <div className="user-name">MOSES S KARAENG</div>
                            <div className="user-job">Mahasiswa Kramat</div>
                            <div className="loans-title">
                                <b>5</b>
                                <p>Loans</p>
                                <p className="wall">|</p>
                                <b>5</b>
                                <p>Title</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}