import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import Header from "../../components/header/header";
import './academic.scss'
import { ArrowRightOutlined } from '@ant-design/icons'
import Subscribe from '../../components/footer/subscribe/subscribe';
import Foot from '../../components/footer/foot/foot';

export default function Academic() {
  return (
    <div className='academic'>
        <Header />
        <div className="entry">
            <img src="https://iblam.ac.id/wp-content/uploads/2019/12/Header_01.jpg" alt="Academic" />
        </div>
        <div className="content">
            <div className="breadcrumb">
                <Breadcrumb separator=">">
                    <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to={'/academic'}>Academic</Link></Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="img-right">
                <div className="content">
                    <h3><img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/icon-1.png" alt=""/>&nbsp;Kurikulum</h3>
                    <p>IBLAM School of Law menyiapkan kajian keilmuan dan soft skill yang komprehensif dalam menyiapkan lulusan terbaik.</p>
                    <Link to={'/academic/kurikulum'}>Selengkapnya <ArrowRightOutlined /></Link>
                </div>
                <div className="img-r">
                    <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/academic-kurikulum.jpg" alt=''/>
                </div>
            </div>
            <div className="img-left">
                <div className="img-r">
                    <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/academic-kelulusan.jpg" alt="" />
                </div>
                <div className="content">
                    <h3><img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/icon-2.png" alt="" /> Kompetensi Kelulusan</h3>
                    <p>Kamulah masa depan. Siapkan dirimu untuk menjadi yang terbaik.</p>
                    <Link>Selengkapnya <ArrowRightOutlined /></Link>
                </div>
            </div>
            <div className="img-right">
                <div className="content">
                    <h3 style={{color : '#F9A31C'}}><img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/icon-3.png" alt=""/>&nbsp;Sistem Pendidikan</h3>
                    <p>Bagaimana IBLAM School of Law akan membuatmu menjadi yang terbaik?</p>
                    <Link>Selengkapnya <ArrowRightOutlined /></Link>
                </div>
                <div className="img-r">
                    <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/academic-kurikulum.jpg" alt=''/>
                </div>
            </div>
            <div className="img-left">
                <div className="img-r">
                    <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/academic-pengajar.jpg"alt="" />
                </div>
                <div className="content">
                    <h3><img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/icon-1.png" alt="" /> Pengajar</h3>
                    <p>Mereka yang akan membuatmu jatuh cinta pada dunia hukum.</p>
                    <Link>Selengkapnya <ArrowRightOutlined /></Link>
                </div>
            </div>
        </div>
        <div className="kalender">
            <div className="txt">
                <strong>Kalender Akademik</strong>
            </div>
            <div className="download">
                <a href="https://iblam.ac.id/wp-content/uploads/2020/08/KALENDER-AKADEMIK-2020-2021.pdf">Download</a>
            </div>
        </div>
        <Subscribe/>
        <Foot/>
    </div>
  )
}
