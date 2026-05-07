import React, { useEffect, useState } from 'react';
import './Header.css';
import Navbar from './Navbar';
import AnnouncementTicker from './AnnouncementTicker';

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // The red announcement bar is ~40px. When we scroll past it, fix the navbar.
            if (window.scrollY > 40) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Check initial position on load
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <AnnouncementTicker />
            <div className={`site-header ${isFixed ? 'fixed-header' : ''}`}>
                <Navbar />
            </div>
            {/* Prevents page content from jumping abruptly when navbar becomes fixed */}
            {isFixed && <div className="header-spacer" style={{ height: '70px', width: '100%' }}></div>}
        </>
    );
};

export default Header;
