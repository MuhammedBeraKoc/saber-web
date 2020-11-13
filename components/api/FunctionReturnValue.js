import React from 'react'
import StyleSheet from '../../styles/api/function-signature.module.css'
import PropTypes from 'prop-types'

FunctionReturnValue.propTypes = {
    name: PropTypes.string.isRequired,
}

function FunctionReturnValue(props) {
    return (
        <div className={`${StyleSheet.returnContainer}`}>
            <span>returns</span><span>{props.name}</span>
        </div>
    )
}

export default FunctionReturnValue
