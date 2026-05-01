import React, { useState, useEffect } from 'react';
import './PaymentPopup.css';

const PaymentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000); // 5 seconds delay

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-container" onClick={e => e.stopPropagation()}>
                <div className="popup-header">
                    <span className="warning-emoji">⚠️</span>
                    <h2>Important Payment Notice</h2>
                    <button className="close-btn" onClick={closePopup}>&times;</button>
                </div>
                <div className="popup-body">
                    <p className="highlight">
                        Proceed only if you are paying via the <strong>official Cashfree link of Gyantrix Academy <span style={{ fontSize: '0.75em', whiteSpace: 'nowrap', opacity: 0.8 }}>(Future Invo Solutions PVT LTD)</span></strong>.
                    </p>
                    <p>
                        We do <strong>not accept payments</strong> to personal accounts or UPI IDs.
                    </p>
                    <p className="danger">
                        Payments made outside the official link are <strong>unauthorized</strong>, and the company holds <strong>no liability</strong> for such transactions.
                    </p>
                    <div className="alert-box">
                        {/* <p className="alert-title">⚠️ Stay Alert</p> */}
                        <p>If you find any suspicious activity or payment request, please do not proceed.</p>
                        <p className="alert-contact">📞 Report immediately: <strong>7386879818</strong></p>
                    </div>
                </div>
                <div className="popup-footer">
                    <button className="understand-btn" onClick={closePopup}>I Understand & Proceed</button>
                </div>
            </div>
        </div>
    );
};

export default PaymentPopup;
