import React from 'react'
import './admission.scss'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import Header from "../../components/header/header";
import Subscribe from "../../components/footer/subscribe/subscribe";
import Foot from "../../components/footer/foot/foot";

export default function Admission() {
  return (
    <div className='admission'>
        <Header />
        <div className="entry">
            <img src="https://iblam.ac.id/wp-content/uploads/2019/12/Header_06.jpg" alt="" />
        </div>
        <div className="content">
            <div className="breadcrumb">
            <Breadcrumb separator=">">
                <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to={'/admission'}>Admission</Link></Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div className="content-entry">
                <div className="txt">
                    <h3>
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/icon-1.png" alt="" />
                        Prosedur Pendaftaran
                    </h3>
                    <p>Beberapa langkah mudah untuk menjadi mahasiswa IBLAM School of Law</p>
                    <p><Link>Selengkapnya</Link></p>
                </div>
                <ul className='img'>
                    <li>
                        <img src="https://iblam.ac.id/wp-content/uploads/2020/05/dmission-prosedur-pendaftaran.jpg" alt="" />
                    </li>
                </ul>
            </div>
            <div className="content-entry">
                <ul className='img'>
                    <li>
                        <img src="https://iblam.ac.id/wp-content/uploads/2020/05/admission-beasiswa.jpg" alt="" />
                    </li>
                </ul>
                <div className="txt">
                    <h3>
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/icon-2.png" alt="" />
                        Beasiswa
                    </h3>
                    <p>Kuliah tenang, hati senang! Temukan pilihan program beasiswa yang cocok untukmu di sini!</p>
                    <p><Link style={{background: '#364DA8'}}>Selengkapnya</Link></p>
                </div>
            </div>
            <div className="content-entry">
                <div className="txt">
                    <h3 style={{color: '#F9A31C'}}>
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/icon-3.png" alt="" />
                        Program S1
                    </h3>
                    <p>Pendaftaran online program S1 Hukum IBLAM School of Law semudah buat akun sosial media!</p>
                    <p><Link>Selengkapnya</Link></p>
                </div>
                <ul className='img'>
                    <li>
                        <img src="https://iblam.ac.id/wp-content/uploads/2020/05/admission-program-s1.jpg" alt="" />
                    </li>
                </ul>
            </div>
            <div className="content-entry">
                <ul className='img'>
                    <li>
                        <img src="https://iblam.ac.id/wp-content/uploads/2020/05/Screenshot_1-1.jpg" alt="" />
                    </li>
                </ul>
                <div className="txt">
                    <h3>
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/icon-2.png" alt="" />
                        Program S2
                    </h3>
                    <p>Cukup dengan langkah mudah untuk jadi Master. Dapatkan informasinya di sini.</p>
                    <p><Link style={{background: '#364DA8'}}>Selengkapnya</Link></p>
                </div>
            </div>
        </div>
        <div className="help">
            <div className="left">
                <a href="https://iblam.ac.id/admission/kampus-jakarta">
                    <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/banner-sm-kampus-jakarta.jpg" alt="" />
                </a>
            </div>
            <div className="right">
                <a href="https://iblam.ac.id/admission/kampus-depok">
                    <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/banner-sm-kampus-depok.jpg" alt="" />
                </a>
            </div>
        </div>
        <Subscribe />
        <Foot />
    </div>
  )
}
