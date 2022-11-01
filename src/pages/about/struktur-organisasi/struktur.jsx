import React from 'react'
import './struktur.scss'
import Header from "../../../components/header/header";
import Foot from "../../../components/footer/foot/foot";
import { Breadcrumb, Image } from 'antd';
import { Link } from 'react-router-dom';

export default function Struktur() {
  return (
    <div className='struktur'>
        <Header/>
        <div className="entry">
            <img src="https://iblam.ac.id/wp-content/uploads/2020/05/header-strukur-organisasi.jpg" alt="" />
        </div>
        <div className="content">
            <div className="container">
                <div className="breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/about'}>about</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/about/struktur-organisasi'}>Struktur Organisasi</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="main-title"><p><strong>Struktur Organisasi</strong></p></div>
                <div className="isi">
                    <p>
                        <Image src='https://iblam.ac.id/wp-content/uploads/2022/07/WhatsApp-Image-2022-06-27-at-13.59.22.jpeg' />
                    </p>
                </div>
            </div>
        </div>
        <Foot/>
    </div>
  )
}
