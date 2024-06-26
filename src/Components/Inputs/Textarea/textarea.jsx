import React from 'react'

function Textarea ({
    label = 'Label',
    placeholder = 'Type Something...',
    rows = 1,
    cols = 1,
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
            <textarea 
                placeholder={placeholder}
                cols={cols}
                rows={rows}
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
    Textarea
};