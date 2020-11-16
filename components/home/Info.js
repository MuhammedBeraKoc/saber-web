import React, { useState } from 'react'
import Button from '../native/Button'
import { Colors } from '../../utils/colors'
import StyleSheet from '../../styles/home/info.module.css'
import { GitHub } from 'react-feather'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const easing = [0.6, -0.5, 0.01, 0.99]

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const fadeInOut = {
    initial: {
        y: -20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
    transition: {
        duration: 0.3,
        ease: easing,
    },
}

function Info() {
    const [isNPMVisible, setNPMVisible] = useState(false)
    const router = useRouter()
    return (
        <motion.div variants={stagger} className={StyleSheet.component}>
            <div className={StyleSheet.libName}>Saber</div>
            <motion.div variants={fadeInOut} className={StyleSheet.title}>
                Immutable JavaScript Library
            </motion.div>
            <motion.div variants={fadeInOut} className={StyleSheet.breaker}>
                <Button
                    color={Colors.COLOR_PRIMARY}
                    content={'Get Started'}
                    onClick={() => router.push('/docs')}
                />
            </motion.div>
            <motion.div variants={fadeInOut} className={StyleSheet.breaker}>
                <Button
                    color={Colors.COLOR_ACCENT_LIGHT}
                    onClick={() =>
                        window.open(
                            'https://github.com/MuhammedBeraKoc/saber',
                            '_blank'
                        )
                    }
                    textColor={Colors.COLOR_ACCENT_DARK}
                    content={
                        <>
                            <GitHub color={Colors.COLOR_ACCENT} size={16} />
                            &nbsp;&nbsp;GitHub
                        </>
                    }
                />
            </motion.div>
            <motion.div
                variants={fadeInOut}
                onMouseEnter={() => setNPMVisible(true)}
                onMouseLeave={() => setNPMVisible(false)}
                onClick={() => {
                    const copyArea = document.createElement('textarea')
                    copyArea.value = 'npm install @berakocc/saber'
                    document.body.appendChild(copyArea)
                    copyArea.select()
                    document.execCommand('copy')
                    copyArea.remove()
                }}
                className={StyleSheet.npm}>
                <div
                    className={`${StyleSheet.npmSlide} ${
                        isNPMVisible
                            ? StyleSheet.npmActive
                            : StyleSheet.npmPassive
                    }`}>
                    npm install @berakocc/saber
                </div>
                npm install @berakocc/saber
            </motion.div>
        </motion.div>
    )
}

export default Info
