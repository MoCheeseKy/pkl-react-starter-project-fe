import React from 'react'
import './foot.scss'
import { WhatsAppOutlined, MailOutlined } from '@ant-design/icons';
import { List, Typography } from 'antd';

export default function Foot() {
  const dataKiri = [
    'Tentang IBLAM',
    'Kurikulum',
    'Beasiswa',
    'Pengajar',
    'Kontak Kami',
    'LKBH IBLAM',
    'Info & Pendaftaran'
  ]
  const dataKanan = [
    'Berita IBLAM',
    'Jurnal',
    'IBLAM Library',
    'Kalender Akademik',
    'Karir',
    'Media',
    'Tunas IBLAM'
  ]
  return (
  <section>
      <div className="footer">
        <div className="foot-content">
          <div className="info">
              <div className="info-head"><h3>GET IN TOUCH</h3></div>
              <p>IBLAM Kampus A <br /> Jl. Kramat Raya No. 25, Senen <br /> Jakarta Pusat, Telp (021) 21392851</p>
              <p>IBLAM Kampus B <br /> Jl. Raden Sanim No. 99 (Tanah Baru) <br /> Kec. Beji, Kota Depok, Telp (021) 7764310 Fax (021) 7762969</p>
          </div>
          <div className="contact">
              <div className="wa">
                  <a><WhatsAppOutlined />&nbsp;Whatsapp 0852-1557-6002</a>
              </div>
              <div className="gmail">
                  <a><MailOutlined />&nbsp;Email info@iblam.ac.id</a>
              </div>
          </div>
          <div className="links">
              <div className="links-head"><h3>HELPFUL LINKS</h3></div>
              <div className="links-content">
                  <div className="kiri">
                    <List size='small' dataSource={dataKiri} renderItem={(item) => <li>{item}</li>} />
                  </div>
                  <div className="kanan">
                    <List size='small' dataSource={dataKanan} renderItem={(item) => <li>{item}</li>}/>
                  </div>
              </div>
          </div>
          <div className="icon">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
      </div>
  </section>
  )
}