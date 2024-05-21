
import React from 'react'

function Input ({
    label = 'Label',
    type = 'text',
    placeholder = 'Type Something...',
    disabled = false,
    ...props
}) {
    return (
        <div 
            className='input-group'
            {...props}
        >
            <label  
                {...props}
            >
                {label}
            </label>
            <input 
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                autoCorrect='false'
                spellCheck='false'
                aria-label={placeholder}
                {...props}
            />
        </div>       
    )
}

export {
    Input
};