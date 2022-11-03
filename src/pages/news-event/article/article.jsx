import React from 'react'
import Header from '../../../components/header/header'
import Subscribe from '../../../components/footer/subscribe/subscribe'
import Foot from '../../../components/footer/foot/foot'
import './article.scss'
import { Breadcrumb, Typography } from 'antd'
import { WhatsAppOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export default function Article() {
  const { Paragraph } = Typography
  return (
    <div className='article'>
        <Header/>
        <div className="content">
            <div className="entry">
                <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/header-news.jpg" alt="" />
            </div>
            <div className="container">
                <div className="breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/news-event'}>Berita</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'/tes'}>Judul Berita</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="title-main">
                    <h2>
                        <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/icon-2.png" alt="" />&nbsp;
                        <br className='br' />
                        <strong>News and Event</strong>
                    </h2>
                </div>
                <div className="isi">
                    <div className="berita">
                        <div className="judul-berita">
                            <h2>
                                <strong>Judul Berita</strong><br />
                                Thumbnail Berita
                            </h2>
                        </div>
                        <div className="isi-berita">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam doloremque nam vel esse fugiat ipsam molestiae ad commodi? Illo modi, obcaecati itaque asperiores quaerat ex nemo iste labore amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi soluta suscipit ex reprehenderit, similique quod vel in possimus explicabo harum distinctio tenetur eos minima aspernatur unde. Est, ipsum aperiam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio accusantium aperiam quos et cum laudantium nulla modi reiciendis molestias explicabo repellat sequi maiores iusto, laborum repudiandae eligendi perferendis, deserunt ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque officia rem doloremque, vero rerum quaerat ipsam voluptas odio dolore. Impedit expedita cupiditate commodi iste odit nemo asperiores saepe obcaecati?
                        </div>
                    </div>
                    <div className="help">
                        <div className="isihelp">
                            <h4><strong>Butuh Bantuan?</strong></h4>
                            <h6>Tim IBLAM siap menjawab kebutuhanmu</h6>
                            <div className="link-help">
                                <Link><WhatsAppOutlined />&nbsp;Kampus Jakarta</Link><br />
                                <Link><WhatsAppOutlined />&nbsp;Kampus Depok</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lainnya">
                    <div  className="post-item">
                        <img src='https://iblam.ac.id/wp-content/uploads/2022/11/muhammadiyah-4-pkm-350x250.jpg' alt="" />
                        <div className="post-title">
                            <Paragraph ellipsis={{rows: 2}}>
                                <Link>article.judul</Link>
                            </Paragraph>
                        </div>
                        <div className="post-content">
                            <Paragraph ellipsis={{rows: 3}}>
                                article.konten
                            </Paragraph>
                            <p><strong><Link>Selengkapnya &gt;</Link></strong></p>
                        </div>
                    </div>
                    <div  className="post-item">
                        <img src='https://iblam.ac.id/wp-content/uploads/2022/11/muhammadiyah-4-pkm-350x250.jpg' alt="" />
                        <div className="post-title">
                            <Paragraph ellipsis={{rows: 2}}>
                                <Link>article.judul</Link>
                            </Paragraph>
                        </div>
                        <div className="post-content">
                            <Paragraph ellipsis={{rows: 3}}>
                                article.konten
                            </Paragraph>
                            <p><strong><Link>Selengkapnya &gt;</Link></strong></p>
                        </div>
                    </div>
                    <div  className="post-item">
                        <img src='https://iblam.ac.id/wp-content/uploads/2022/11/muhammadiyah-4-pkm-350x250.jpg' alt="" />
                        <div className="post-title">
                            <Paragraph ellipsis={{rows: 2}}>
                                <Link>article.judul</Link>
                            </Paragraph>
                        </div>
                        <div className="post-content">
                            <Paragraph ellipsis={{rows: 3}}>
                                article.konten
                            </Paragraph>
                            <p><strong><Link>Selengkapnya &gt;</Link></strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Subscribe/>
        <Foot/>
    </div>
  )
}
