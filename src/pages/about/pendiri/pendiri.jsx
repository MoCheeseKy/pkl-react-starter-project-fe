import React from "react";
import "./pendiri.scss"
import Header from "../../../components/header/header";
import Foot from "../../../components/footer/foot/foot";
import Subscribe from "../../../components/footer/subscribe/subscribe";
import { Link } from "react-router-dom";

export default function Pendiri() {
    return (
        <>
            <Header></Header>
            <div className="page-pendiri">

                {/* Headline Handler . . . . */}
                <div className="headline"></div>
                <div className="nama-pendiri">
                    <i>Nama Pendiri</i>
                    <b>Alm. Dr. H. Edy Susanto, S.H., M.H., M.M., M.A.</b>
                </div>
                {/* Content Handler . . . . */}
                <div className="content asd">
                    <div className="biografi-pendiri">
                        <p>IBLAM School of Law lahir dari tangan Almarhum Dr. H. Edy Susanto, S.H., M.H., M.M., M.A. Beliau merupakan anak dari keluarga TNI yang kemudian melanjutkan pendidikan dari hasil kerja kerasnya. Dari kemandirian di sepanjang perjalanan hidup beliau tersebut, lahirlah komitmen untuk memperluas kesempatan bagi para sarjana hukum yang pada saat itu meningkat jumlahnya, tetapi sulit untuk mendapatkan pekerjaan atau bahkan berwirausaha.</p>
                        <p>Dari komitmen Almarhum Dr. H. Edy Susanto, S.H., M.H., M.M., M.A tersebut, lahirlah Institute of Business Law and Management (IBLAM) yang kemudian disebut sebagai IBLAM School of Law yang bukan hanya melahirkan para ahli di bidang hukum, tetapi juga berdaya lebih dan mampu menghadapi perubahan dunia. </p>
                        <p>Suami dari Hj. Asri Mulyanita, S.E., M.M yang lahir di Banyuwangi, pada 5 Oktober 1959 ini sangat mencintai dunia pendidikan. Dengan penuh semangat, beliau mengemban pendidikan di berbagai jurusan di perguruan tinggi, mulai dari Ilmu Teknik, Ekonomi, Hukum, hingga Manajemen. Kecintaannya tersebut bukan hanya untuk dirinya sendiri, namun juga dituangkan dengan lahirnya IBLAM School of Law dan Yayasan Tunas IBLAM yang bergerak dalam memberikan pendidikan bagi anak usia dini mulai dari Play Group, Taman Kanak-kanak, dan Sekolah Dasar. Selain itu, beliau juga sempat aktif dalam berbagai organisasi pendidikan, diantaranya sebagai Pimpinan Pondok Pesantren “Andalusia”, Ketua Yayasan Bhinneka Bunga, dan juga pernah menjabat sebagai Pengelola Politeknik Trisila Dharma di Jakarta. Di sela-sela waktunya, Almarhum Dr. H. Edy Susanto, S.H., M.H., M.M., M.A juga aktif di berbagai lembaga keagamaan seperti menjadi Pengurus Majelis Ulama Indonesia Kota Depok dalam Bidang Pemberdayaan Ekonomi serta menjadi Wakil Ketua Ikatan Persaudaraan Haji Indonesia Kota Depok. </p>
                        <p>Bapak dari Riandy Laksono, S.E, M.Sc dan Rahmat Dwi Putranto, S.H., M.H. ini juga merupakan sosok yang menginspirasi. Beliau dengan tekun mengamalkan apa yang ia tanamkan di IBLAM School of Law mengenai lulusan hukum yang harus memiliki sifat religius dalam memimpin dan menjalankan amanah yang telah diberikan, serta kemampuan wirausaha dengan berbagai bisnis yang beliau jalankan semasa hidupnya.</p>
                    </div>
                </div>
                <div className="side-info">
                    <Link to='/about/visi-misi'><div className="side-info-item visimisi"></div></Link>
                    <Link to='/about/iblam-campuss'><div className="side-info-item campuss"></div></Link>
                    <Link to='/about/kontak-kami'><div className="side-info-item contact"></div></Link>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}