import React, { useEffect } from 'react'
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import clientImg from "../../assets/images/clientImg.png";
import clientImg2 from "../../assets/images/clientImg2.png";
import AOS from "aos";
import "aos/dist/aos.css";
const WhatClient = () => {
    const options = {
        stagePadding: 0,
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1100: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        },
    };
    useEffect(() => {
        AOS.init({
            easing: "linear",
            once: true,
            delay: 400,
            duration: 800,
        });
        AOS.refresh()
    }, []);
    return (
        <>
            {/* <section className='what_client_wrap'>
                <Container>
                <div className="clients_title">
                        <h2 className='h2_title'>What clients Say</h2>
                        
                    </div>

                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div className='what_client_carousel'>
                                <OwlCarousel className='owl-theme hero_slider'  {...options}>
                                    <div className='item'>
                                        <div className='what_client_about_wrap'>
                                            <div className='what_client_about'>
                                                <Image src={clientImg} alt='client img' fluid />
                                                <h5 className='h5_title'>Priyanka Metha</h5>
                                            </div>
                                            <p className='pera'>Mahakal Cooling Towers are best in service they are provide the best service for their products and I am really satisfied with their service and product.</p>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='what_client_about_wrap'>
                                            <div className='what_client_about'>
                                                <Image src={clientImg2} alt='client img' fluid />
                                                <h5 className='h5_title'>Rahul Sharma</h5>
                                            </div>
                                            <p className='pera'>Mahakal Cooling Towers are best in service they are provide the best service for their products and I am really satisfied with their service and product.</p>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='what_client_about_wrap'>
                                            <div className='what_client_about'>
                                                <Image src={clientImg} alt='client img' fluid />
                                                <h5 className='h5_title'>Priyanka Metha</h5>
                                            </div>
                                            <p className='pera'>Mahakal Cooling Towers are best in service they are provide the best service for their products and I am really satisfied with their service and product.</p>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='what_client_about_wrap'>
                                            <div className='what_client_about'>
                                                <Image src={clientImg2} alt='client img' fluid />
                                                <h5 className='h5_title'>Rahul Sharma</h5>
                                            </div>
                                            <p className='pera'>Mahakal Cooling Towers are best in service they are provide the best service for their products and I am really satisfied with their service and product.</p>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
           </Col>
                    </Row>
                </Container>
            </section> */}
        </>
    )
}

export default WhatClient
