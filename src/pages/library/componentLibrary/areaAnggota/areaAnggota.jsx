import React from "react";
import './areaAnggota.scss'
import Head from "../../../../components/headlib/head";
import Foot from "../../../../components/footlib/foot";

export default function AreaAnggota() {
    return (
        <>
            <Head></Head>
            <div className="areaAnggota">
                <h1>Masuk Anggota Perpustakaan</h1>
                <hr />
                <p>Masukan ID anggota serta kata sandi yang diberikan oleh administrator sistem perpustakaan. Jika Anda anggota perpustakaan namun belum memiliki kata sandi, hubungi staf perpustakaan.</p>
                <h3>ID Anggota</h3>
                <input type="text" placeholder="Enter Member ID" />
                <h3>Kata Sandi</h3>
                <input type="text" placeholder="Enter Password" />
                <button>Masuk</button>
            </div>
            <Foot></Foot>
        </>
    )
}