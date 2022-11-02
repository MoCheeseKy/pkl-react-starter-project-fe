import React from "react";
import "./sejarah.scss"
import Header from "../../../components/header/header";
import Foot from "../../../components/footer/foot/foot";
import Subscribe from "../../../components/footer/subscribe/subscribe";
import { WhatsAppOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function Sejarah() {
    return (
        <>
            <Header></Header>
            <div className="page-sejarah">
                {/* Headline Handler . . . . */}
                <div className="headline"></div>
                <div className="content"></div>
                {/* Content Handler . . . . */}
                <div className="content asd">
                    <div className="sejarah">
                        <div className="tittle">
                            <div className="icon">

                            </div>
                            <div className="text">
                                Sejarah Iblam
                            </div>
                        </div>
                        <div className="text-sejarah">
                            <p>Sekolah Tinggi Ilmu Hukum “IBLAM”memiliki sejarah yang panjang dalam perkembanganya. Tepatnya pada tanggal 27Agustus 1990 didirikan satu lembaga dengan nama “Iurisconsultus Group” yang didalamnya terdiri dari para pakarhukum, para praktisi hukum dan para mantan Hakim Agung, mantan PejabatKejaksaan Agung dan mantan Pejabat Departemen Kehakiman. Gagasan para pakardiatas berhasil merumuskan sebuah lembaga pendidikan yang bernama <b>Institute of Business Law and Management(“IBLAM”).</b> Lembaga tersebut bertujuan dalam rangka peningkatan mutu,kemahiran tenaga kerja dibidang hukum serta mempersiapkan tenaga-tenaga yangprofesional. Lembaga tersebut didirikan atas dasar sebuah kesadaran bahwapengetahuan dibidang hukum, baik di masa kini maupun di masa yangakan datangperlu dikuasai terutama untuk para pelaku bisnis, birokrat dan praktisi dalamrangka menghadapi dan memenangkan kompetesi global. </p>
                            <p>Dibalik penamaan <b> Institute of Business Law and Management (“IBLAM”) </b>ada sosok yang cukup berpengaruh yaitu Almarhum Dr. H. Edy Susanto,S.H., M.H., M.M., M.A. Beliau berpendapat seyogyanya pengangguran demikian tidak perlu terjadi, mengingat pembangunan di Negara kita yang besar dan berkesinambungan, terlebih lagi dalam mengantisipasi era globalisasi dan era pembangunan tinggal landas yang menggerakkan seluruh kegiatan masyarakat. Aspek-aspek hukum dari pembangunan tersebut memerlukan penanganan oleh para ahli hukum, sehingga dengan demikian secara logis seharusnya mampu menyerap para lulusan hukum. Melihat kenyataan ini, Almarhum Dr. H. Edy Susanto,S.H., M.H., M.M., M.A berpendapat bahwa keadaan ini tidak dapat dibiarkan dan beliau memutuskan untuk memprakarsai upaya untuk meningkatkan mutu atau nilai tambah lulusan hukum  dengan menyelenggarakan pendidikan dan pelatihan keterampilan yang inovatif dan sesuai dengan perkembangan dunia. Dari gagasan yangluhur ini, beliau mendapat dukungan secara aktif dari berbagai begawan hukum yang tersohor di Indonesia dengan ikut terlibat dalam penyusunan nilai, sistem hingga materi pembelajaran yang luar biasa.</p>
                            <p>Seiring berjalanya waktu, untuk semakinmewujudkan Visi, Misi dan Program tersebut, akhirnya Alm. Dr. H. Edy Susanto,S.H., M.H., M.M., M.A mendirikan Yayasan Lembaga Pengembangan Ilmu Hukum danManajemen – Institute of Business Law and Management (LPIHM “IBLAM”) yangmenaungi aktivitas perkuliahan formal dari Sekolah Tinggi Ilmu Hukum “IBLAM”.berdirinya Program Diploma III Management Hukum, Program Sarjana Hukum danProgram Magister Hukum Sekolah Tinggi IlmuHukum “IBLAM” di Jakarta yangmasing-masing telah di Akreditasi oleh Departemen Pendidikan Nasional RI denganSK No. 95/D/O/1993 dan SKNo. 78/D/O/1993 berikut telah memperoleh perpanjanganizin</p>
                            <p>Kampus yang kini disebut IBLAM Schoolof Law yang berada di bawah naungan Yayasan LPIHM IBLAM telah mengalamiperkembangan yang begitu pesat karena dukungan sosok seorang Pendiri yangberjiwa sederhana, ramah, ulet dan memiliki semangat tinggi dalam membanguntonggak dan tunas-tunas bangsa dalam aspek pendidikan,yaitu Bapak Alm. Dr. H.Edy Susanto, S.H., M.H., M.M., M.A. Kiprahnya dalam rangka ikut mencerdasakananak bangsa tidak lagi dapat diragukan, selain beliau membangun lembagapendidikan tingkat perguruan tinggi yang telah mampu meluluskan ribuan  peserta didik  dan  lulusan tersebut telah banyak mengisi posisi strategisbaik di lembaga pemerintahan, institusi hukum, institusi non-hukum dan sosialbudaya lainnya, beliaupun membangun lembaga pendidikan tingkat PG, TK danSDTunas IBLAM. Segudang penghargaanpun telah diraih oleh peserta didiknya.</p>
                            <p>Perjalanan panjang IBLAM School of Lawdalam mengabdi dan berkontribusi bagi bangsa Indonesia di dalam duniaPendidikan, telah menghasilkan ribuan lulusan terbaik yang tersebar luas dibeberapa Institusi Hukum dan non-Institusi Hukum yang mampu bersaing diIndustri 4.0. Sesuai dengan Visi-Misi terbarunya, IBLAM ingin memperkuatkomitmennya dalam menghasilkan sumber daya manusia yang unggul dibidang hukumdan meyakini bahwa Integritas adalah kunci perbaikan SDM di bidang hukum, danIntegritas juga menjadi visi utama serta pilarutama dari 4 pilar perjuangankami yang terdiri dari Integritas, Religius, Nasionalis dan Berdaya saing Global.</p>
                            <p>Maka dari itu, bertepatan dengan harianti korupsi sedunia tanggal 9 Desember 2019, IBLAM telah meresmikan Visi-Misiterbaru yaitu : (1) “Menjadi Sekolah Tinggi Ilmu Hukum yang berintegritas,unggul di tingkat nasional dan berdaya saing global”; (2) Penegasan penyebutanbrand Institusi menjadi “IBLAM School of Law / IBLAM SL”; (3) Logo baru yangmerupakan kombinasi bentuk 4 bulat yang melambangkan elemen perjuangan mencapaikemajuan yang ada di IBLAM SL yaitu (a) dosen; (b) mahasiswa; (c) masyarakatdan (d) pemerintah, lalu ada bentuk kotak dengan bulatan ditengah sebagailambang satu tujuan dalam saturumah perjuangan untuk menghasilkan ahli hukumyang berintegritas dan 4 garis lurus yang melambangkan 4 nilai-nilai dasarperjuangan IBLAM SL, yang apabila semuanya digabungkan akan terlihat sebagai perisaiyang bermakna bahwa pendidikan hukum harus dijadikan instrument untukmelindungi dan menghadapi serangan kebodohan, kekacauan dan segala ketidakadilan.</p>
                            <p>Diharapkan pada tahun-tahun mendatangdi bawah pengelolaan Tim Manajemen yang baik, IBLAM School of Law akanmemperoleh penghargaan dan pengakuan dari masyarakat sebagai perguruan tinggiyang peduli pada perkembangan dan tegaknya supremasi hukum di Negeri tercintaini.</p>
                        </div>
                    </div>
                    <div className="sider">
                        <div className="help">
                            <h1>Butuh Bantuan ?</h1>
                            <div className="text">Tim IBLAM siap menjawab kebutuhanmu</div>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Jakarta</div></button>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Depok</div></button>
                        </div>
                        <Link to='/about/visi-misi'><div className="side-info visimisi"></div></Link>
                        <Link to='/about/iblam-campuss'><div className="side-info campuss"></div></Link>
                        <Link to='/about/kontak-kami'><div className="side-info contact"></div></Link>
                    </div>
                </div>
                <div className="help">
                    <h1>Butuh Bantuan ?</h1>
                    <div className="text">Tim IBLAM siap menjawab kebutuhanmu</div>
                    <button><WhatsAppOutlined /> <div className="text">Kampus Jakarta</div></button>
                    <button><WhatsAppOutlined /> <div className="text">Kampus Depok</div></button>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}