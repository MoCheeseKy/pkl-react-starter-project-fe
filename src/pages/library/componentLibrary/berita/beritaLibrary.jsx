import React from "react";
import './beritaLibrary.scss'
import { ClockCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function BeritaLibrary() {
    return (
        <>
            <div className="newsLibrary">
                <h1>Warta Perpustakaan</h1>
                <hr />
                <div className="notification">
                    <p>We have 2 news for you!</p>
                </div>
                <div className="newsLibraryItem">
                    <div className="date-time-info"><ClockCircleOutlined /><p>2021-08-25 10:11:10</p></div>
                    <h2>Library Information</h2>
                    <p>INFORMASI Address : JL. Kramat Raya No.25 Senen, Jakarta, Indonesia - Kode Pos : 16426 Jam Buka Layanan No Tlp : (021) 21392851 Senin - Jumat : Buka : 09.00 AM Istirahat : 12.00 - 13.00 PM Tutup : 19.00 PM Sabtu - Minggu & Hari Libur Nasional : TUTUP Koleksi Buku teks, ...</p>
                    <Link><button>Lanjutkan Membaca</button></Link>
                </div>
                <div className="newsLibraryItem">
                    <div className="date-time-info"><ClockCircleOutlined /><p>2021-08-25 10:11:10</p></div>
                    <h2>Pelatihan Aplikasi SLiMS Manajemen Perpustakaan di IBLAM Library</h2>
                    <p>Pelatihan Aplikasi SLiMS Manajemen Perpustakaan di IBLAM Library...</p>
                    <Link><button>Lanjutkan Membaca</button></Link>
                </div>
            </div>
        </>
    )
}