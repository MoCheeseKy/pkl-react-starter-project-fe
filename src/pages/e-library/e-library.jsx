import React from "react";
import Header from "../../components/header/header";
import Foot from "../../components/footer/foot/foot";
import Subscribe from "../../components/footer/subscribe/subscribe";
import './e-library.scss'

export default function Elibrary() {
    return (
        <>
            <Header></Header>
            <div className="headline">
                <h1>E - Library</h1>
            </div>
            <div className="elibrary">
                <div className="elibrary-item">
                    <div className="icon">

                    </div>
                    <div className="library-image">
                        <h1>Tanya Jawab Hukum</h1>
                        <button>Selengkapnya . . .</button>
                    </div>
                </div>
                <div className="elibrary-item">
                    <div className="icon">

                    </div>
                    <div className="library-image">
                        <h1>Jurnal Hukum tata Negara</h1>
                        <button>Selengkapnya . . .</button>
                    </div>
                </div>
                <div className="elibrary-item">
                    <div className="icon">

                    </div>
                    <div className="library-image">
                        <h1>Jurnal Hukum Bisnis</h1>
                        <button>Selengkapnya . . .</button>
                    </div>
                </div>
                <div className="elibrary-item">
                    <div className="icon">

                    </div>
                    <div className="library-image">
                        <h1>Jurnal Hukum Pidana</h1>
                        <button>Selengkapnya . . .</button>
                    </div>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}