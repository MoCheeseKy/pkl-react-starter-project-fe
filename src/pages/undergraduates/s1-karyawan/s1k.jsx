import React from "react";
import "./s1k.scss"
import Header from "../../../components/header/header";
import Foot from "../../../components/footer/foot/foot";
import Subscribe from "../../../components/footer/subscribe/subscribe";
import { WhatsAppOutlined } from '@ant-design/icons';
import { SwapRightOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function ProgramKaryawan() {
    return (
        <>
            <Header></Header>
            <div className="program-karyawan">
                <div className="proka-headline">
                    <h1>S1 Karyawan</h1>
                </div>
                <div className="proka-content">
                    <div className="main-content">
                        <div className="main-content-tittle">
                            <div className="icon"></div>
                            <h2>S1 Regular Sore</h2>
                        </div>
                        <p>ANDA SIBUK BEKERJA TAPI INGIN KULIAH S1. Segera Bergabung dengan Program S-1 Reguler Sore.  Badan Akreditasi Nasional Perguruan Tinggi, (BAN-PT) menetapkan STIH IBLAM, sebagai peringkat <b>Akreditasi B.</b> </p>
                        <div className="main-content-image"></div>
                        <p>IBLAM Research and Consulting Group adalah lembaga think tank/ pusat penelitian untuk isu-isu hukum kontemporer yang berdampak pada kebijakan publik. Lebih dari hukum itu sendiri, IBLAM Research and Consulting Group fokus untuk membahas topik mengenai perkembangan dunia bisnis, teknologi dan konstitusi.</p>
                        <p>Program S-1 Reguler Sore dirancang untuk para karyawan yang sedang bekerja diperusahaan-perusahaan multinasional atau perusahaan domestik terkemuka yang ingin mengejar karirnya, atau pengusaha, atlet, artis, dan para profesional lainnya yang ingin mengembangkan keterampilan dan pengetahuan di bidang hukum.</p>
                        <p>Program S-1 Reguler Sore menggabungkan pembelajaran teori dan aplikasi praktis sehingga dapat meningkatkan keterampilan dan pengetahuan mahasiswa di bidang hukum.</p>
                        <p><b>JADWAL PERKULIAHAN</b></p>
                        <p className="different">Kurikulum dan proses belajar diatur secara sistematis agar mahasiswa dapat lulus tepat waktu. Jadwal studi disesuaikan dengan kesibukan para karyawan sehingga memungkinkan setiap mahasiwa untuk tetap bekerja dan belajar pada hari yang sama.</p>
                        <p>* jadwal bersifat tentatif</p>
                    </div>
                    <div className="side-content">
                        <div className="help">
                            <h2>Butuh Bantuan ?</h2>
                            <div className="text">Tim IBLAM siap menjawab kebutuhanmu</div>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Jakarta</div></button>
                            <button><WhatsAppOutlined /> <div className="text">Kampus Depok</div></button>
                        </div>
                        <div className="side-content-nav">

                            <div className="side-content-nav-item">
                                <h3>Biaya Kuiah</h3>
                                <Link><button>Download Biaya S1 <SwapRightOutlined /></button></Link>
                                <Link><button>Download Biaya S2 <SwapRightOutlined /></button></Link>
                            </div>


                            <div className="side-content-nav-item">
                                <h3>Download Brochure</h3>
                                <Link><button>Download Brochure S1 <SwapRightOutlined /></button></Link>
                                <Link><button>Download Brochure S2 <SwapRightOutlined /></button></Link>
                            </div>


                            <div className="side-content-nav-item">
                                <h3>Apply Sekarang</h3>
                                <Link><button>Apply Now <SwapRightOutlined /></button></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Foot></Foot>
        </>
    )
}