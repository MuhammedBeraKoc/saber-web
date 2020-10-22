import React from 'react'
import StyleSheet from '../../styles/native/mask.module.css'
import PropTypes from 'prop-types'

Mask.propTypes = {
    handleClick: PropTypes.func.isRequired
}

function Mask(props) {
    return (
        <div onClick={props.handleClick} className={StyleSheet.mask}  />
    )
}

export default Mask
