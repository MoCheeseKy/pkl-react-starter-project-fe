import React from "react";
import "./home.scss"
import Header from "../../components/header/header";
import { Carousel, Divider } from 'antd';

export default function Home() {

    return (
        <>
            <Header />
            <Carousel dotPosition="bottom" autoplay>
                <div className="hero fisrt">
                    <div className="hero-information">
                        <Divider orientation="left">Left Text</Divider>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta? Refert tamen, quo modo.
                        </p>

                    </div>
                </div>
                <div className="hero second">
                    <div className="hero-information">
                        <Divider orientation="left">Left Text</Divider>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta? Refert tamen, quo modo.
                        </p>

                    </div>
                </div>
            </Carousel>

        </>
    )
}