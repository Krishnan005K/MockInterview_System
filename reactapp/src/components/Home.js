import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import centralImg from '../assets/images/center img.png';
import companyImg from '../assets/images/company.png';
import icon1 from '../assets/images/div img1.png';
import icon2 from '../assets/images/div img2.png';
import icon3 from '../assets/images/div img3.png';
import icon4 from '../assets/images/div img4.png';
import img1 from '../assets/images/home img2.jpg';
import img2 from '../assets/images/home img3.png';
import img3 from '../assets/images/home img4.png';
import img4 from '../assets/images/home img5.png';
import bgImage from '../assets/images/home side img.png';
import '../assets/style/Home.css';
import Navbar from './Navbar';

function Home() {
    React.useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        document.querySelectorAll('.row, .division').forEach(element => {
            observer.observe(element);
        });
    }, []);

    return (
        <div className="home-con">
            <Navbar />
            <div className="home-parent-container">
                <div className="home-image-container">
                    <img src={bgImage} alt="Background" className="home-bg-image" />
                </div>
                <div className="home-content-container">
                    <div className="home-container">
                        <h1 className="home-text">Ace Your Interviews with us!</h1>
                        <Link to="/register" className="home-button">Create Account</Link>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1721975298">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className="content-container">
                <div className="row">
                    <div className="content">
                        <h1>Master the interview & land a job worth loving.</h1>
                        <p>Simulate realistic interviews for over 120 different job positions and level up your skills in no time.</p>
                    </div>
                    <div className="image">
                        <img src={img1} alt="Interview Simulation" />
                    </div>
                </div>
                <div className="row">
                    <div className="image">
                        <img src={img2} alt="Interview Simulation" />
                    </div>
                    <div className="content">
                        <h1>Take Mock Interviews On Your Own</h1>
                        <p>Take unlimited interviews and master your skills from anywhere. No awkward meetups required.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="content">
                        <h1>Practice for the Pressure</h1>
                        <p>We use your built-in camera to recreate the pressure of actual interviews so you can gain realistic experience and feel prepared for anything.</p>
                    </div>
                    <div className="image">
                        <img src={img3} alt="Interview Simulation" />
                    </div>
                </div>
                <div className="row">
                    <div className="image">
                        <img src={img4} alt="Interview Simulation" />
                    </div>
                    <div className="content">
                        <h1>Take Mock Interviews On Your Own</h1>
                        <p>Take unlimited interviews and master your skills from anywhere. No awkward meetups required.</p>
                    </div>
                </div>
            </div>

            <div className="four-divisions-container">
                <div className="division">
                    <img src={icon1} alt="Icon 1" className="division-icon" />
                    <h2>Build interview confidence.</h2>
                    <p>We give you everything you need to master your interview skills in less time than any other option, so you can walk into your interview with confidence.</p>
                </div>
                <div className="division">
                    <img src={icon2} alt="Icon 2" className="division-icon" />
                    <h2>Get hired faster.</h2>
                    <p>Our simulator is optimized to help you master your interview skills in the most efficient way possible, so you can be prepared to ace the interview in no time.</p>
                </div>
                <div className="division">
                    <img src={icon3} alt="Icon 3" className="division-icon" />
                    <h2>Accelerate your career & earn more.</h2>
                    <p>Master the skill of interviewing by practicing it just like you practice your favorite sport or hobby.</p>
                </div>
                <div className="division">
                    <img src={icon4} alt="Icon 4" className="division-icon" />
                    <h2>Land the job you've been dreaming of.</h2>
                    <p>Gain realistic interview experience and confidence, and stand out in your job search.</p>
                </div>
            </div>

            <div className="rotating-images-container">
                <img src={centralImg} alt="Central Image" className="central-image" />
            </div>

            <div className="new-content-container">
                <h2>Our Promise to You</h2>
                <p>We're so confident we can get you interview-ready, we're introducing our Get the Job Guarantee. If you don't get the job, we'll give you your money back. Guaranteed.</p>
                <img src={companyImg} alt="Company" className="company-img" /> {/* Add the company image here */}
            </div>

            {/* Footer Component */}
            <footer className="footer">
                <div className="footer-links">
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact Us</a>
                    <a href="#faqs">FAQs</a>
                    <a href="#support">Support & How-To Videos</a>
                    <a href="#terms">Terms</a>
                    <a href="#privacy">Privacy</a>
                </div>
                <div className="footer-social">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <p className="footer-disclaimer">
                    © 2024 Intervue Hub, All Rights Reserved. | 1632 1st Avenue #21030, New York, NY 10028
                </p>
            </footer>
        </div>
    );
}

export default Home;