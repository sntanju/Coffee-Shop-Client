import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TopBanner.css';
import Aos from 'aos';

const TopBanner = () => {

    useEffect( () => {
        Aos.init({ duration: 3000 })
    }, []);


    return (
        <Container fluid className="top-background">
            <Row >
                <Col className="banner-text my-5 mx-5 mt-5">
                    <h1 data-aos="fade-left" >Take A Cup Of Hot Coffee</h1>
                    <p data-aos="fade-left" >At Fade Into Coffee, were all about getting people together and<br /> enjoying each others company. We believe that what we<br /> do   can weave a fabric of positive relationships and experiences<br /> that  stretch from our coffee houses and out into the world.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default TopBanner;