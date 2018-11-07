
import React from 'react';
import propTypes from 'prop-types'

export const Button = ({children, onClick, className})=> {
    return(
        <button className={className} onClick={onClick}>
        {children}
        </button>
    )
}

Button.propTypes = {
    className: propTypes.string
}