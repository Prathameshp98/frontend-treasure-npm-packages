import React, { useRef } from 'react'

import './switch.css';

const Radio = ({
    disabled,
    defaultChecked
}) => {

    const switchRef = useRef(null);

    return (
        <label class="switch" ref={switchRef}>
            <input 
                type="checkbox" 
                disabled={disabled}  
                defaultChecked={defaultChecked}  
                tabIndex={-1}
            />
            <span 
                class="slider round" 
                tabIndex={disabled ? -1 : 0}
                onKeyDown={(e) => {
                    if (e.key === ' ' || e.code === 'Space') {
                        switchRef.current.click();
                    }
                }}
            ></span>
        </label>
    )
};

export {
    Radio
};