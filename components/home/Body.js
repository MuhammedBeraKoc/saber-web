import React from 'react'
import StyleSheet from '../../styles/home/body.module.css'
import Info from './Info'
import Features from './Features'
import Footer from './Footer'
import { motion } from 'framer-motion'

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.5,
        },
    },
}

const easing = [0.6, -0.5, 0.01, 0.99]

const scaleUp = {
    initial: {
        scale: 0.8,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
    },
    transition: {
        duration: 0.3,
        ease: easing,
    },
}

function Body() {
    return (
        <motion.div variants={stagger} className={StyleSheet.component}>
            <div className={StyleSheet.head}>
                <motion.object
                    variants={scaleUp}
                    className={StyleSheet.icon}
                    type="image/svg+xml"
                    data={'./app_icon.svg'}>
                    <img src={'./app_icon.svg'} alt={'animated'} />
                </motion.object>
                <Info />
            </div>
            <Features />
            <Footer />
        </motion.div>
    )
}

export default Body
