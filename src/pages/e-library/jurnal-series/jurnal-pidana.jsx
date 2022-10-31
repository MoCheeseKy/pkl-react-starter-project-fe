import React from "react";
import Header from "../../../components/header/header";
import Subscribe from "../../../components/footer/subscribe/subscribe";
import Foot from "../../../components/footer/foot/foot";
import { Link } from "react-router-dom";
import './jurnal.scss'

export default function JurnalHukumPidana() {
    return (
        <>
            <Header></Header>
            <div className="jurnal-hukum">
                <div className="jurnal-headline">
                    <h1>Library</h1>
                </div>
                <div className="jurnal-tittle">
                    <div className="icon"></div>
                    <h2>Jurnal Hukum Pidana</h2>
                </div>
                <div className="jurnal-content">
                    <div className="main-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et pellentesque elit, eu dapibus massa. Ut nunc purus, iaculis vel felis vel, elementum faucibus purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus cursus nec mi id tempor Phasellus cursus nec mi id tempor.</p>
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
                            <div className="issn-number">ISSN: 2503-1465</div>
                        </div>
                    </div>
                    <div className="side-content">
                        <p>Publikasikan jurnal Anda, kirim melalui email ke jurnal@iblam.ac.id</p>
                        <Link to='/e-library/jurnal-hukum-bisnis'><button>Jurnal Hukum Bisnis</button></Link>
                        <Link to='/e-library/jurnal-hukum-pidana'><button>Jurnal Hukum Pidana</button></Link>
                        <Link to='/e-library/jurnal-hukum-tata-negara'><button>Jurnal Hukum Tata Negara</button></Link>
                    </div>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}