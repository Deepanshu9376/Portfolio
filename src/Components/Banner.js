import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../Assests/Images/headerimg.svg";
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons'; // assuming you're using react-feather for icons

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web", "Android", "AI/ML", "Game"];
    const period = 230;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(350);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    const handleDownloadResume = () => {
        // Replace 'YOUR_GOOGLE_DRIVE_RESUME_LINK' with your actual Google Drive link
        const googleDriveResumeLink = 'https://drive.google.com/file/d/1zKHWjG1yMLCXkvtrZaKslnyLhZUei7J9/view?usp=drive_link';
        window.open(googleDriveResumeLink, '_blank');
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Deepanshu `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web", "Android", "AI/ML","Game"]'><span className="wrap">{text}</span>{` Developer`}</span></h1>
                                    <p>I'm Deepanshu, a passionate software engineer driven by a fervent curiosity for exploring diverse tech stacks. A 2024 graduate in ECE from Punjab University, I've assumed various roles in different companies, showcasing my versatility across multiple tech domains. My portfolio highlights my adeptness in navigating various technologies, reflecting my commitment to continuous learning and innovation in the ever-evolving landscape of software engineering.</p>
                                    <button onClick={handleDownloadResume}>Download Resume <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
