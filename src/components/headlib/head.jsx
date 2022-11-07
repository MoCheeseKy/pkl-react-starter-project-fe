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
        <Carousel autoplay dots={false} effect='fade'>
          <div className="img">
            <img src="https://library.iblam.ac.id/template/default/assets/images/slide1.jpg" alt="" />
          </div>
          <div className="img">
            <img src="https://library.iblam.ac.id/template/default/assets/images/slide2.jpg" alt="" />
          </div>
          <div className="img">
            <img src="https://library.iblam.ac.id/template/default/assets/images/slide3.jpg" alt="" />
          </div>
          <div className="img">
            <img src="https://library.iblam.ac.id/template/default/assets/images/slide4.jpg" alt="" />
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
            <li><Link to={'/library/beranda'}>Beranda</Link></li>
            <li><Link to={'/library/information'}>Informasi</Link></li>
            <li><Link to={'/library/berita'}>Berita</Link></li>
            <li><Link to={'/library/help'}>Bantuan</Link></li>
            <li><Link to={'/library/pustakawan'}>Pustakawan</Link></li>
            <li><Link to={'/library/login'}>login</Link></li>
            <li><Link>Koleksi <br /> Disertasi</Link></li>
            <li><Link>Koleksi <br /> Skripsi</Link></li>
            <li><Link to={'/library/visitor'}>Visitor</Link></li>
            <li><Link to={'/library/skripsi'}>Penyerahan <br /> Skripsi/Tesis</Link></li>
            <li><Link to={'/library/anggota'}>Area <br /> Anggota</Link></li>
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
            <Link to={'/library/beranda'} style={navStyle}>Beranda</Link>
            <Divider/>
            <Link to={'/library/information'} style={navStyle}>Informasi</Link>
            <Divider/>
            <Link to={'/library/berita'} style={navStyle}>Berita</Link>
            <Divider/>
            <Link to={'/library/help'} style={navStyle}>Bantuan</Link>
            <Divider/>
            <Link to={'/library/pustakawan'} style={navStyle}>Pustakawan</Link>
            <Divider/>
            <Link to={'/library/login'} style={navStyle}>login</Link>
            <Divider/>
            <Link style={navStyle}>Koleksi Disertasi</Link>
            <Divider/>
            <Link style={navStyle}>Koleksi Skripsi</Link>
            <Divider/>
            <Link to={'/library/visitor'} style={navStyle}>Visitor</Link>
            <Divider/>
            <Link to={'/library/skripsi'} style={navStyle}>Penyerahan Skripsi/Tesis</Link>
            <Divider/>
            <Link to={'/library/anggota'} style={navStyle}>Area Anggota</Link>
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
