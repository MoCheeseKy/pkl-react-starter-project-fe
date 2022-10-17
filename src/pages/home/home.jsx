import React from "react";
import "./home.scss"
import { Carousel } from "antd";
import { Row, Col } from "antd";
import { Divider } from "antd";
import Header from "../../components/header/header";

export default function Home() {

    const Hero = {
        width: '100vw',
        height: '65vh',
        background: '#000',
    };

    const Slider = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <>
            <Header />
            <div className="hero">
                <Carousel afterChange={Slider} style={Hero}>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>

                </Carousel>
            </div>
            <div className="main-topic large">
                <Row gutter={[8, 0]}>
                    <Col span={8}>
                        <Divider className="divider" orientation="left" plain>
                            Left Text
                        </Divider>
                        <p className="left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta? Refert tamen, quo modo.
                        </p>
                    </Col>
                    <Col span={8}>
                        <Divider className="divider" plain>Text</Divider>
                        <p className="center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta? Refert tamen, quo modo.
                        </p>
                    </Col>
                    <Col span={8}>
                        <Divider className="divider" orientation="right" plain>
                            Right Text
                        </Divider>
                        <p className="right">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta? Refert tamen, quo modo.
                        </p>
                    </Col>
                </Row>
            </div>
            <div className="main-topic small">
                <Row gutter={[0, 8]}>
                    <Col>
                        <Divider className="divider" plain>Text</Divider>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta? Refert tamen, quo modo.
                        </p>
                    </Col>
                </Row>
                <Row gutter={[0, 8]}>
                    <Col>
                        <Divider className="divider" plain>Text</Divider>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta? Refert tamen, quo modo.
                        </p>
                    </Col>
                </Row>
                <Row gutter={[0, 8]}>
                    <Col>
                        <Divider className="divider" plain>Text</Divider>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta? Refert tamen, quo modo.
                        </p>
                    </Col>
                </Row>
            </div>
            <hr />
            <div className="berita">

            </div>
        </>
    )
}