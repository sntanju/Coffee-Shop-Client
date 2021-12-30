import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Service.css';
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';


const Service = ({service}) => {

    const {id, description, name, img, Price} = service || {};
    const shoppingcartIcon = <FontAwesomeIcon icon={faShoppingCart} />  
    const history = useNavigate();
    const handleDetails = (id) => {
        const uri = `/productDetails/${id}`;
        history ('/productDetails');

    } 

    useEffect( () => {
        Aos.init({ duration: 3000 })
    }, []);
    return (
        <div >
            <Col data-aos="zoom-in"  className="single-card my-3">
                    <img src={img} alt="" />
                    <h2>{name}</h2>
                    <h4>Price: ${Price}</h4>
                    <button data-aos="zoom-in" onClick={ () => handleDetails(id)}  > {shoppingcartIcon}Order Now</button>
                </Col>
        </div>
    );
};

export default Service;