import React from 'react'
import './foot.scss'
import { Divider, Input } from 'antd'
import { Link } from 'react-router-dom'
import { HeartTwoTone, GithubOutlined } from '@ant-design/icons'

export default function Foot() {
  
  const {Search} = Input

  return (
    <div className='footlib'>
      <footer>
        <div className="container">
          <div className="up">
            <div className="profile">
              <img src="https://library.iblam.ac.id/images/default/logo.png" alt="" />
              <div className="profname">IBLAM Library</div>
              <ul>
                <li><Link>Informasi</Link></li>
                <li><Link>Layanan</Link></li>
                <li><Link>Pustakawan</Link></li>
                <li><Link>Area Anggota</Link></li>
              </ul>
            </div>
            <div className="info">
              <h4>Tentang Kami</h4>
              <p>
                IBLAM Kampus A<br />Jl. Kramat Raya No. 25, Senen<br /> Jakarta Pusat, Telp (021) 21392851<br /> IBLAM Kampus B<br />Jl. Raden Sanim No. 99 ( Tanah Baru)<br />Kec. Beji, Kota Depok, Telp (021) 7764310<br />Fax (021) 7762969
              </p>
            </div>
            <div className="search">
              <h4>Cari</h4>
              <div className="subjudul">masukkan satu atau lebih kata kunci dari judul, pengarang, atau subjek</div>
              <Search placeholder="Masukkan kata kunci" allowClear enterButton="Cari koleksi" size="large"/>
              <Divider/>
              <div className="donate">
                <Link className='support'>
                  <HeartTwoTone className='icon' twoToneColor='#28A745' />&nbsp; Donasi untuk SLiMS
                </Link>
                <Link className='contribute'>
                  <GithubOutlined className='icon' />&nbsp; Kontribusi untuk SLiMS?
                </Link>
              </div>
            </div>
          </div>
          <Divider />
          <div className="down">
            <p>© 2022 — Senayan Developer Community</p>
            <div className="kanan">
              Ditenagai oleh <code>SLiMS</code>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
