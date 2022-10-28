import React from 'react'
import './s2.scss'
import Header from '../../../components/header/header'
import Foot from '../../../components/footer/foot/foot'
import { Breadcrumb, Collapse } from 'antd'
import { Link } from 'react-router-dom'

export default function S2() {
  const { Panel } = Collapse;
  const se1 = 
    <div className="isian">
        <div className="kiri">
            <table>
                <tr className='tr-kiri'>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                    <td>Teori Hukum</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Filsafat Hukum</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Sosiologi Hukum</td>
                    <td>2</td>
                </tr>
            </table>
        </div>
        <div className="kanan">
            <table>
                <tr className='tr-kanan'>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                    <td>Perbandingan Sistem Hukum</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Hukum Perusahaan & Kepailitan</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Hukum Kontrak & Komersial</td>
                    <td>3</td>
                </tr>
            </table>
        </div>
        <div className="phone-isian">
            <table>
                <tr>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                    <td>Teori Hukum</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Filsafat Hukum</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Sosiologi Hukum</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Perbandingan Sistem Hukum</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Hukum Perusahaan & Kepailitan</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Hukum Kontrak & Komersial</td>
                    <td>3</td>
                </tr>
            </table>
        </div>
    </div>

  const se2 =
    <div className="isian"> 
        <div className="kiri">
            <table>
                <tr className='tr-kiri'>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                    <td>Metode Penelitian Hukum</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Politik Hukum</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Hukum Lingkungan dan SDA</td>
                    <td>3</td>
                </tr>
            </table>
        </div>
        <div className="kanan">
            <table>
                <tr className='tr-kanan'>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                    <td>Hukum Agraria</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Hukum Arbitrase dan APS</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Atas Kekayaan Intelektual</td>
                    <td>3</td>
                </tr>
            </table>
        </div>
        <div className="phone-isian">
            <table>
                <tr>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                    <td>Metode Penelitian Hukum</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Politik Hukum</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Hukum Lingkungan dan SDA</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Hukum Agraria</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Hukum Arbitrase dan APS</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Atas Kekayaan Intelektual</td>
                    <td>3</td>
                </tr>
            </table>
        </div>
    </div>

  const se3 =
    <div className="isian"> 
        <div className="kiri">
            <table>
                <tr className='tr-kiri'>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                    <td>Hukum Perdagangan Internasional</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Perbankan</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Kontrak Nasional dan Internasional</td>
                    <td>2</td>
                </tr>
            </table>
        </div>
        <div className="kanan">
            <table>
                <tr className='tr-kanan'>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                    <td>Hukum Anti Monopoli dan Persaingan Usaha tidak Sehat</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Pajak</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Penyusunan Kontrak & Komersial</td>
                    <td>2</td>
                </tr>
            </table>
        </div>
        <div className="phone-isian">
            <table>
                <tr>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                    <td>Hukum Perdagangan Internasional</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Perbankan</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Kontrak Nasional dan Internasional</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Anti Monopoli dan Persaingan Usaha tidak Sehat</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Pajak</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Penyusunan Kontrak & Komersial</td>
                    <td>2</td>
                </tr>
            </table>
        </div>
    </div>
   
  const se3b= 
    <div className="isian"> 
        <div className="kiri">
            <table>
                <tr className='tr-kiri'>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                    <td>Hukum Perdagangan Internasional</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Perbankan</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Kontrak Nasional dan Internasional</td>
                    <td>2</td>
                </tr>
            </table>
        </div>
        <div className="kanan">
        <table>
                <tr className='tr-kanan'>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                    <td>Hukum Anti Monopoli dan Persaingan Usaha tidak Sehat</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Pajak</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Penyusunan Kontrak & Komersial</td>
                    <td>2</td>
                </tr>
            </table>
        </div>
        <div className="phone-isian">
            <table>
                <tr>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                    <td>Hukum Perdagangan Internasional</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Perbankan</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Kontrak Nasional dan Internasional</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Anti Monopoli dan Persaingan Usaha tidak Sehat</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Hukum Pajak</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Penyusunan Kontrak & Komersial</td>
                    <td>2</td>
                </tr>
            </table>
        </div>
    </div>

  const se3p= 
    <div className="isian"> 
        <div className="kiri">
            <table>
                <tr className='tr-kiri'>
                  <th>Mata Kuliah</th>
                  <th>SKS</th>
                </tr>
                <tr>
                  <td>Legal Opinion</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tindak Pidana Perbankan</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tindak Pidana Korupsi dan Tindak Pidana Pencucian Uang</td>
                  <td>2</td>
                </tr>
            </table>
        </div>
        <div className="kanan">
            <table>
                <tr className='tr-kanan'>
                  <th>Mata Kuliah</th>
                  <th>SKS</th>
                </tr>
                <tr>
                  <td>Tindak Pidana Transnasional</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tindak Pidana Siber</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tindak Pidana Pemilu</td>
                  <td>2</td>
                </tr>
            </table>
        </div>
        <div className="phone-isian">
            <table>
                <tr>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                  <td>Legal Opinion</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tindak Pidana Perbankan</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tindak Pidana Korupsi dan Tindak Pidana Pencucian Uang</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tindak Pidana Transnasional</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tindak Pidana Siber</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tindak Pidana Pemilu</td>
                  <td>2</td>
                </tr>
            </table>
        </div>
    </div>

  const se3k= 
    <div className="isian"> 
        <div className="kiri">
            <table>
                <tr className='tr-kiri'>
                  <th>Mata Kuliah</th>
                  <th>SKS</th>
                </tr>
                <tr>
                  <td>Legal Opinion</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Hukum Kebijakan Publik</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Hukum Pengelolaan Uang Negara</td>
                  <td>2</td>
                </tr>
            </table>
        </div>
        <div className="kanan">
            <table>
                <tr className='tr-kanan'>
                  <th>Mata Kuliah</th>
                  <th>SKS</th>
                </tr>
                <tr>
                  <td>Hukum Administrasi dan Desentralisasi</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Hukum dan Teori Konstitusi</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Hukum Birokrasi dan Aparatur Sipil Negara</td>
                  <td>2</td>
                </tr>
            </table>
        </div>
        <div className="phone-isian">
            <table>
                <tr>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                  <td>Legal Opinion</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Hukum Kebijakan Publik</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Hukum Pengelolaan Uang Negara</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Hukum Administrasi dan Desentralisasi</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Hukum dan Teori Konstitusi</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Hukum Birokrasi dan Aparatur Sipil Negara</td>
                  <td>2</td>
                </tr>
            </table>
        </div>
    </div>

  const se4=
    <div className="isian"> 
        <div className="kiri">
            <table>
                <tr className='tr-kiri'>
                  <th>Mata Kuliah</th>
                  <th>SKS</th>
                </tr>
                <tr>
                  <td>Publikasi di Jurnal Nasional (terakreditasi)</td>
                  <td>2</td>
                </tr>
            </table>
        </div>
        <div className="kanan">
            <table>
                <tr className='tr-kanan'>
                  <th>Mata Kuliah</th>
                  <th>SKS</th>
                </tr>
                <tr>
                  <td>Tesis</td>
                  <td>4</td>
                </tr>
            </table>
        </div>
        <div className="phone-isian">
            <table>
                <tr>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                </tr>
                <tr>
                  <td>Publikasi di Jurnal Nasional (terakreditasi)</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tesis</td>
                  <td>4</td>
                </tr>
            </table>
        </div>
    </div>

  return (
    <div className='s2'>
        <Header />
        <div className="content">
            <div className="entry">
                <img src="https://iblam.ac.id/wp-content/uploads/2020/04/kurikulum-s2.jpg" alt="" />
            </div>
            <div className="container">
                <div className="breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/graduates'}>Graduates</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/graduates/s2'}>S2</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="title-main">
                    <h2>
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/icon-3.png" alt="" /><br className='br' /> &nbsp;
                        <strong>Kurikulum S2</strong>
                    </h2>
                </div>
                <div className="isi">
                    <div className="collapse-wrap">
                        <div className="collapse">
                            <Collapse accordion>
                                <Panel header="SEMESTER I (6 Mata Kuliah)" key={1}>
                                    {se1}
                                </Panel>
                                <Panel header="SEMESTER II (6 Mata Kuliah)" key={2}>
                                    {se2}
                                </Panel>
                                <Panel header="SEMESTER III (6 Mata Kuliah)" key={3}>
                                    {se3}
                                </Panel>
                                <Panel header="SEMESTER III : KONSENTRASI HUKUM BISNIS (6 Mata Kuliah)" key={4}>
                                    {se3b}
                                </Panel>
                                <Panel header="SEMESTER III : KONSENTRASI HUKUM PIDANA (6 Mata Kuliah)" key={5}>
                                    {se3p}
                                </Panel>
                                <Panel header="SEMESTER III : KONSENTRASI HUKUM KEBIJAKAN PUBLIK (6 Mata Kuliah)" key={6}>
                                    {se3k}
                                </Panel>
                                <Panel header="SEMESTER IV : KONSENTRASI HUKUM PIDANA (2 Mata Kuliah)" key={7}>
                                    {se4}
                                </Panel>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="links-s">
            <div className="biaya">
                <div className="isi-link">
                    <h4>Biaya Kuliah Program S2</h4>
                    <button>Download PDF</button>
                </div>
            </div>
            <div className="download">
                <div className="isi-link">
                    <h4>Download Brochure</h4>
                    <button>Download</button>
                </div>
            </div>
            <div className="apply">
                <div className="isi-link">
                    <h4>Apply Sekarang</h4>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
        <div className="s-help">
            <Link className='one'>
                <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/banner-sm-kampus-jakarta.jpg" alt="" />
            </Link>
            <Link className='two'>
                <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/banner-sm-kampus-depok.jpg" alt="" />
            </Link>
        </div>
        <Foot />
    </div>
  )
}
