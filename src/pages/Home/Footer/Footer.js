import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookMessenger, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {

    const cellIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />  
        const emailIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />
        const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
        const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
        const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
        const messangerIcon = <FontAwesomeIcon icon={faFacebookMessenger} />
        const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />

    return (

        <Container fluid>
        <Row className="footer footer-background">

            <Col lg={3} md={6} sm={12} xs={12}>
            <br />
                <h3><img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPibgCtqzQVhEcPyBcjKj9fd7JRhy-h5v4ZIbBCTkAfSL4d1WG-1yCSTwQslJ61ddtUF0&usqp=CAU" alt="" />Fade Into Coffee</h3> 
                
                <p>At Fade Into Coffee, were all about getting people together and enjoying each others company. We believe that what we do can weave a fabric of positive relationships and experiences.</p> 
            </Col>

            <Col lg={2} md={6} sm={12} xs={12}>
            <br />
                <h3>Follow</h3>
                <hr />
                <p> {facebookIcon} Fecebook</p>
                <p> {whatsappIcon} WhatsApp</p>
                <p> {instagramIcon} Instagram</p>
                <p> {twitterIcon} Twitter</p>                
            </Col>

            <Col lg={3} md={6} sm={12} xs={12}>
            <br />
                <h3>Contact</h3>
                <hr />
                <p>{cellIcon}  Cell: +543857935</p>
                <p>{emailIcon}  Mail: fadeintocoffee@fic.com</p>  
                <p>{twitterIcon}  Twit: fadeintocoffee@fic.com</p>  
                <p>{messangerIcon}  Message: fadeintocoffee@fic.com</p>  
            </Col>

            <Col lg={2} md={6} sm={12} xs={12}>
            <br />
                <h3>Legal</h3>
                <hr />
                <p>Privacy</p>
                <p>Terms</p>
                <p>Policy</p>
            </Col>

            <Col lg={2} md={6} sm={12} xs={12}>
            <br />
                <h3>Visit</h3>
                <hr />
                <p>Fade Into Coffee Co. WasingtonDC</p>
                <p>42 AB Road, Ste 100 <br /> Irvine, a, USA 43894</p>
            </Col>

            <p  className="footer-text">Copyright warning &copy; 2021 Fade Into Coffee</p>
        </Row>
        </Container>
    );
};

export default Footer;

//https://coffeeitis.com/wp-content/uploads/2018/11/footer-layout4-img-1.png