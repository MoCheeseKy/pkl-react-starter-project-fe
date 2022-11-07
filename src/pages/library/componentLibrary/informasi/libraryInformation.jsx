import React from "react";
import './libraryInformation.scss'
import Head from "../../../../components/headlib/head";
import Foot from "../../../../components/footlib/foot";

export default function LibraryInformation() {
    return (
        <>
            <Head></Head>
            <div className="libraryInformation">
                <h1>Library Information</h1>
                <hr />
                <div className="information-content">
                    <div className="main-information">
                        <div className="text-wrap">
                            <h2>Address :</h2>
                            <p>JL. Kramat Raya No.25 Senen, Jakarta,  Indonesia - Kode Pos : 16426 </p>
                        </div>
                        <div className="text-wrap">
                            <h2>Jam Buka Layanan :</h2>
                            <p>Telefon Number : (021) 21392851</p>
                            <p>Senin - Jumat  :</p>
                            <p>Buka : 09.00 AM</p>
                            <p>Istirahat : 12.00 - 13.00 PM</p>
                            <p>Tutup : 19.00 PM</p>
                            <p>Sabtu - Minggu & Hari Libur Nasional :</p>
                            <p>TUTUP</p>
                        </div>
                        <div className="text-wrap">
                            <h2>Koleksi</h2>
                            <p>Buku teks, buku referensi, tesis, skripsi, dan laporan penelitian.</p>
                            <p>Publikasi serial harian seperti surat kabar serta serial bulanan seperti majalah.</p>
                        </div>
                        <div className="text-wrap">
                            <h2>Fasilitas</h2>
                            <p>OPAC (Online Public Access Catalogue)  & 18 loker dapat dipakai oleh pengunjung</p>
                            <p>Melayani Sirkulasi, Referensi & Pencarian Informasi</p>
                        </div>
                        <div className="text-wrap">
                            <h2>Syarat peminjaman buku</h2>
                            <p>Sudah terdaftar sebagai anggota perpustakaan Sekolah Tinggi Ilmu Hukum IBLAM</p>
                            <p>Menggunakan NPM/NIP. Tidak diperkenankan menggunakan ID atau tanda pengenal orang lain.</p>
                        </div>
                    </div>
                    <div className="rules-information">
                        <h2>Tata Tertib Iblam Library</h2>
                        <ol>
                            <li>Peminjaman buku hanya untuk sivitas Akademika IBLAM School Of Law yang terdaftar sebagai Anggota Perpustakaan;</li>
                            <li>Peminjaman buku tidak dibenarkan menggunakan ID orang lain;</li>
                            <li>Pengembalian buku yang terlambat dikenakan biaya keterlambatan sebesar RP. 5000 Perbuku/hari</li>
                            <li>Pengguna wajib memelihara buku yang dipinjam dengan sebaik-sebaiknya;</li>
                            <li>Apabila buku yang ipinjam hilang, maka pengguna harus mengganti dengan buku yang sama. Jika tidak mendapatkan diganti dengan tema yang sama, jumlah halaman yang sama atau mendekati an tahun terbit terbaru;</li>
                            <li>Pengguna tidak diperkenankan membawa keluar koleksi milih perputskaan tanpa melalui prosedur peminjaman;</li>
                            <li>Pengguna wajib menaruh barang bawaan ke dalam loker kecuali HP, Laptop;</li>
                            <li>Apabila kunci loker hilang, pengguna membaya denda sebesar Rp. 50.000;</li>
                            <li>Pengguna tidak dibenarkan membawa makanan dan minuman ke dalam perpustakaan;</li>
                            <li>Pengguna wajib menjaga kebersihan di lingkungan perpustakaan;</li>
                            <li>Setiap pengguna wajib mentaati tata tertib ini;</li>
                            <li>Petugas Perpustakaan berhak menegur dan meminta Pengguna untuk meninggalkan ruangan apabila dianggap menganggu ketenangan dan kenyamanan di dalam perpustakaan.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <Foot></Foot>
        </>
    )
}