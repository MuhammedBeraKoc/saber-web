import React from 'react'
import StyleSheet from '../../styles/api/function-signature.module.css'
import PropTypes from 'prop-types'

FunctionArgument.propTypes = {
    name: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired
}

function FunctionArgument(props) {
    return (
        <div className={`${StyleSheet.arg}`}>
            <span>{props.name}</span>{' '}
            {props.types.map((type, index) => (
                <span key={index}>{type}{index === props.types.length - 1 ? '' : ' | '}</span>
            ))}
        </div>
    )
}

export default FunctionArgument
