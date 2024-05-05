import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Experience = () => {
    const experiences = [
        {
            id: 1,
            image: require('../Assests/Images/gemini.jpg'),
            companyName: 'Gemini Solutions',
            role: 'Software Engineer Intern',
            periodOfWork: 'Jan 2024 - Present',
            description: 'Acquired foundational skills in various programming languages and technologies including Linux, SQL, HTML, CSS, JavaScript, Python, C#.Specialized training in MEARN stack development, encompassing MongoDB, Express, Angular, ReactJS, and Node.js, enabling proficiency in full-stack web development.',
        },
        {
            id: 2,
            image: require('../Assests/Images/mindpill.jpg'),
            companyName: 'MindPill-India',
            role: 'Software Engineer Intern',
            periodOfWork: 'Jul 2023 - Sept 2023',
            description: 'Led technical team in startup to develop a stress-reducing health app.Developed an application that can measure stress levels, help reduce stress for the general population, and provide expert counseling services',
        },
        {
            id: 3,
            image: require('../Assests/Images/hibullseye.jpg'),
            companyName: 'Hibtullseye',
            role: 'Techincal Trainer Assistant',
            periodOfWork: 'Jun 2023 - Jul 2023',
            description: 'Collaborated with trainers to deliver impactful training sessions, promptly addressing doubts and resolving student queries.Achieved a 70% increase in course completion rates. Engaged in interview discussions, conducted tests, and provided support for Data Structures and Algorithms, C++.',
        },
        {
            id: 4,
            image: require('../Assests/Images/techbias.jpg'),
            companyName: 'Tech-Bias Innovations',
            role: 'Backend Engineer Intern',
            periodOfWork: 'Jun 2023 - Jul 2023',
            description: 'Executed backend integration for the football page via NodeJS, ExpressJs, MongoDB, and Mongoose. Achieved real-time updates on player performance, match schedules, and team standings. Leveraged Postman API to optimize API calls to NewsApi.org',
        },
        {
            id: 5,
            image: require('../Assests/Images/gdsc-social-share (1).png'),
            companyName: 'Google Developer Student Club Uiet',
            role: 'Android Development lead',
            periodOfWork: 'Aug 2022 - Jan 2023',
            description: 'Gain expertise in Android development using Kotlin, leveraging the power of Android Studio and Firebase. Craft robust, user-friendly mobile applications, enhancing performance and user experience by up to 90%. Benefit from mentorship by Google experts, while also imparting knowledge in Kotlin and Android development to students. Master Android Studio to build cutting-edge robotics applications.',
        },
        {
            id: 6,
            image: require('../Assests/Images/smartinet (1).png'),
            companyName: 'SmartInternz',
            role: 'Android Development Intern',
            periodOfWork: 'Jul 2022 - Sept 2022',
            description: 'During my two-month tenure, I acquired proficiency in Android development utilizing Kotlin programming language and Android Studio. I focused on creating applications tailored for robotics, demonstrating competence in both technical implementation and problem-solving within the Android ecosystem.',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipe: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true,
                }
            }
        ]
    };

    return (
        <div className='m-auto experience' id='experience'>
            <div className='mt-20'>
                <div className='expbx'>
                    <h2>Experience</h2>
                    <p>As an avid and evidence-driven learner, I've had the privilege to work with distinguished companies such as Gemini Solutions, Mindpill India, TechBias Innovations, and SmartInternz. My focus has been on development, coupled with imparting knowledge, notably as a Coding Mentor and Android Lead at Google Developer Student Clubs. Additionally, I've contributed to teaching endeavors at HitBullseye. </p>
                </div>
                <Slider {...settings} className='skill-slider' size={12} md={6}>
                    {experiences.map((ex) => (
                        <div key={ex.id} className='expup' size={12} md={6}>
                            <div className='imgup'>
                                <img src={ex.image} alt="companyimage" className='imagasli' />
                            </div>
                            <div className='infobx flex flex-col g-4 p-4' size={12} md={6} >
                                <p className='cmpnyname'>{ex.companyName}</p>
                                <p className='oth'>Role: {ex.role}</p>
                                <p className='oth'>Tenure: {ex.periodOfWork}</p>
                                <p className='oth'> Desc: {ex.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
