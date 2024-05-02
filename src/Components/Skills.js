
import meter1 from "../Assests/Images/meter1.svg";
import meter2 from "../Assests/Images/meter2.svg"
import meter3 from "../Assests/Images/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../Assests/Images/arrow1.svg";
// import arrow2 from "../Assests/Images/arrow2.svg";
import colorSharp from "../Assests/Images/color-sharp.png"

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
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>I've cultivated a diverse skill set through exploration and hands-on experience. In the realm of machine learning projects, I've leveraged languages such as C++, C#, and Python. For web development endeavors, I'm proficient in JavaScript, React, and Node.js, enabling me to craft dynamic and responsive web applications. Additionally, in the domain of Android development, I've honed my skills using Kotlin and Android Studio, empowering me to create robust and user-friendly mobile applications.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                                <div className='item'>
                                    <img src={meter1} alt='altImage'></img>
                                    <h5>C++</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='altImage'></img>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt='altImage'></img>
                                    <h5>Kotlin</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt='altImage'></img>
                                    <h5>C#</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='altImage'></img>
                                    <h5>Python</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="altImage" />
        </section>
    )
}
