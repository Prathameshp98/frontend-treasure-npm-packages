import React, { useEffect, useState, useRef } from "react";

import Styles from './floatingLabel.css';

// text, number, email, password, month, tel, time, url
function FloatingLabel({
    label = 'Label',
    type = 'text',
    disabled = false,
    ...props
}) {
    
    const inputRef = useRef(null);
    const[skrinkLabel, setSkrinkLabel] = useState(false);
    const[validType, setValidType] = useState('');

    useEffect(() => {
        const validTypes = ["text", "number", "email", "password", "month", "tel", "time", "url"];
        setValidType(validTypes.includes(type) ? type : "text");
    }, [type]);

    console.log(Styles);

    return (
        <div 
            className='input-group'
            {...props}
        >
            <label  
                className={`floatingCommon ${!skrinkLabel ? 'floatingLabel' : 'floatingLabelShrink'}`}
                onClick={() => inputRef.current.focus() }
                {...props}
            >
                {label}
            </label>
            <input 
                type={validType}
                autoCorrect='false'
                spellCheck='false'
                aria-label={label}
                disabled={disabled}
                {...props}
                className='floating-input'
                ref={inputRef}
                onFocus={() => setSkrinkLabel(true)}
                onBlur={(e) => {
                    console.log(e.target)
                    if (e.target.value === '') {
                        setSkrinkLabel(false);
                    }
                }}
            />
        </div>
    )
};

export {
    FloatingLabel
};