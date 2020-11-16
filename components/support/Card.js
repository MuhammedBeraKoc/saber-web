import React from 'react'
import StyleSheet from '../../styles/support/card.module.css'
import PropTypes from 'prop-types'
import { addOpacity } from '../../utils/colors'
import CanvasBackground from '../native/CanvasBackground'
import { motion } from 'framer-motion'

Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    buttonText: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    svgFill: PropTypes.string.isRequired,
    svgClass: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired
}

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

function Card(props) {
    const Icon = props.icon
    return (
        <motion.div variants={fadeInUp} className={StyleSheet.component}>
            <div className={StyleSheet.top}>
                <div
                    style={{ backgroundColor: addOpacity(props.color, 0.2) }}
                    className={StyleSheet.topLayerOne}
                />
                <div className={StyleSheet.topLayerTwo}>
                    <CanvasBackground color={addOpacity(props.color, 0.2)} />
                </div>
                <div className={props.svgClass}>
                    <Icon color={props.color} size={84} fill={props.svgFill} />
                </div>
            </div>
            <div className={StyleSheet.bottom}>
                <div className={StyleSheet.title}>{props.title}</div>
                <div className={StyleSheet.text}>{props.text}</div>
                <div
                    onClick={props.handler}
                    style={{ backgroundColor: props.color }}
                    className={`${StyleSheet.button} anim`}>
                    {props.buttonText}
                </div>
            </div>
        </motion.div>
    )
}

export default Card
