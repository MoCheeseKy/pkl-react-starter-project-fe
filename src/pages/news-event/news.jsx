import React, { useState, useEffect } from 'react'
import './news.scss'
import { Link } from 'react-router-dom'
import { Breadcrumb, Typography } from 'antd'
import Header from '../../components/header/header'
import Subscribe from '../../components/footer/subscribe/subscribe'
import Foot from '../../components/footer/foot/foot'
import { WhatsAppOutlined } from '@ant-design/icons'
import axios from 'axios'

export default function News() {
  const [article, setArticle] = useState([])

  const { Paragraph } = Typography
  
  useEffect(() => {
    axios.get('https://38c2-2001-448a-3024-202d-d0f7-ea02-d5eb-b90b.ngrok.io/article/').then((res) => {
        setArticle(res?.data)
    })
  }, [])

    // Untuk mengambil data sesuai index array
    // <div className="dlt">
    // <button onClick={() =>{console.log([article[0]])}}>log</button>
    // </div>
  
  return (
    <div className='news'>
        <Header />
        <div className="content">
            <div className="entry">
                <img src="https://iblam.ac.id/wp-content/uploads/2019/12/Header_26.jpg" alt="" />
            </div>
            <div className="container">
                <div className="breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/news-event'}>News and Event</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="title-main">
                    <h2>
                        <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/icon-2.png" alt="" />&nbsp;
                        <strong>News & Events</strong>
                    </h2>
                </div>
                <div className="row">
                    <div className="new-content">
                        <img src="https://iblam.ac.id/wp-content/uploads/2022/07/WhatsApp-Image-2022-06-29-at-09.46.27-1024x768.jpeg" alt="" />
                        <h3><Link>Ceremony Penandatanganan Memorandum of Understanding (MoU) dan Memorandum of Agreement (MoA) Sekolah Tinggi Ilmu Hukum IBLAM dengan Komisi Pemilihan Umum Kota Administrasi Jakarta Timur</Link></h3>
                        <div className="category-label">Latest News</div>
                        <div className="post-content">
                            Jakarta, 28 Juni 2022 - Komisi Pemilihan Umum Kota Administrasi Jakarta Timur mengunjungi kampus Sekolah Tinggi Ilmu Hukum IBLAM (STIH IBLAM)  untuk menyelenggarakan acara Ceremony Penandatanganan Memorandum of Understanding (MoU) dan Memorandum of Agreement (MoA). Acara tersebut membahas tentang kerjasama dalam bidang Tri Dharma Perguruan Tinggi.Acara ini dihadiri oleh para pimpinan STIH IBLAM  diantaranya ada Ketua STIH IBLAM Dr. Gunawan Nachrawi, S.H., M.H., lalu Dr. Marjan Miharja, S.H.,M.H., selaku Wakil Ketua I, Arrum Budi Leksono, S.T., S.H., M.H., selaku Wakil Ketua II, Feny Windiyastuti, S.H., M.H., selaku Ketua Program Studi S1, Yolla Aprillianny,  S.Pd., selaku Kabiro S2, Rani Yuwafi, S.H., M.H., selaku Kabiro Humas dan Kerjasam...
                            <p><strong><Link>Selengkapnya &gt;</Link></strong></p>
                        </div>
                    </div>
                    <div className="new-contact">
                        <div className="isian">
                            <h4><strong>Butuh Bantuan?</strong></h4>
                            <h6>Tim IBLAM siap menjawab kebutuhanmu</h6>
                            <div className="cntc">
                                <p><Link><WhatsAppOutlined/>&nbsp;Kampus Jakarta</Link></p>
                                <p><Link><WhatsAppOutlined/>&nbsp;Kampus Depok</Link></p>
                            </div>
                            <h4><strong>Upcoming Events</strong></h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {article.map((article)=>{
                        return(
                            <div key={article.id} className="post-item">
                                <img src={article.thumbnail} alt="" />
                                {/* <div className="post-date">27 JUL 22</div> */}
                                <div className="post-title">
                                    <Link to={`/${article.kategori_slug}/${article.artikel_slug}`}>{article.judul}</Link>
                                </div>
                                <div className="post-content">
                                    <Paragraph ellipsis={{rows: 3}}>
                                        {article.konten}
                                    </Paragraph>
                                <p><strong><Link to={`/${article.kategori_slug}/${article.artikel_slug}`}>Selengkapnya &gt;</Link></strong></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <Subscribe/>
        <Foot/>
    </div>
  )
}