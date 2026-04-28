import React, { useEffect, useState, useRef } from 'react';
import { getAssetUrl } from '../utils/assets';
import './CustomCursor.css';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const glowRef = useRef(null);
    const labelRef = useRef(null);
    const rippleRef = useRef(null);
    const trailRefs = useRef([]);

    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [activeLabel, setActiveLabel] = useState('EXPLORE');
    const [isHidden, setIsHidden] = useState(false);

    // Positions for physics-based movement
    const mousePos = useRef({ x: 0, y: 0 });
    const dotPos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const glowPos = useRef({ x: 0, y: 0 });
    const trailPositions = useRef(new Array(6).fill({ x: 0, y: 0 }));

    useEffect(() => {
        const onMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const onMouseDown = () => setIsClicked(true);
        const onMouseUp = () => setIsClicked(false);
        const onMouseEnter = () => setIsHidden(false);
        const onMouseLeave = () => setIsHidden(true);

        const onMouseOver = (e) => {
            const el = e.target;

            // 1. Dynamic Context Labeling
            const href = el.getAttribute('href') || '';
            const text = el.innerText?.toUpperCase() || '';

            if (el.closest('.enroll-btn, a[href*="courses"]')) setActiveLabel('ENROLL');
            else if (el.closest('.partners-cta')) setActiveLabel('DISCOVER');
            else if (el.closest('.nav-links a')) setActiveLabel('GOTO');
            else if (el.closest('input, textarea')) setActiveLabel('WRITE');
            else if (el.closest('.social-icon, .footer-link')) setActiveLabel('CONNECT');
            else if (el.closest('button[type="submit"]')) setActiveLabel('SUBMIT');
            else setActiveLabel('EXPLORE');

            // 2. Clickable state detection
            const isClickable = el.closest('button, a, .clickable, .card, input, select, textarea, .partners-cta, .enroll-btn');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
        window.addEventListener('mouseover', onMouseOver);

        let animationFrameId;
        const animate = () => {
            // physics constants (damping)
            const dotDamp = 0.35;
            const ringDamp = 0.35;
            const glowDamp = 0.04;

            // Update Positions
            dotPos.current.x += (mousePos.current.x - dotPos.current.x) * dotDamp;
            dotPos.current.y += (mousePos.current.y - dotPos.current.y) * dotDamp;

            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringDamp;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringDamp;

            glowPos.current.x += (mousePos.current.x - glowPos.current.x) * glowDamp;
            glowPos.current.y += (mousePos.current.y - glowPos.current.y) * glowDamp;

            // Trail physics (Iterative lag)
            let prevX = dotPos.current.x;
            let prevY = dotPos.current.y;
            trailPositions.current.forEach((pos, i) => {
                const ratio = 0.3 - (i * 0.03);
                pos.x += (prevX - pos.x) * ratio;
                pos.y += (prevY - pos.y) * ratio;

                if (trailRefs.current[i]) {
                    trailRefs.current[i].style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${1 - (i * 0.12)})`;
                }
                prevX = pos.x;
                prevY = pos.y;
            });

            // Update DOM via refs for performance
            const setTransform = (ref, pos) => {
                if (ref.current) ref.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
            };

            setTransform(dotRef, dotPos.current);
            setTransform(ringRef, ringPos.current);
            setTransform(glowRef, glowPos.current);
            setTransform(rippleRef, dotPos.current);
            setTransform(labelRef, dotPos.current);

            animationFrameId = requestAnimationFrame(animate);
        };
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            window.removeEventListener('mouseover', onMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className={`custom-cursor-container ${isHidden ? 'cursor-hidden' : ''} ${isHovering ? 'cursor-hovering' : ''} ${isClicked ? 'cursor-clicked' : ''}`}>
            {/* 1. Large Nebula Glow (Deep Atmosphere) */}
            <div className="cursor-element cursor-glow" ref={glowRef}></div>

            {/* 2. Particle Trail (Energy Field) */}
            {[0, 1, 2, 3, 4, 5].map(idx => (
                <div key={idx} className="cursor-element cursor-trail" ref={el => trailRefs.current[idx] = el}></div>
            ))}

            {/* 3. Click Resonance (Expanded Pulse) */}
            <div className="cursor-element cursor-ripple" ref={rippleRef}></div>

            {/* 4. Kinetic Outliner (Lag Physics) */}
            <div className="cursor-element cursor-ring" ref={ringRef}></div>

            {/* 5. Central Node (Precision Point) with Logo */}
            <div className="cursor-element cursor-dot" ref={dotRef}>
                <img src={getAssetUrl('/assets/gy1-png.png')} alt="logo" className="cursor-logo" />
            </div>

            {/* 6. Contextual Intelligence Pill */}
            <div className="cursor-label-pill" ref={labelRef}>
                <div className="scanning-line"></div>
                <span>{activeLabel}</span>
            </div>
        </div>
    );
};

export default CustomCursor;
