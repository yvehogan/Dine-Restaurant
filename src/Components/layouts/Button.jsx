import React from 'react';

import PropTypes from 'prop-types';

function Button({
    children, className, onClick,
    disabled, fontSize,
    bgColor, textColor,
    paddingY, paddingX
}) {
    return (
        <button
            className={`${fontSize} ${bgColor} ${textColor} ${paddingX} ${paddingY} rounded  
                } flex justify-center ${className}`}
            type="button"
            onClick={onClick}
            disabled={disabled}
        >

            {children}

        </button>
    );
}

Button.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    fontSize: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    paddingY: PropTypes.string,
    paddingX: PropTypes.string

};

Button.defaultProps = {
    children: 'Button',
    className: '',
    onClick: () => { },
    disabled: false,
    fontSize: 'text-sm',
    bgColor: '',
    textColor: 'text-white',
    paddingY: 'py-2',
    paddingX: 'px-6'

};

export default Button;
