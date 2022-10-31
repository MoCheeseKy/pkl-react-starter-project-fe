import React from "react";
import Header from "../../../components/header/header";
import Subscribe from "../../../components/footer/subscribe/subscribe";
import Foot from "../../../components/footer/foot/foot";
import { Link } from "react-router-dom";
import './jurnal.scss'

export default function JurnalHukumBisnis() {
    return (
        <>
            <Header></Header>
            <div className="jurnal-hukum">
                <div className="jurnal-headline">
                    <h1>Library</h1>
                </div>
                <div className="jurnal-tittle">
                    <div className="icon"></div>
                    <h2>Jurnal Hukum Bisnis</h2>
                </div>
                <div className="jurnal-content">
                    <div className="main-content">
                        <p>Untuk menciptakan kegiatan perekonomian atau kegiatan bisnis yang sehat, berbagai aturan disiapkan untuk menjamin para pelakunya. Berikut jurnal hukum bisnis yang membahas berbagai aspek kajian tersebut dan telah dirilis oleh IBLAM School of Law.</p>
                        <div className="group-p">
                            <p>Available online since 2016</p>
                            <p>ISSN: 0125-9687 (Print) | 2503-1465 (Online)</p>
                            <p>Nationally Accredited (No. 48a/KPT/2017) 2017-2022</p>
                        </div>
                        <p>Indexed by:</p>
                        <div className="indexed-image">

                        </div>
                        {/* .... */}
                        <div className="jurnal-content-main">
                            <h3>Vol 49, No 3 (2019)</h3>
                            <div className="jurnal-item">
                                <Link><h4>Artikel – Menyongsong Kualitas Kelembagaan KPPU dengan Memaksimalkan Efektivitas Putusan</h4></Link>
                                <div className="writer">Noor Mulia Raudah</div>
                            </div>
                            <div className="jurnal-item">
                                <Link><h4>Contoh Jurnal BIsnis</h4></Link>
                                <div className="writer">Yulia</div>
                            </div>
                            <div className="jurnal-item">
                                <Link><h4>Pembaharuan Peraturan Hukum Perdagangan 2019</h4></Link>
                                <div className="writer">Dr. Prof. Agus Wahid Susanto, S.H.</div>
                            </div>
                            <div className="issn-number">ISSN: 2503-1465</div>
                        </div>
                    </div>
                    <div className="side-content">
                        <p>Publikasikan jurnal Anda, kirim melalui email ke jurnal@iblam.ac.id</p>
                        <Link to='/e-library/tanya-jawab-jurnal-hukum-bisnis'><button>Jurnal Hukum Bisnis</button></Link>
                        <Link to='/e-library/tanya-jawab-jurnal-hukum-pidana'><button>Jurnal Hukum Pidana</button></Link>
                        <Link to='/e-library/tanya-jawab-jurnal-hukum-tata-negara'><button>Jurnal Hukum Tata Negara</button></Link>
                    </div>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}