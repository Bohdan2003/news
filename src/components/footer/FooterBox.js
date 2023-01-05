import React, { useState, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';

const FooterBox = (props) => {

    const [height, setHeight] = useState('auto');

    useEffect(()=>{
        if (window.matchMedia("(max-width: 500px)").matches) {
            setHeight(0);
        }
    }, []);

    window.addEventListener('resize', () => {
        if(window.matchMedia("(max-width:600px)").matches){
            setHeight(0);
        } else {
            setHeight('auto');
        }
    });

    
    return (
        <div className="footer-top__item-box">
            <button
                aria-expanded={height !== 0}
                aria-controls="example-panel"
                onClick={() => setHeight(height === 0 ? 'auto' : 0)}
                className={`footer-top__button ${height !== 0 ? 'footer-top__button--active' : ''}`}
            >
                {props.title}
                {}
            </button>
            <div className="footer-top__title">{props.title}</div>
            <AnimateHeight
                id="example-panel"
                duration={500}
                height={height}
            >
                {props.children}   
            </AnimateHeight>
                    
        </div>
    )
}

export { FooterBox };