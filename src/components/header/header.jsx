import React from "react";
import { Link } from "react-router-dom";
import './header.scss'

export default function Header() {
    return (

        <div className="header">
            <div className="logo">
                <div className="img">

                </div>
            </div>
            <nav>
                <div className="information">
                    <div className="list"></div>
                    <div className="list">Covid 19</div>
                    <div className="list">Informasi Publik</div>
                    <Link to={'/pendaftar'}>
                        <div className="list">Pendaftaran</div></Link>
                    <Link to={'/login'}>
                        <div className="list">Login</div>
                    </Link>
                </div>
                <div className="router">
                    <div className="list">Tentang Universitas</div>
                    <div className="list">Pendidikan</div>
                    <div className="list">Dosen</div>
                    <div className="list">Mahasiswa</div>
                    <div className="list">Lulusan</div>
                    <div className="list">Penerimaan</div>
                </div>
            </nav>
        </div>
    )
}