import React from 'react'
import './pengajar.scss'
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import Header from "../../../components/header/header";
import Foot from '../../../components/footer/foot/foot';

export default function Pengajar() {
  return (
    <div className='pengajar'>
        <Header/>
        <div className="entry">
            <img src="https://iblam.ac.id/wp-content/uploads/2019/12/Header_05.jpg" alt="" />
        </div>
        <div className="content">
            <div className="container">
                <div className="breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/academic'}>Academic</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/academic/pengajar'}>Pengajar</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="main-title">
                    <h2>
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/icon-1.png" alt="" />
                        <div className="br"><br /></div>
                        <strong>Pengajar</strong>
                    </h2>
                </div>
                <div className="isi">
                    <div className="isi-kiri">
                        <div className="isian">
                            <div className="s1">
                                <img src="https://iblam.ac.id/wp-content/uploads/2019/11/pengajar-s1.png" alt="" />
                            </div>
                            <div className="txt">
                                <img src="https://iblam.ac.id/wp-content/uploads/2019/11/pengajar-1.jpg" alt="" />
                                <h4><strong>Dr. Iman Santoso, SH, MH.</strong></h4>
                                <p>Dr. Adi Sujatno, SH., MH.br <br />
                                Dr. Amin Muslich, SH., MH. <br />
                                Dr. Ahmad Yulianto Ihsan, SH., MH. <br />
                                Dr. Alfitrah, SH, MH. <br />
                                Agung Damarsasongko, SH., MH <br />
                                Amsori, SH., MH., MM <br />
                                Andri Wahyudi, SH., MH <br />
                                Ardiansyah, SH, MH. <br />
                                August Hamonangan Pasaribu, SH, MH. <br />
                                Arrum Budi Leksono, ST, SH, MH. <br />
                                Budi Purwanto, SH., MH <br />
                                Budi Suharto, SH., SE., M.Kn <br />
                                Burhanuddin Hasan, SH., MH. <br />
                                Charles P., SH., MH <br />
                                Dahlan Suherlan, SH, MH. <br />
                                Fatimah Ratna Wijayanthi, SH., MH. <br />
                                Dr. Gindo L. Tobing, SH, MA. <br />
                                Fakhlur S.Sos., M.H. <br />
                                Gunawan Nachrawi, SH., MH</p>
                            </div>
                            <div className="txt">
                                <img src="https://iblam.ac.id/wp-content/uploads/2019/11/pengajar-2.jpg" alt="" />
                                <h4><strong>Dr. Gindo L. Tobing, SH, MA.</strong></h4>
                                <p>H. Anshori, SH., MH., M.Pd.l <br />
                                H. M. Yusuf, SH., MBA., MH <br />
                                Herril Fahmi, SH., MH <br />
                                Hery Qomarudin, SH., MH <br />
                                Dr. Iman Santoso, SH, MH. <br />
                                Irwansyah, SH., MH. <br />
                                Jamiatur Robekha, SH, MH. <br />
                                Justin Adrian, SH, MH. <br />
                                Kamsul Hasan, SH, MH. <br />
                                Dr. Marjan Miharja, SH., MH. <br />
                                Dr. Muhammad Hatta, SH., M.Kn. <br />
                                Mas Aditya Subagyo, SH, MH. <br />
                                Muhammad Rizal Rustam, SH, MH. <br />
                                Muhammad Irayadi, SH, MH. <br />
                                Nur Setia Alam, SH., MH <br />
                                Dr. Parasian Simanungkalit, SH., MH. <br />
                                Papang Sapari, SH., MH <br />
                                Pitriadin Rahamin Rojali, SH, MH.</p>
                            </div>
                            <div className="txt">
                                <img src="https://iblam.ac.id/wp-content/uploads/2019/11/pengajar-3.jpg" alt="" />
                                <h4><strong>Titiek Guntari, SH., MH</strong></h4>
                                <p>PL. Tobing, SH., MH <br />
                                Rr. Lyia Aina Prihadiati, SH., MH <br />
                                Sarmidi, S.Ag., MA <br />
                                Soelistyowidi Purwanto, SH., MH <br />
                                Sugeng Djatmiko, SH., SE., MH., MM <br />
                                Sofa Laela, SH, MH. <br />
                                Titiek Guntari, SH., MH <br />
                                Ir. Vidi Galenso Syarief, SH., MH. <br />
                                Warsifah, SH., MH <br />
                                Wiend Sakti Myharto, SH, LLM. <br />
                                Yana Sukma Permana, SH, MH. <br />
                                Yasarman, SH., MH <br />
                                Yusuf M. Said, SH, MH.</p>
                            </div>
                        </div>
                    </div>
                    <div className="isi-kanan">
                        <div className="isian">
                            <div className="s2">
                                <img src="https://iblam.ac.id/wp-content/uploads/2019/11/pengajar-s2.png" alt="" />
                            </div>
                            <div className="txt">
                                <img src="https://iblam.ac.id/wp-content/uploads/2019/11/pengajar-4.jpg" alt="" />
                                <h4><strong>Prof. Dr. Waty Suwarty, SH., MH.</strong></h4>
                                <p>Prof. A. Masyhur Effendi, SH., MS. <br />
                                Dr. Adi Sujatno, SH., MH. <br />
                                Dr. Amin Muslich, SH., MH. <br />
                                Dr. Ahmad Yulianto Ihsan, SH., MH. <br />
                                Dr. Abdullah, SH, MH. <br />
                                Dr. Aziz Budianto <br />
                                Dr. Abunawas, SH, MSi. <br />
                                Dr. Chandra Yusuf, SH, LLM, MBA, MMgt. <br />
                                Dr. Drs. Dadang Herly, SH., MH <br />
                                Dr. Dodo SDW, SH., MH. <br />
                                Dr. Damiri, SH, MH. <br />
                                Dr. Hj. Elza Syarief, SH., MH. <br />
                                Dr. Ervan Fathurokhman Adiwidjaja, SH., MH.</p>
                            </div>
                            <div className="txt">
                                <img src="https://iblam.ac.id/wp-content/uploads/2019/11/pengajar-5.jpg" alt="" />
                                <h4><strong>Dr. Ibrahim, SH., LLM.</strong></h4>
                                <p>Dr. Gindo L. Tobing, SH, MH. <br />
                                Prof. Dr. Herman Soesangobeng, SH., MH. <br />
                                Dr. H. Edy Susanto, SH., MH., MA. <br />
                                Dr. Hasbullah F. Sjawie, SH., MH. <br />
                                Prof. Dr. Indrati Rini, SH, MS <br />
                                Dr. Ibrahim, SH., LLM. <br />
                                Dr. Juwita, SH, MH. <br />
                                Prof. M. Taufik Makarawo, SH., MH. <br />
                                Dr. Muhammad Hatta, SH., M.Kn. <br />
                                Drs. Misbahul Huda, SH., MHi. <br />
                                Ngatino, SH., MH. <br />
                                Dr. Parasian Simanungkalit, SH., MH. <br />
                                Dr. Riyatno, SH., LLM.</p>
                            </div>
                            <div className="txt">
                                <img src="https://iblam.ac.id/wp-content/uploads/2019/11/pengajar-6.jpg" alt="" />
                                <h4><strong>Dr. Hj. Elza Syarief, SH., MH.</strong></h4>
                                <p>Prof. Dr. Sri Gambir Melati, SH. <br />
                                Prof. Dr. Suhandi Cahaya, SH., MH., MBA. <br />
                                Dr. Teuku Syaiful Bahri, SH., MH <br />
                                Dr. Teguh Samudra, SH, M.Hum. <br />
                                Dr. Umar Aris, SH., MH. <br />
                                Prof. Dr. Wahyono, SH, MS <br />
                                Prof. Dr. Waty Suwarty, SH., MH. <br />
                                Dr. Yulfasni, SH., MH. <br />
                                Dr. Zulkarnaen Sitompul, SH., LLM.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="link-pengajar">
                <Link to={'/admission'}><img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/banner-lg-admission.png" alt="" /></Link>
            </div>
        </div>
        <Foot/>
    </div>
  )
}
