import React from "react";
import './visitor.scss';
import { Carousel } from "antd";

export default function Visitor() {
    return (
        <>
            <div className="visitor">
                <div className="visitor-login">
                    <div className="visitor-login-content">
                        <h1>Selamat datang di IBLAM Library</h1>
                        <p>Harap isi ID anggota atau nama Anda.</p>
                        <h3>ID Anggota</h3>
                        <input type="text" />
                        <h3>Institusi</h3>
                        <input type="text" />
                        <p className="input">Cukup masukkan ID Anda jika Anda anggota dari IBLAM Library</p>
                        <button>Masuk</button>
                    </div>
                    <div className="signature">Ditenagai oleh <p>SLiMS</p></div>
                </div>
                <div className="visitor-carousel">
                    <div className="quotes">
                        <h4>The place to improve the world is first in one's own heart and head and hands.</h4>
                        <div className="by">-- Robert M. Pirsig</div>
                    </div>
                    <Carousel className="Carousel" effect="fade" autoplay>
                        <div className="carousel-content"><div className="image-satu"></div></div>
                        <div className="carousel-content"><div className="image-dua"></div></div>
                        <div className="carousel-content"><div className="image-tiga"></div></div>
                        <div className="carousel-content"><div className="image-empat"></div></div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}