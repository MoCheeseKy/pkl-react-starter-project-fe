import React from 'react'
import './foot.scss'
import { WhatsAppOutlined, MailOutlined, FacebookFilled, TwitterCircleFilled, YoutubeFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { List } from 'antd';
import { Link } from 'react-router-dom';

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
              <p>IBLAM Kampus A <br />Jl. Kramat Raya No. 25, Senen<br /> Jakarta Pusat, Telp (021) 21392851</p>
              <p>IBLAM Kampus B <br /> Jl. Raden Sanim No. 99 (Tanah Baru)<br /><norb> Kec. Beji, Kota Depok, Telp (021) 7764310 Fax (021) 7762969</norb></p>
          </div>
          <div className="contact">
              <div className="wa">
                  <Link><WhatsAppOutlined />&nbsp;Whatsapp 0852-1557-6002</Link>
              </div>
              <div className="gmail">
                  <Link><MailOutlined />&nbsp;Email info@iblam.ac.id</Link>
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
          <div className="icon">
            <div className="icon-content">
              <img src="https://iblam.ac.id/wp-content/themes/iblam_mobile/assets/img/logo.png" alt='iblam' /><br />
              <div className="icon-img">
                <FacebookFilled style={{fontSize: '30px', marginRight: '2%'}} />
                <TwitterCircleFilled style={{fontSize: '30px', marginRight: '2%'}} />
                <YoutubeFilled style={{fontSize: '30px', marginRight: '2%'}} />
                <InstagramFilled style={{fontSize: '30px', marginRight: '2%'}} />
                <LinkedinFilled style={{fontSize: '30px', marginRight: '2%'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}