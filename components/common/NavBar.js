import React from 'react'
import StyleSheet from '../../styles/common/nav-bar.module.css'
import Links from '../home/Links'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const easing = [0.6, -0.5, 0.01, 0.99]
const fadeInUp = {
    initial: {
        top: -80,
        opacity: 0,
    },
    animate: {
        top: 0,
        opacity: 1,
    },
    transition: {
        duration: 0.3,
        ease: easing,
    },
}

NavBar.propTypes = {
    pageIndex: PropTypes.number.isRequired,
}

function NavBar(props) {
    return (
        <div
            className={`${StyleSheet.component}`}>
            <motion.div variants={fadeInUp} className={StyleSheet.navBar}>
                <Links pageIndex={props.pageIndex} />
            </motion.div>
        </div>
    )
}

export default NavBar
