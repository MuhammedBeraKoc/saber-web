import React from 'react'
import PropTypes from 'prop-types'
import StyleSheet from '../../styles/native/button.module.css'
import { Colors } from '../../utils/colors'

Button.propTypes = {
    color: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
    textColor: PropTypes.string,
    borderColor: PropTypes.string,
}

function Button(props) {
    return (
        <div
            className={StyleSheet.button}
            style={{
                background: props.color,
                color: props.textColor
                    ? props.textColor
                    : Colors.COLOR_BACKGROUND,
                borderColor: props.borderColor
                    ? props.borderColor
                    : props.color,
            }}
            onClick={props.onClick}>
            {props.content}
        </div>
    )
}

export default Button
