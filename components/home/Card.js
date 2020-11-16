import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import StyleSheet from '../../styles/home/card.module.css'
import { Colors } from '../../utils/colors'
import useWindowSize from '../../hooks/useWindowSize'
import { OnShow } from '@solariss/react-on-show'
import { motion } from 'framer-motion'

Card.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

const easing = [0.6, -0.5, 0.01, 0.99]

const fadeInOut = {
    initial: {
        y: -60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
    transition: {
        duration: 0.6,
        ease: easing,
    },
}

function Card(props) {
    const ref = useRef(null)
    const { width } = useWindowSize()
    const Icon = props.icon
    const content = (
        <div ref={ref} className={StyleSheet.component}>
            <div className={StyleSheet.icon}>
                {<Icon color={Colors.COLOR_PRIMARY} />}
            </div>
            <div className={StyleSheet.title}>{props.title}</div>
            <div className={StyleSheet.text}>{props.text}</div>
        </div>
    )
    return width < 935 ? (
        <OnShow
            handlers={{
                enter: () => {
                    if (ref.current) {
                        ref.current.style.top = '0'
                        ref.current.style.opacity = '1'
                    }
                },
            }}
            conditionSet={[
                (graphics) =>
                    graphics.windowHeightValue >=
                    graphics.selectedComponentClientRect.y + 150,
                (graphics) =>
                    graphics.selectedComponentClientRect.y >=
                    -graphics.selectedComponentClientRect.height,
            ]}>
            {content}
        </OnShow>
    ) : (
        <motion.div variants={fadeInOut}>{content}</motion.div>
    )
}

export default Card
