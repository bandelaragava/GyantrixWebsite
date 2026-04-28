import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { getAssetUrl } from '../utils/assets';
import { handleFormSubmit } from '../utils/leadForm';
import CourseTrending from '../components/CourseTrending';
import FeaturesSection from '../components/FeaturesSection';
import isoLogo from '../assets/ISO.png';
import msmeLogo from '../assets/msme.png';
import skillIndiaLogo from '../assets/skillindia.png';

const Home = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [activeOffer, setActiveOffer] = useState(0);
    const [showAllFaqs, setShowAllFaqs] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

        return () => {
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    }, []);

    const offers = [
        {
            title: "Live & Recorded",
            icon: "fas fa-video",
            subtitle: "Hybrid Learning Experience",
            description: "Engage in real-time with industry veterans during our intensive live sessions. Missed a class? No worries—get lifetime access to our HD recording library and comprehensive study materials.",
            features: ["Doubt Clearing Sessions", "Self-Paced Learning", "High-Quality Video Content", "Access Anywhere"]
        },
        {
            title: "Real-World Projects",
            icon: "fas fa-project-diagram",
            subtitle: "Portfolio-Grade Assignments",
            description: "Bridge the gap between theory and practice. Work on 10+ industry-grade projects curated by tech leads from top MNCs, simulating real challenges you'll face in the professional world.",
            features: ["End-to-End Development", "Case Study Analysis", "GitHub Profile Enhancement", "Peer Review System"]
        },
        {
            title: "AI-Powered LMS",
            icon: "fas fa-robot",
            subtitle: "Next-Gen Learning Platform",
            description: "Experience the futures of education. Our AI-enabled Learning Management System tracks your performance, suggests personalized resources, and helps you master complex topics faster.",
            features: ["Personalized Dashboards", "Automated Assessments", "Resource Recommendation", "Progress Tracking"]
        },
        {
            title: "Mentor Access",
            icon: "fas fa-user-tie",
            subtitle: "1-on-1 Career Guidance",
            description: "Don't just learn; be guided. Get direct access to senior professionals who provide personalized career coaching, technical mentorship, and technical advice to help you scale.",
            features: ["Direct Interaction", "Career Coaching", "Resume Support", "Technical Reviews"]
        },
        {
            title: "Career Support",
            icon: "fas fa-briefcase",
            subtitle: "Global Placement Network",
            description: "Your success is our priority. Benefit from our extensive network of 999+ hiring partners. We provide end-to-end placement assistance until you land your dream job.",
            features: ["Mock Interviews", "Placement Drives", "Global Network", "Salary Negotiation Support"]
        }
    ];

    return (
        <div className="home-page">
            {/* ... hero and other sections ... */}
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Building Next Generation AI and Tech Professionals</h1>
                    <h3>India’s Leading and <span className="highlight">Trusted IT Training</span></h3>
                    <div className="infosection hero-infosection">
                        <p className="pp"><span className="highlightbtn">Gain real-world experience with guidance from industry experts.</span></p>
                        <p>Powered by an <span className="hgbtn">AI-Enabled LMS,</span> we’re empowering the next generation of</p>
                        <div className="course-slider">
                            <div className="course-list">
                                <p>Artificial Intelligence</p>
                                <p>Full Stack Developer</p>
                                <p>Data Analyst</p>
                                <p>Data Science</p>
                                <p>Business Analyst</p>
                                <p>Medical Coding</p>
                                <p>Medical Scribing</p>
                                <p>Genetic Engineering</p>
                                <p>Pharmacovigilance</p>
                                <p>Product Management</p>
                                <p>Digital Marketing</p>
                                <p>Human Resources</p>
                                <p>Nano Science & Technology</p>
                                {/* Duplicate for seamless scroll */}
                                <p>Artificial Intelligence</p>
                                <p>Full Stack Developer</p>
                                <p>Data Analyst</p>
                                <p>Data Science</p>
                                <p>Business Analyst</p>
                                <p>Medical Coding</p>
                                <p>Medical Scribing</p>
                                <p>Genetic Engineering</p>
                                <p>Pharmacovigilance</p>
                                <p>Product Management</p>
                                <p>Digital Marketing</p>
                                <p>Human Resources</p>
                                <p>Nano Science & Technology</p>
                            </div>
                        </div>
                    </div>

                    <div className="company-logos">
                        <img src={getAssetUrl("/images/IBM.png")} alt="IBM" />
                        <img src={getAssetUrl("/images/micro.webp")} alt="Microsoft" />
                        <img src={getAssetUrl("/images/infosys_logo.png")} alt="Infosys" />
                        <img src={getAssetUrl("/images/Meta.png")} alt="Meta" />
                        <img src={getAssetUrl("/images/AWS.png")} alt="AWS" />
                        <img src={getAssetUrl("/images/amazon.png")} alt="Amazon" />
                        <img src={getAssetUrl("/images/goggle.png")} alt="Goggle" />
                        <img src={getAssetUrl("/images/wipro.png")} alt="Wipro" />
                        <img src={getAssetUrl("/images/youtube.png")} alt="Youtube" />
                    </div>

                    <div className="course-buttons">
                        <Link to="/courses/artificialintelligence" className="btn blue">
                            <span>Artificial Intelligence</span>
                            <div className="liquid"></div>
                        </Link>
                        <Link to="/courses/fullstack" className="btn orange">
                            <span>Web Developer</span>
                            <div className="liquid"></div>
                        </Link>
                        <Link to="/courses/medicalCoding" className="btn red">
                            <span>Medical Coding</span>
                            <div className="liquid"></div>
                        </Link>
                        <Link to="/courses/geneticeng" className="btn sky">
                            <span>Genetic Engineering</span>
                            <div className="liquid"></div>
                        </Link>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="orbit outer-orbit">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                        <img src="https://www.pngitem.com/pimgs/m/171-1718042_javascript-logo-png-transparent-png.png" alt="JS" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                        <img src={getAssetUrl("/images/c-icon.png")} alt="c" />
                        <img src={getAssetUrl("/images/rprogramming.jpeg")} alt="RProgramming" />
                    </div>

                    <div className="orbit inner-orbit">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png" alt="Node.js" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                        <img src={getAssetUrl("/images/goL.png")} alt="Go" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                        <img src="https://cdn-icons-png.flaticon.com/512/2772/2772128.png" alt="SQL" />
                    </div>

                    <div className="center">
                        <img src={getAssetUrl("/images/gy1.jpg")} alt="Center Logo" />
                    </div>
                </div>


            </section>



            <section className="acrdt-dual">
                <div className="acrdt-column">
                    <h3>We are Collaborated & Accredited by</h3>
                    <div className="logo-static-grid">
                        <div className="logo-item-static">
                            <img src={getAssetUrl("/images/MCA.png")} alt="MCA" />
                        </div>
                        <div className="logo-item-static">
                            <img src={msmeLogo} alt="MSME" />
                        </div>
                        <div className="logo-item-static">
                            <img src={isoLogo} alt="ISO" />
                        </div>
                    </div>
                </div>

                <div className="acrdt-divider"></div>

                <div className="acrdt-column">
                    <h3>Yet to Accredited by</h3>
                    <div className="logo-static-grid">
                        <div className="logo-item-static">
                            <img src={getAssetUrl("/images/nsdclogo.jpg")} alt="NSDC" />
                        </div>
                        <div className="logo-item-static">
                            <img src={skillIndiaLogo} alt="Skill India" />
                        </div>
                        <div className="logo-item-static">
                            <img src={getAssetUrl("/images/nasscom1.png")} alt="NASSCOM" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <FeaturesSection />

            {/* Premium Interactive Stepper Section */}
            <section className="offer-stepper">
                <div className="bg-glow-orb-1"></div>
                <div className="bg-glow-orb-2"></div>
                <div className="container">
                    <div className="stepper-header">
                        <span className="badge">Why Choose Gyantrix?</span>
                        <h2>Unmatched Training Ecosystem</h2>
                        <p>Experience a professional learning journey designed for modern tech careers.</p>
                    </div>

                    <div className="stepper-layout">
                        {/* Navigation Container (Responsive Accordion + Desktop Sidebar) */}
                        <div className="stepper-nav">
                            {offers.map((offer, index) => (
                                <div key={index} className="stepper-wrapper">
                                    <button
                                        className={`stepper-item ${activeOffer === index ? 'active' : ''}`}
                                        onClick={() => setActiveOffer(index)}
                                        onMouseEnter={() => { if (window.innerWidth > 992) setActiveOffer(index); }}
                                    >
                                        <div className="stepper-icon-box">
                                            <i className={offer.icon}></i>
                                        </div>
                                        <div className="stepper-text">
                                            <h3>{offer.title}</h3>
                                            <span>{offer.subtitle}</span>
                                        </div>
                                        <div className="active-indicator"></div>
                                        <i className={`fas fa-chevron-${activeOffer === index ? 'up' : 'down'} accordion-arrow mobile-only`}></i>
                                    </button>

                                    {/* Mobile/Tablet Inline Content (Accordion) */}
                                    {activeOffer === index && (
                                        <div className="stepper-content-inline">
                                            <div className="showcase-content">
                                                <div className="showcase-info">
                                                    <span className="showcase-tag">Features Overview</span>
                                                    <h1>{offer.title}</h1>
                                                    <p>{offer.description}</p>
                                                    <div className="feature-tags">
                                                        {offer.features.map((feat, i) => (
                                                            <span key={i} className="feat-tag">
                                                                <i className="fas fa-check-circle"></i> {feat}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <Link to="/courses" className="btn showcase-btn">
                                                        <span>Explore Programs</span>
                                                        <div className="liquid"></div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop Showcase (Side-by-side) */}
                        <div className="stepper-showcase desktop-only">
                            {offers[activeOffer] && (
                                <div className="showcase-card-inner" key={activeOffer}>
                                    <div className="showcase-top-row">
                                        <div className="showcase-info">
                                            <span className="showcase-tag">Features Overview</span>
                                            <h1>{offers[activeOffer].title}</h1>
                                            <p>{offers[activeOffer].description}</p>
                                        </div>
                                        <div className="showcase-visual">
                                            <div className="floating-sphere"></div>
                                            <div className="icon-large">
                                                <i className={offers[activeOffer].icon}></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="feature-tags-row">
                                        {offers[activeOffer].features.map((feat, i) => (
                                            <div key={i} className="feat-tag">
                                                <i className="fas fa-check-circle"></i> {feat}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="showcase-footer">
                                        <Link to="/courses" className="btn showcase-btn">
                                            <span>Explore Programs</span>
                                            <div className="liquid"></div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Trending Section */}
            <CourseTrending initialCategory="trending" showFilters={true} />

            {/* Partners section */}
            <section className="partners premium-partners">
                <div className="partners-main">
                    <div className="partners-content">
                        <div className="partners-brand">
                            Gyantrix {/*<span className="fx-box">GA</span> */}
                        </div>
                        <h1 className="partners-title-large">Trusted by 500+ Global Enterprises</h1>
                        <ul className="partners-bullets">
                            <li>Empowering 500+ enterprises to accelerate growth & innovation by building future-ready AI teams.</li>
                            <li>Learners are recognized for their excellence in Full Stack, Data Science, AI, DevOps, and more.</li>
                            <li>Top organizations trust our graduates for their hands-on expertise and job readiness.</li>
                        </ul>
                        <Link to="/courses" className="partners-cta">
                            Discover Gyantrix Academy <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>

                    <div className="partners-logos-container">
                        <div className="partners-logos vertical-scroll no-gap">
                            {[1, 2, 3, 4].map((colIndex) => (
                                <div key={colIndex} className="logo-col scroll-up">
                                    <div className={`logo-track-vertical speed-${colIndex === 1 ? 'medium' : colIndex === 2 ? 'slow' : colIndex === 3 ? 'fast' : 'medium'}`}>
                                        {(colIndex === 1 ? ['IBM.png', 'Wiprologo1.jpg', 'infosys_logo.png', 'amazon.png', 'genpact.jpg'] :
                                            colIndex === 2 ? ['accenture.webp', 'Intel.png', 'publicis-sapient.png', 'wns.jpg', 'fractal.png'] :
                                                colIndex === 3 ? ['clubmahindra.png', 'ABInBev.png', 'TVS.png', 'americanexpress.png', 'Meta.png'] :
                                                    ['AWS.png', 'goggle.png', 'mphasis.jpeg', 'sapient.png', 'infosys_logo.png']).map(img => (
                                                        <img key={img} src={getAssetUrl(`/images/${img}`)} alt={img} />
                                                    ))}
                                        {(colIndex === 1 ? ['IBM.png', 'Wiprologo1.jpg', 'infosys_logo.png', 'amazon.png', 'genpact.jpg'] :
                                            colIndex === 2 ? ['accenture.webp', 'Intel.png', 'publicis-sapient.png', 'wns.jpg', 'fractal.png'] :
                                                colIndex === 3 ? ['clubmahindra.png', 'ABInBev.png', 'TVS.png', 'americanexpress.png', 'Meta.png'] :
                                                    ['AWS.png', 'goggle.png', 'mphasis.jpeg', 'sapient.png', 'infosys_logo.png']).map(img => (
                                                        <img key={`dup-${colIndex}-${img}`} src={getAssetUrl(`/images/${img}`)} alt={img} />
                                                    ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Pagination dots like in the image */}
                        <div className="partners-pagination">
                            <span className="dot active"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section — Redesigned */}
            <section className="why-choose-v2">
                <div className="wc2-bg-orb wc2-orb1"></div>
                <div className="wc2-bg-orb wc2-orb2"></div>
                <div className="wc2-bg-orb wc2-orb3"></div>

                <div className="wc2-header">
                    <span className="wc2-eyebrow">
                        <i className="fas fa-star"></i> Our Edge
                    </span>
                    <h2 className="wc2-title">Why Learners <span>Choose Gyantrix</span></h2>
                    <p className="wc2-subtitle">Six powerful pillars that transform learners into industry-ready professionals</p>
                </div>

                <div className="wc2-grid">
                    {[
                        {
                            icon: "fas fa-bolt",
                            num: "01",
                            color: "#6366f1",
                            glow: "rgba(99,102,241,0.35)",
                            tag: "DOUBT CLEARING",
                            title: "Instant Clarity,\nLasting Growth",
                            p: "Clear your doubts instantly with live expert sessions and move forward with the clarity, confidence, and skills essential for career advancement.",
                            stat: "2x",
                            statLabel: "Faster Learning"
                        },
                        {
                            icon: "fas fa-fire-flame-curved",
                            num: "02",
                            color: "#f97316",
                            glow: "rgba(249,115,22,0.35)",
                            tag: "RESILIENCE BUILDING",
                            title: "Turn Challenges\ninto Triumphs",
                            p: "Embrace the right approach, transforming every challenge into a powerful opportunity to build clarity, confidence, and accelerate career growth.",
                            stat: "98%",
                            statLabel: "Learner Satisfaction"
                        },
                        {
                            icon: "fas fa-microphone-lines",
                            num: "03",
                            color: "#10b981",
                            glow: "rgba(16,185,129,0.35)",
                            tag: "INTERVIEW PREP",
                            title: "Master the Interview,\nSecure Your Future",
                            p: "Master interview techniques with expert-led mock sessions — build unshakeable confidence, refine every answer, and land the career you've envisioned.",
                            stat: "500+",
                            statLabel: "Placements Done"
                        },
                        {
                            icon: "fas fa-medal",
                            num: "04",
                            color: "#f59e0b",
                            glow: "rgba(245,158,11,0.35)",
                            tag: "CERTIFICATION",
                            title: "Globally Recognized,\nCredibly Certified",
                            p: "Earn globally recognized certifications that validate your expertise, boost your credibility, and unlock doors to international career opportunities.",
                            stat: "50+",
                            statLabel: "Global Certifications"
                        },
                        {
                            icon: "fas fa-user-shield",
                            num: "05",
                            color: "#ec4899",
                            glow: "rgba(236,72,153,0.35)",
                            tag: "EXPERT MENTORSHIP",
                            title: "Expert Guidance,\nYour Path to Confidence",
                            p: "Get access to seasoned industry mentors who transform confusion into clarity and equip you with the skills and confidence to tackle any challenge.",
                            stat: "1-on-1",
                            statLabel: "Mentor Sessions"
                        },
                        {
                            icon: "fas fa-id-badge",
                            num: "06",
                            color: "#06b6d4",
                            glow: "rgba(6,182,212,0.35)",
                            tag: "PROFILE BUILDING",
                            title: "Build a Profile That\nCommands Attention",
                            p: "Develop a powerful professional profile — engineered to impress top recruiters, showcase your unique strengths, and unlock unparalleled career opportunities.",
                            stat: "999+",
                            statLabel: "Hiring Partners"
                        },
                    ].map((item, i) => (
                        <div key={i} className="wc2-card" style={{ '--card-color': item.color, '--card-glow': item.glow }}>
                            <div className="wc2-card-shimmer"></div>
                            <div className="wc2-card-top">
                                <div className="wc2-icon-wrap">
                                    <i className={item.icon}></i>
                                </div>
                                <span className="wc2-num">{item.num}</span>
                            </div>
                            <span className="wc2-tag">{item.tag}</span>
                            <h3 className="wc2-card-title">
                                {item.title.split('\n').map((line, idx) => (
                                    <span key={idx}>{line}{idx === 0 && <br />}</span>
                                ))}
                            </h3>
                            <p className="wc2-card-desc">{item.p}</p>
                            <div className="wc2-card-footer">
                                <div className="wc2-stat">
                                    <span className="wc2-stat-num">{item.stat}</span>
                                    <span className="wc2-stat-lbl">{item.statLabel}</span>
                                </div>
                            </div>
                            <div className="wc2-card-bar"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills-section">
                <div className="content">
                    <p className="intro">
                        Transforming Your Potential into Expertise At <b>Gyantrix</b>, we’re dedicated to helping you grow into a skilled
                        professional. With guidance from industry experts, practical learning opportunities, and cutting-edge resources,
                        we empower you to reach your goals and excel in your career.
                    </p>
                    <h3>Skills Today, Success Tomorrow</h3>
                    <div className="skills-body">
                        <div className="features-container">
                            <div className="features left">
                                {[
                                    { img: "3135715.png", b: "Free", p: "Career Guidance" },
                                    { img: "3135768.png", b: "Globally", p: "Approved Curriculum" },
                                    { img: "3135755.png", b: "Dedicated", p: "Student Dashboard" },
                                    { img: "3135780.png", b: "Classroom", p: " & Online Trainings" },
                                    { img: "image.png", b: "Classroom", p: "Recordings", isLocal: true },
                                ].map((f, i) => (
                                    <div key={i} className="featuree">
                                        <img src={f.isLocal ? getAssetUrl(`/images/${f.img}`) : `https://cdn-icons-png.flaticon.com/512/3135/${f.img}`} alt="" />
                                        <div className="text"><b>{f.b}</b><p>{f.p}</p></div>
                                    </div>
                                ))}
                            </div>
                            <div className="features right">
                                {[
                                    { img: "3135752.png", b: "Course", p: "Materials" },
                                    { img: "3135743.png", b: "Module", p: "Based Assessments" },
                                    { img: "3135758.png", b: "Hands", p: "On Projects" },
                                    { img: "3135738.png", b: "Internship", p: "Opportunity" },
                                    { img: "3135762.png", b: "Career", p: "Support" },
                                ].map((f, i) => (
                                    <div key={i} className="featuree">
                                        <img src={`https://cdn-icons-png.flaticon.com/512/3135/${f.img}`} alt="" />
                                        <div className="text"><b>{f.b}</b><p>{f.p}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="divider">
                            <span className="dot"></span>
                            <span className="line"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="form-box">
                            <form className="lead-table" onSubmit={(e) => handleFormSubmit(e, 'skillsSection')}>
                                <label htmlFor="skill-name">Name<span className="star">*</span>:</label>
                                <input type="text" id="skill-name" name="name" required />
                                <label htmlFor="skill-number">Mobile Number<span className="star">*</span>:</label>
                                <input type="tel" id="skill-number" name="mobileNumber" required />
                                <label htmlFor="skill-email">Email<span className="star">*</span>:</label>
                                <input type="email" id="skill-email" name="email" required />
                                <label>Message</label>
                                <textarea rows="3" name="message"></textarea>
                                <button type="submit" className="btn">
                                    <span>Submit</span>
                                    <div className="liquid"></div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Launch Program Section */}


            {/* FAQ Section */}
            < section className="faq-section home-faq" >
                <h2>Frequently Asked Questions</h2>
                <p>Got more questions? Feel free to contact us for more information.</p>
                <Link to="/contact" className="btn" style={{ width: 'auto', padding: '0.8rem 2rem' }}>
                    <span>Contact Us</span>
                    <div className="liquid"></div>
                </Link>
                <div className="faq-content">
                    <div className="faq-column">
                        {[
                            { id: "1-1", q: "Can employees attend sessions from different locations?", a: "Yes, all our courses are offered in flexible online modes, allowing employees to attend sessions remotely from any location worldwide." },
                            { id: "1-2", q: "Do you provide placement or career support?", a: "We provide comprehensive career support, including resume building, interview preparation, and access to our network of hiring partners." },
                            { id: "1-3", q: "How does Gyantrix Academy measure training effectiveness?", a: "Effectiveness is measured through regular assessments, project completion, feedback surveys, and tracking post-training performance metrics for corporate clients." },
                            { id: "1-4", q: "What companies or industries do you cater to?", a: "We cater to diverse sectors including IT, Finance, Healthcare, E-commerce, and Manufacturing, providing customized training for various job roles." },
                            { id: "1-5", q: "How do we enroll or request a corporate training program?", a: "You can contact our Corporate Training team via the 'Contact Us' button or fill out the inquiry form on our website to start the enrollment process." },
                            { id: "1-6", q: "Are these certifications valid for government or overseas jobs?", a: "Our industry-recognized certifications are highly valued globally. While specific government requirements vary, they significantly support applications for both domestic and overseas roles." },
                            { id: "1-7", q: "What certifications will I receive after completing the program?", a: "You will receive a program completion certificate from Gyantrix, in addition to preparation support for external vendor certifications (e.g., AWS, Microsoft, Cisco)." },
                            { id: "1-8", q: "What training modes are available in Gyantrix Academy?", a: "We offer online live classes, self-paced learning modules, and dedicated corporate on-site or virtual bootcamps." }
                        ].slice(0, showAllFaqs ? undefined : 3).map((item) => (
                            <div key={item.id} className="faq-item">
                                <input type="checkbox" id={`faq-${item.id}`} className="faq-toggle" checked={openFaq === item.id} onChange={() => setOpenFaq(openFaq === item.id ? null : item.id)} />
                                <label htmlFor={`faq-${item.id}`} className="faq-question">{item.q}</label>
                                <div className="faq-answer"><p>{item.a}</p></div>
                            </div>
                        ))}
                    </div>
                    <div className="faq-column">
                        {[
                            { id: "2-1", q: "What kind of training programs does Gyantrix Academy provide?", a: "We offer programs in Data Science, Cloud Computing, Cybersecurity, Digital Marketing, and various other industry-aligned professional skills." },
                            { id: "2-2", q: "Can training be customized for our organization?", a: "Absolutely. We specialize in tailoring curriculum content, duration, and delivery mode to meet the specific requirements and goals of your organization." },
                            { id: "2-3", q: "Do you provide certification after training?", a: "Yes, participants receive an industry-recognized certification from Gyantrix Academy upon successful completion of the course and final project/exam." },
                            { id: "2-4", q: "How are trainers selected at Gyantrix Academy?", a: "Our trainers are industry veterans with extensive experience, selected through a rigorous process that ensures both deep domain knowledge and teaching proficiency." },
                            { id: "2-5", q: "Do you provide internship opportunity with MNCs and IT companies?", a: "We facilitate internship opportunities and project-based learning through our partnerships, helping candidates gain relevant work experience." },
                            { id: "2-6", q: "How do these certifications benefit my career?", a: "The certifications enhance your profile credibility, demonstrate specialized skills to recruiters, and significantly boost your chances of securing higher-paying jobs." },
                            { id: "2-7", q: "Is placement assistance provided?", a: "We provide dedicated placement support and hiring partner interview opportunities until a candidate is successfully placed." }
                        ].slice(0, showAllFaqs ? undefined : (isMobile ? 2 : 3)).map((item) => (
                            <div key={item.id} className="faq-item">
                                <input type="checkbox" id={`faq-${item.id}`} className="faq-toggle" checked={openFaq === item.id} onChange={() => setOpenFaq(openFaq === item.id ? null : item.id)} />
                                <label htmlFor={`faq-${item.id}`} className="faq-question">{item.q}</label>
                                <div className="faq-answer"><p>{item.a}</p></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <button className="btn" onClick={() => setShowAllFaqs(!showAllFaqs)} style={{ width: 'auto', padding: '0.8rem 2rem' }}>
                        <span>{showAllFaqs ? 'Show Less' : 'View More FAQs'}</span>
                        <div className="liquid"></div>
                    </button>
                </div>
            </section >

            {/* Testimonials */}
            < section className="testimonials" >
                <h2>What Students Say</h2>
                <div className="testimonials-grid">
                    <div className="slider row1">
                        <div className="track">
                            {Array(4).fill([
                                { p: "Gyantrix transformed the way I think about learning. The mentors not only teach — they guide, motivate, and prepare you for real-world challenges.", name: "Rakesh Choudhary" },
                                { p: "The Data Science program at Gyantrix helped me gain job-ready skills and land my first internship in less than three months. Highly recommended!", name: "Ananya Gupta" },
                                { p: "The training here is industry-focused. Every concept is taught with practical use cases, making me feel ready for any professional challenge.", name: "Karthik Goud" },
                                { p: "I enrolled in the Full Stack program, and it completely changed my career path. The support team was with me from day one to placement day.", name: "Swati Nair" },
                                { p: "From resume building to interview preparation — Gyantrix covers it all. I’m now working with one of the top MNCs, and it all started here.", name: "Amit Malhotra" }
                            ]).flat().map((t, i) => (
                                <div key={i} className="crd">
                                    <p>{t.p}</p>
                                    <div className="stars">★★★★★</div>
                                    <h4>— {t.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="slider row2">
                        <div className="track">
                            {Array(4).fill([
                                { p: "From resume building to interview preparation — Gyantrix covers it all. I’m now working with one of the top MNCs, and it all started here.", name: "Amit Malhotra" },
                                { p: "I enrolled in the Full Stack program, and it completely changed my career path. The support team was with me from day one to placement day.", name: "Swati Nair" },
                                { p: "The training here is industry-focused. Every concept is taught with practical use cases, making me feel ready for any professional challenge.", name: "Karthik Goud" },
                                { p: "The Data Science program at Gyantrix helped me gain job-ready skills and land my first internship in less than three months. Highly recommended!", name: "Ananya Gupta" },
                                { p: "Gyantrix transformed the way I think about learning. The mentors not only teach — they guide, motivate, and prepare you for real-world challenges.", name: "Rakesh Choudhary" }
                            ]).flat().map((t, i) => (
                                <div key={i} className="crd">
                                    <p>{t.p}</p>
                                    <div className="stars">★★★★★</div>
                                    <h4>— {t.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <h3 className="feature-title">Featured In</h3>
                <div className="feature-logos">
                    {Array(4).fill(['thehindunewspaper.png', 'TV5.jpg', 'hmtv.png', 'eenadu.jpg', 'v6.jpeg', 'hansindia.jpg', 'andhrajyothy.png', 'adhabhyd.png', 'dailyhunt.jpeg', 'lokal.jpg', 'teluguprabha.jpeg', 'manatg.jpeg', 'tnews.jpg', 'metroudayam.jpeg', 'TheDaily.jpeg']).flat()
                        .map((img, idx) => (
                            <img key={`${img}-${idx}`} src={getAssetUrl(`/images/${img}`)} alt={img} />
                        ))}
                </div> */}
            </section >

            {/* Connect Section */}
            < section className="connect-premium" >
                <div className="bg-glow-orb-1"></div>
                <div className="bg-glow-orb-2"></div>

                <div className="connect-header">
                    <span className="badge">Get in Touch</span>
                    <h1>Let's Connect and Plan <br /><span>Your Career Ahead</span></h1>
                    <p>Our team of expert career guide ninjas are ready to help you choose the right path with clarity and confidence.</p>
                </div>

                <div className="connect-grid-container">
                    <div className="info-card-premium address-info">
                        <div className="icon-box">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h3>Central Office</h3>
                        <p className="address-text">
                            Gyantrix,<br />
                            Pathrika Nagar, Street No:1,<br />
                            HITEC City, Hyderabad – 500081
                        </p>
                        <div className="map-iframe-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14510.461431223623!2d78.37496775!3d17.458629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1771933319846!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: '16px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                            ></iframe>
                        </div>

                        <div className="contact-small">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>support@gyantrixacademy.com</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone-alt"></i>
                                <span>+91 9247551330</span>
                            </div>
                        </div>
                    </div>

                    <div className="form-card-premium">
                        <form onSubmit={(e) => handleFormSubmit(e, 'footerSection')}>
                            <div className="input-group-grid">
                                <div className="input-field">
                                    <label>Full Name</label>
                                    <input type="text" name="name" placeholder="John Doe" required />
                                </div>
                                <div className="input-field">
                                    <label>Email Address</label>
                                    <input type="email" name="email" placeholder="john@example.com" required />
                                </div>
                            </div>
                            <div className="input-field">
                                <label>Mobile Number</label>
                                <input type="tel" name="mobileNumber" placeholder="+91 00000 00000" required />
                            </div>
                            <div className="input-field">
                                <label>How can we help?</label>
                                <select name="interest" className="custom-select">
                                    <option value="career-guidance">Career Guidance</option>
                                    <option value="course-info">Course Information</option>
                                    <option value="placement-support">Placement Support</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <button type="submit" className="submit-btn-premium">
                                <span>Schedule Consultation</span>
                                <div className="liquid"></div>
                            </button>
                        </form>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Home;
