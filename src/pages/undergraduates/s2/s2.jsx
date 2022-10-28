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
            </table>
        </div>
        <div className="kanan">
        <table>
                <tr>
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
    </div>

  const se2 =
    <div className="isian"> 
        <div className="kiri">
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
            </table>
        </div>
        <div className="kanan">
        <table>
                <tr>
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
    </div>

  const se3 =
    <div className="isian"> 
        <div className="kiri">
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
            </table>
        </div>
        <div className="kanan">
        <table>
                <tr>
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
    </div>
   
  const se3b= 
    <div className="isian"> 
        <div className="kiri">
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
            </table>
        </div>
        <div className="kanan">
        <table>
                <tr>
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
    </div>

  const se3p= 
    <div className="isian"> 
      <div className="kiri">
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
          </table>
      </div>
      <div className="kanan">
      <table>
              <tr>
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
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Foot />
    </div>
  )
}
