
import React from "react";

const Radio = ({
    defaultChecked = false,
    disabled = false
}) => {

    return (
        <input 
            type="radio"
            defaultChecked={defaultChecked}
            disabled={disabled}
        />
    )
};

export {
    Radio
};