import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import StyleSheet from '../../styles/hamburger-menu.module.css'

HamburgerMenu.propTypes = {
    anim: PropTypes.array.isRequired,
}

function HamburgerMenu(props) {
    return (
        <>
            {props.anim.map(
                ({ item, props, key }) =>
                    item && (
                        <animated.div
                            className={StyleSheet.component}
                            key={key}
                            style={{
                                ...props,
                            }}
                        />
                    )
            )}
        </>
    )
}

export default HamburgerMenu
