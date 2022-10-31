import React from 'react'
import './sispen.scss'
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import Header from "../../../components/header/header";
import Foot from '../../../components/footer/foot/foot';

export default function Sispen() {
  return (
    <div className='sispen'>
        <Header/>
        <div className="entry">
            <img src="https://iblam.ac.id/wp-content/uploads/2019/12/Header_04.jpg" alt="" />
        </div>
        <div className="content">
            <div className="container">
                <div className="breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/academic'}>Academic</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/academic/sistem-pendidikan'}>Sistem Pendidikan</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="main-title">
                    <h2>
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/icon-3.png" alt="" />&nbsp;
                        <div className="br"><br /></div>
                        <strong>Sistem Pendidikan</strong>
                    </h2>
                </div>
                <div className="isi">
                    <div className="img-isi">
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/sistem-pendidikan-1.jpg" alt="" />
                    </div>
                    <div className="text-isi">
                        <h4><strong>Berorientasi kepada Praktek Hukum</strong></h4>
                        <p>Mahasiswa sudah dengan praktek hukum sejak semester pertama, melalui pengenalan undang-undang, peraturan perundangan, maupun jarya ilmiah bidang hukum di laboratorium hukum STIH IBLAM.</p>
                        <p>Mahasiswa juga diwajibkan mengikuti praktek simulasi peradilan serta praktik kemahiran hukum, teknik beracara, litigasi, serta praktek bantuan dan konsultasi hukum melalui Lembaga Konsultasi dan Bantuan Hukum (LKBH) IBLAM.</p>
                        <h4><strong>Mencetak lulusan yang berjiwa wirausaha</strong></h4>
                        <p>STIH IBLAM mendorong para mahasiswanya memiliki jiwa wirausaha dan membantu mahasiswanya memiliki keahlian berwirausaha di bidang hukum, seperti menjadi: Konsultan hukum, pengacara, notaris, dll. Sistem Kurikulum akademik yang berorientasi praktek mendorong mahasiswa untuk memiliki keahlian dan semangat berwirausaha di sektor hukum.</p>
                    </div>
                    <div className="img-isi">
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/sistem-pendidikan-2.jpg" alt="" />
                    </div>
                    <div className="img-isi">
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/sistem-pendidikan-3.jpg" alt="" />
                    </div>
                    <div className="text-isi">
                        <h4><strong>Mencetak lulusan yang profesional dan bernilai tinggi di pasar kerja</strong></h4>
                        <p>Mahasiswa akan mendapatkan pelatihan praktek kerja professional melalui program magang di lembaga hukum, pemerintahan, kantor pengacara, sektor swasta dan lembaga penelitian. Penyaluran didasarkan pada minat dan potensi mahasiswa.</p>
                        <p>Untuk menunjang karir professional STIH IBLAM Mewajibkan mahasiswa untuk memiliki Sertifikat TOEFL resmi dan minimal 2 sertifikat keahlian lainnya sesuai potensi dan minatnya, misalnya: sertifikat kemampuan mengoperasikan Ms. Office, sertifikat pelatihan legal drafting, dll. Dokumen-dokumen tersebut dijadikan sebaga syarat kelulusan mahasiswa.</p>
                        <h4><strong>Lulusan yang menjunjung tinggi etika profesi hukum</strong></h4>
                        <p>STIH IBLAM senantiasa mengajarkan kepada mahasiswanya untuk menjunjung tinggi etika-etika yang berlaku dalam profesi hukum. Mahasiswa juga diberikan pembekalan mengenai bagaimana kita harus berkontribusi kepada reformasi dan perbaikan hukum di Indonesia.</p>
                    </div>
                    <div className="img-isi">
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/sistem-pendidikan-4.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="links-sispen">
                <Link><img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/banner-sm-admission.png" alt="" /></Link>
                <Link><img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/banner-sm-kurikulum.png" alt="" /></Link>
            </div>
        </div>
        <Foot/>
    </div>
  )
}