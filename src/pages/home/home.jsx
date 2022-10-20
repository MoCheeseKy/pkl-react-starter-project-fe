import React from "react";
import "./home.scss"
import Header from "../../components/header/header";
import { Carousel, Divider } from 'antd';

export default function Home() {



    return (
        <main>
            <Header />
            <Carousel dotPosition="bottom" autoplay className="carousel">
                <div className="hero fisrt">
                    <div className="hero-information">
                        <Divider orientation="left">Left Text</Divider>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta? Refert tamen, quo modo.
                        </p>

                    </div>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
                <div className="hero second">
                    <div className="hero-information">
                        <Divider orientation="left">Left Text</Divider>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta? Refert tamen, quo modo.
                        </p>

                    </div>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
            </Carousel>

            <div className="wrapper">
                <div className="tittle">
                    Melangkah bersama kami
                </div>
                <div className="content">
                    <div className="item">
                        <div className="item-image">

                        </div>
                        <div className="subtitle">
                            Lorem ipsum dolor sit.
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi itaque voluptas fugiat a sunt odit doloribus omnis.
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-image">

                        </div>
                        <div className="subtitle">
                            Lorem ipsum dolor sit.
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi itaque voluptas fugiat a sunt odit doloribus omnis.
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-image">

                        </div>
                        <div className="subtitle">
                            Lorem ipsum dolor sit.
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi itaque voluptas fugiat a sunt odit doloribus omnis.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}