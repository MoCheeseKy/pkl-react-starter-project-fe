import React from "react";
import './skripsi.scss'
import Head from "../../../../components/headlib/head";
import Foot from "../../../../components/footlib/foot";

export default function Skripsi() {
    return (
        <>
            <Head></Head>
            <div className="skripsi">
                <h1>Penyerahan Tesis Skripsi</h1>
                <hr />
                <p>Lampiran Prosedur Penyerahan Skripsi dan CD</p>
                <ol>
                    <li>Skripsi dan Tesiss yang diterima seperti lembar pernyataan, lembar persetujuan, lembar pengesehaan, dan lembar persetujuan publikasi sudah ditandatangani dan dicap oleh stempel Prodi.</li>
                    <li>CD yang diserahkan :</li>
                </ol>
                <ul>
                    <li>CD-RW dilengkapi stiker berisi Logo Kampus, Judul, Nama, NPM Mahasiswa, dan Prodi.</li>
                    <li>Penutup CD-RW berbentuk segiempat terbuat dari plastic</li>
                    <li>ISI CD-RW skripsi berisi file-file terpisah dan dengan format PDF.</li>
                    <li>Seluruh file skripsi dapat dibuka, akses, dan copy/paste (tidak dalam keadaan terkunci dan diberi sandi/password rahasia)</li>
                    <li>Lembar pernyataan, lembar pengesahan persetujuan, lembar pengesahan dan lembar persetujuan publikasi discan sebelum dibuat dalam bentuk file.</li>
                </ul>
            </div>
            <Foot></Foot>
        </>
    )
}
