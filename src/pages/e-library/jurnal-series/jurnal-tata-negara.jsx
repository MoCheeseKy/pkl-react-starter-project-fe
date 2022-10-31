import React from "react";
import Header from "../../../components/header/header";
import Subscribe from "../../../components/footer/subscribe/subscribe";
import Foot from "../../../components/footer/foot/foot";
import { Link } from "react-router-dom";
import './jurnal.scss'

export default function JurnalHukumTataNegara() {
    return (
        <>
            <Header></Header>
            <div className="jurnal-hukum">
                <div className="jurnal-headline">
                    <h1>Library</h1>
                </div>
                <div className="jurnal-tittle asd">
                    <div className="icon"></div>
                    <h2>Jurnal Hukum Tata Negara</h2>
                </div>
                <div className="jurnal-content">
                    <div className="main-content">
                        <p>Negara merupakan suatu organisasi yang terdiri dari berbagai fungsi yang saling mendukung. Hukum tata negara mengatur bagaimana tatanan dan fungsi tersebut berperan menjadi sebuah sistem yang harmonis. Berikut beberapa jurnal hukum tata negara yang dirilis oleh IBLAM School of Law</p>
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
                                <Link><h4>Optimalisasi Tata Kelola Benda Sitaan Negara pada Rumah Penyimpanan Benda Sitaan Negara</h4></Link>
                                <div className="writer">Noor Mulia Raudah</div>
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