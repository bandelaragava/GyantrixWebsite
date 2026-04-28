import React from 'react';
import { handleFormSubmit } from '../utils/leadForm';

const Contact = () => {
    return (
        <div className="contact-page-container">
            <section className="connect-premium">
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
                        <form onSubmit={(e) => handleFormSubmit(e, 'contactPage')}>
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
                                <span>Schedule Guidance</span>
                                <div className="liquid"></div>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
