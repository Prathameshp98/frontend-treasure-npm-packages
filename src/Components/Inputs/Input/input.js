
import React from 'react'

function Input ({
    label = 'Label',
    type = 'text',
    placeholder = 'Type Something...',
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