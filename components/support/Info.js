import React from 'react'
import StyleSheet from '../../styles/support/info.module.css'
import { motion } from 'framer-motion'

const easing = [0.6, -0.5, 0.01, 0.99]
const fadeInUp = {
    initial: {
        top: -40,
        opacity: 0,
    },
    animate: {
        top: 0,
        opacity: 1,
    },
    transition: {
        duration: 0.6,
        ease: easing,
    },
}

function Info() {
    return (
        <motion.div variants={fadeInUp} className={StyleSheet.component}>
            <div className={StyleSheet.title}>Hello Developer!</div>
            <div className={StyleSheet.subtitle}>
                There are a lot of ways you can support this project.
            </div>
        </motion.div>
    )
}

export default Info
