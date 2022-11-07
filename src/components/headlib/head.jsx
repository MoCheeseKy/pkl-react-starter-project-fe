import React, {useState} from 'react'
import './head.scss'
import { Link } from 'react-router-dom'
import { Drawer, Divider, Carousel, Input } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

export default function Head() {

  const {Search} = Input;

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const navStyle = {
    color: 'white'
  }

  return (
    <div className="head">
      <div className="cover">
        <Carousel autoplay dots={false}>
          <div className="img">
            <img src="https://iblam.ac.id/wp-content/uploads/2019/11/big-banner1.jpg" alt="" />
          </div>
          <div className="img">
            <img src="https://iblam.ac.id/wp-content/uploads/2019/11/big-banner2.jpg" alt="" />
          </div>
        </Carousel>
        <div className="content">
          <div className="logo">
            <Link>
              <img src="https://library.iblam.ac.id/images/default/logo.png" alt="" />
              <div className="txt">
                <h1>IBLAM LIBRARY</h1>
              </div>
            </Link>
          </div>
          <div className="items-large">
          <ul>
            <li><Link>Beranda</Link></li>
            <li><Link>Informasi</Link></li>
            <li><Link>Berita</Link></li>
            <li><Link>Bantuan</Link></li>
            <li><Link>Pustakawan</Link></li>
            <li><Link>login</Link></li>
            <li><Link>Koleksi <br /> Disertasi</Link></li>
            <li><Link>Koleksi <br /> Skripsi</Link></li>
            <li><Link>Visitor</Link></li>
            <li><Link>Penyerahan <br /> Skripsi/Tesis</Link></li>
            <li><Link>Area <br /> Anggota</Link></li>
            <li><Link>TL</Link></li>
          </ul>
          </div>
          <div className="items-small">
          <button onClick={showDrawer}><MenuOutlined /></button>
          <Drawer
          title="Nav"
          placement='top'
          onClose={onClose}
          bodyStyle={{backgroundColor: '#2D3748'}}
          open={open}>
            <Link style={navStyle}>Beranda</Link>
            <Divider/>
            <Link style={navStyle}>Informasi</Link>
            <Divider/>
            <Link style={navStyle}>Berita</Link>
            <Divider/>
            <Link style={navStyle}>Bantuan</Link>
            <Divider/>
            <Link style={navStyle}>Pustakawan</Link>
            <Divider/>
            <Link style={navStyle}>login</Link>
            <Divider/>
            <Link style={navStyle}>Koleksi Disertasi</Link>
            <Divider/>
            <Link style={navStyle}>Koleksi Skripsi</Link>
            <Divider/>
            <Link style={navStyle}>Visitor</Link>
            <Divider/>
            <Link style={navStyle}>Penyerahan Skripsi/Tesis</Link>
            <Divider/>
            <Link style={navStyle}>Area Anggota</Link>
            <Divider/>
            <Link style={navStyle}>TL</Link>
          </Drawer>
          </div>
        </div>
        <div className="row">
          <Search size='large' placeholder='Masukkan kata kunci untuk mencari koleksi'/>
        </div>
      </div>
    </div>
  )
}
