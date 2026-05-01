import React from 'react';
import './AnnouncementTicker.css';

const AnnouncementTicker = () => {
    return (
        <div className="announcement-bar-container">
            <div className="announcement-content">
                <div className="announcement-text">
                    <span className="main-warning">
                        ⚠️ Pay only via the official Cashfree links to GYANTRIX ACADEMY (Future Invo Solutions PVT LTD). Do not transfer funds to personal accounts or external UPI IDs.⚠️
                    </span>
                    <br />
                    <span className="sub-warning highlight-box">
                        ⚠️We are not responsible for payments made outside official Payment channels. ⚠️
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementTicker;
