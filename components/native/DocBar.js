import React, { useEffect, useState } from 'react'
import StyleSheet from '../../styles/native/doc-bar.module.css'
import PropTypes from 'prop-types'
import PureAnchor from './PureAnchor'
import useWindowSize from '../../hooks/useWindowSize'
import { motion } from 'framer-motion'

DocBar.propTypes = {
    content: PropTypes.array.isRequired,
    hrefIds: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
}

DocBar.defaultProps = {
    isOpen: true,
}

const easing = [0.6, -0.5, 0.01, 0.99]
const slideLeftWithFadeOut = {
    initial: {
        left: -168,
        opacity: 0,
    },
    animate: {
        left: 0,
        opacity: 1,
    },
    transition: {
        duration: 0.6,
        ease: easing,
    },
}

function DocBar(props) {
    const { width } = useWindowSize()
    let i = 0
    return (
        <motion.div
            variants={slideLeftWithFadeOut}
            className={`${StyleSheet.component} ${
                width < 1200
                    ? props.isOpen
                        ? StyleSheet.open
                        : StyleSheet.close
                    : ''
            }`}>
            {props.content.map((section, index) => (
                <div key={index}>
                    {section[0] === 'Intro' ? null : (
                        <div className={StyleSheet.sectionTitle}>
                            {section[0]}
                        </div>
                    )}
                    {section[1].map((menuItem, index) => (
                        <div
                            className={`${StyleSheet.menuItem} anim`}
                            key={index}>
                            <PureAnchor
                                href={'#'.concat(props.hrefIds[i++])}
                                content={<>{menuItem}</>}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </motion.div>
    )
}

export default DocBar
