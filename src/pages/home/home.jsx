import React from "react";
import "./home.scss"

import Header from "../../components/header/header";
import Subscribe from "../../components/footer/subscribe/subscribe";
import Foot from "../../components/footer/foot/foot";

// import { SwapRightOutlined } from '@ant-design/icons';
// import { Link } from "react-router-dom";
// import { Carousel, Divider } from 'antd';

export default function Home() {
    return (
        <main>
            <Header />

            <Subscribe />
            <Foot />
        </main>
    )
}