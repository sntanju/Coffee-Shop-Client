import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Service from '../Service/Service';
import './Services.css';
import Aos from 'aos';
const Services = () => {
const [ services, setServices ] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/coffee`)
        .then (res => res.json())
        .then (data => setServices(data))
    }, []);

    useEffect( () => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <Container>
            
            <h1 data-aos="zoom-in" className='coffees'>Our Special Coffee's Here</h1>
             <Row xs={1} md={2} lg={3}>
               {
                   services.map(service => <Service
                    key={service._id}
                    service={service}
                   ></Service>)
               }
            </Row>
        </Container>
    );
};

export default Services;