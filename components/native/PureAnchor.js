import React from 'react'
import StyleSheet from '../../styles/native/pure-anchor.module.css'
import PropTypes from 'prop-types'

PureAnchor.propTypes = {
    content: PropTypes.element.isRequired,
    href: PropTypes.string.isRequired
}

function PureAnchor(props) {
    return (
        <a href={props.href} className={StyleSheet.component}>{props.content}</a>
    )
}

export default PureAnchor
