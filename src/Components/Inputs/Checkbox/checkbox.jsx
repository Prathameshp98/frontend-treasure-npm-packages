
import React from "react";

const Checkbox = ({
    defaultChecked = false,
    disabled = false
}) => {

    return (
        <input 
            type="checkbox"
            defaultChecked={defaultChecked}
            disabled={disabled}
        />
    )
};

export {
    Checkbox
};