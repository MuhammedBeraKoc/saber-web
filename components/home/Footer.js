import React from 'react'
import StyleSheet from '../../styles/home/footer.module.css'
import SocialMedia from '../home/SocialMedia'
import { motion } from 'framer-motion'

const easing = [0.6, -0.5, 0.01, 0.99]
const fadeInOut = {
    initial: {
        bottom: -70,
        opacity: 0,
    },
    animate: {
        bottom: 0,
        opacity: 1,
    },
    transition: {
        duration: 0.3,
        ease: easing,
    },
}

function Footer() {
    return (
        <motion.div variants={fadeInOut} className={StyleSheet.component}>
            <SocialMedia />
            <div className={StyleSheet.text}>
                Released under the MIT License
                <br />
                Copyright © 2020 Muhammed Bera Koc
            </div>
        </motion.div>
    )
}

export default Footer
