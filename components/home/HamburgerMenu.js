import React from 'react'
import PropTypes from 'prop-types'
import StyleSheet from '../../styles/home/hamburger-menu.module.css'
import MobileLinks from './MobileLinks'
import Vector from '../../utils/vector'

HamburgerMenu.propTypes = {
    sizes: PropTypes.instanceOf(Vector).isRequired,
    isVisible: PropTypes.bool.isRequired,
}

function HamburgerMenu(props) {
    return (
        <div
            style={{
                left: props.isVisible ? props.sizes.v[1] : props.sizes.v[0],
            }}
            className={`${StyleSheet.component} anim`}>
            <MobileLinks />
        </div>
    )
}

export default HamburgerMenu
