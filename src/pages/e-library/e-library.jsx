import React from "react";
import Header from "../../components/header/header";
import Foot from "../../components/footer/foot/foot";
import Subscribe from "../../components/footer/subscribe/subscribe";
import { Link } from "react-router-dom";
import './e-library.scss'

export default function Elibrary() {
    return (
        <>
            <Header></Header>
            <div className="headline elibrary">
            </div>
            <div className="elibrary">
                <div className="elibrary-item">
                    <div className="icon">

                    </div>
                    <div className="library-image">
                        <h1>Tanya Jawab Hukum</h1>
                        <Link to='/e-library/tanya-jawab-hukum'><button>Selengkapnya . . .</button></Link>
                    </div>
                </div>
                <div className="elibrary-item">
                    <div className="icon">

                    </div>
                    <div className="library-image">
                        <h1>Jurnal Hukum tata Negara</h1>
                        <Link to='/e-library/jurnal-hukum-tata-negara'><button>Selengkapnya . . .</button></Link>
                    </div>
                </div>
                <div className="elibrary-item">
                    <div className="icon">

                    </div>
                    <div className="library-image">
                        <h1>Jurnal Hukum Bisnis</h1>
                        <Link to='/e-library/jurnal-hukum-bisnis'><button>Selengkapnya . . .</button></Link>
                    </div>
                </div>
                <div className="elibrary-item">
                    <div className="icon">

                    </div>
                    <div className="library-image">
                        <h1>Jurnal Hukum Pidana</h1>
                        <Link to='/e-library/jurnal-hukum-pidana'><button>Selengkapnya . . .</button></Link>
                    </div>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}