import React from 'react'
import StyleSheet from '../../styles/api/function-signature.module.css'
import PropTypes from 'prop-types'

FunctionName.propTypes = {
    name: PropTypes.string.isRequired,
}

function FunctionName(props) {
    return (
        <div className={`${StyleSheet.name} ${StyleSheet.common} `}>{props.name}</div>
    )
}

export default FunctionName
