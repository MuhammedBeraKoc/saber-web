import React from 'react'
import PropTypes from 'prop-types'
import StyleSheet from '../../styles/card.module.css'

Card.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

function Card(props) {
    return (
        <div className={StyleSheet.component}>
            <div className={StyleSheet.icon}>{props.icon}</div>
            <div className={StyleSheet.title}>{props.title}</div>
            <div className={StyleSheet.text}>{props.text}</div>
        </div>
    )
}

export default Card
