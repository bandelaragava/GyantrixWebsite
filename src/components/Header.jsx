import React, { useEffect } from 'react';
import './Header.css';
import Navbar from './Navbar';
import AnnouncementTicker from './AnnouncementTicker';

const Header = () => {
    useEffect(() => {
        // Scroll logic removed as navbar should remain sticky and not move
    }, []);

    return (
        <div className="site-header">
            <AnnouncementTicker />
            <Navbar />
        </div>
    );
};

export default Header;
