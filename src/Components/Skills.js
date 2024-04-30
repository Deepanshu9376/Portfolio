import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../Assests/Images/meter1.svg'
import meter2 from '../Assests/Images/meter2.svg'
import meter3 from '../Assests/Images/meter3.svg'
import colorsharp from '../Assests/Images/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <div className='check-box'>
                            <h2>Skills</h2>
                            <p>lkaskcsnalknxakslns</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt='Image'></img>
                                    <h5>Web development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='Image'></img>
                                    <h5>Android development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt='Image'></img>
                                    <h5>Game development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt='Image'></img>
                                    <h5>IOS development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='Image'></img>
                                    <h5>UI/UX development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
