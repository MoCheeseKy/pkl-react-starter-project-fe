import React from 'react'
import './news.scss'
import { Link } from 'react-router-dom'
import Header from '../../components/header/header'
import Subscribe from '../../components/footer/subscribe/subscribe'
import Foot from '../../components/footer/foot/foot'

export default function News() {
  return (
    <div className='news'>
        <Header />
        <div className="content">
            <div className="entry">
                <img src="https://iblam.ac.id/wp-content/uploads/2019/12/Header_26.jpg" alt="" />
            </div>
            <div className="container"></div>
        </div>
        <Subscribe/>
        <Foot/>
    </div>
  )
}