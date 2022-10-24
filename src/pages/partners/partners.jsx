import React from 'react'
import Header from "../../components/header/header"
import Foot from '../../components/footer/foot/foot'
import './partners.scss'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

export default function Partners() {
  return (
    <div className="partners">
        <Header />
        <div className="entry">
            <img src="https://iblam.ac.id/wp-content/uploads/2020/05/header-partner.jpg" alt=""/>
        </div>
        <div className="content">
            <div className="breadcrumb">
            <Breadcrumb separator=">">
                <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to={'/partners'}>Partners</Link></Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div className="title">
                <h2>
                    <img src="https://iblam.ac.id/wp-content/uploads/2019/11/icon-3.png" alt=""/> &nbsp;
                    <strong>Partners</strong>
                </h2>
                <p>IBLAM School of Law bekerja sama dengan berbagai partner baik sesama perguruan tinggi, organisasi, hingga sekolah menengah untuk mewujudkan ekosistem pembelajaran yang berkualitas.</p>
            </div>
            <div className="list">
                <h3><strong>List Kerjasama</strong></h3>
                <p><strong>Kerjasama antar Perguruan Tinggi</strong></p>
                <ol>
                    <li>Universitas Gajah Mada</li>
                    <li>Universitas 17 Agustus 1945</li>
                    <li>Universitas Sultan Agung Semarang</li>
                    <li>Universitas Pancasila</li>
                    <li>Universitas Trilogi</li>
                    <li>Sekolah Tinggi Ilmu Ekonomi Manajemen Bisnis Indonesia</li>
                    <li>Institut Digital Bisnis Indonesia</li>
                    <li>Politeknik Negeri Jakarta</li>
                    <li>Universitas Pertamina</li>
                    <li>Universitas Pakuan</li>
                    <li>Universitas Muhammadiyah Prof. DR. Hamka</li>
                    <li>LP3I</li>
                    <li>Indonesia Banking School</li>
                    <li>UIN Raden Fatah Palembang</li>
                    <li>STIMIK Sepuluh Nopember</li>
                    <li>Universitas Multimedia Nusantara</li>
                    <li>Universitas Esa Unggul</li>
                </ol>
                <p><strong>Kerjasama dengan Instansi / Organisasi </strong></p>
                <ol>
                    <li>MKKS SMK Kota Depok</li>
                    <li>FKKS SMA Kota Depok</li>
                    <li>GOW Kota Depok</li>
                    <li>SEKBER Wartawan Kota Depok</li>
                    <li>ANSOR Kota Depok</li>
                    <li>BNNK Depok</li>
                    <li>Pegadaian Kota Depok</li>
                    <li>Sevima</li>
                    <li>Haruka EDU</li>
                    <li>DPC Peradi Jakarta Barat</li>
                    <li>HIPMI PT</li>
                    <li>Cicil.id</li>
                    <li>Quipper</li>
                    <li>goKampuz</li>
                    <li>Rutan Pondok Bambu</li>
                    <li>Rumah Sakit Pusat Angkatan Darat (RSPAD) Gatot Soebroto</li>
                    <li>IWAPI</li>
                    <li>LegalGo</li>
                    <li>Alumni Osis Indonesia</li>
                    <li>SAM.OFIS</li>
                    <li>Kopi Mbah Sirroh</li>
                    <li>Just Co</li>
                    <li>Perhimpunan Alumni Jerman</li>
                    <li>Perkumpulan Konsultan Hukum Medis dan Kesehatan</li>
                </ol>
                <p><strong>Kerjasama dengan SMA / SMK</strong></p>
                <ol>
                    <li>20 SMA dan SMK Depok</li>
                    <li>SMK Pelita IV</li>
                    <li>SMK Taman Siswa II</li>
                    <li>SMA Muhamadiah Cawang</li>
                </ol>
                <p><br /></p>
                <img src="https://iblam.ac.id/wp-content/uploads/2021/08/logo-kerjasama-e1647333907554.png" alt=""/>
                <p>
                    <a href="https://sevima.com/"><img src="https://iblam.ac.id/wp-content/uploads/2022/03/logo-sevima-e1647333805118.png" alt="" /></a>
                </p>
            </div>
        </div>
        <Foot/>
    </div>
  )
}
