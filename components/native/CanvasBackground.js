import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import StyleSheet from '../../styles/native/canvas-background.module.css'

CanvasBackground.propTypes = {
    color: PropTypes.string.isRequired
}

function CanvasBackground(props) {
    const ref = useRef(null)
    useEffect(() => {
        const canvas = ref.current
        const [width, height] = [canvas.getBoundingClientRect().width * 1.15, canvas.getBoundingClientRect().height * 1.3]
        const context = canvas.getContext('2d')
        context.beginPath()
        context.moveTo(0, height * 0.2)
        context.bezierCurveTo(width * 0.3, height * 0.5, width * 0.2, height * 0.05, width * 0.6, 0)
        context.lineTo(width, 0)
        context.lineTo(0 , 0)
        context.lineTo(0, 0.2)
        context.fillStyle = props.color
        context.fill()
        context.closePath()
        context.beginPath()
        context.moveTo(0, height * 0.4)
        context.bezierCurveTo(width * 0.5, height * 0.7, width * 0.3, height * 0.1, width * 0.8, 0)
        context.lineTo(0, 0)
        context.lineTo(0, height * 0.4)
        context.fillStyle = props.color
        context.fill()
        context.closePath()
        context.beginPath()
        context.moveTo(0, height * 0.7)
        context.bezierCurveTo(width * 0.5, height, width * 0.7, 0, width, 0)
        context.lineTo(0, 0)
        context.lineTo(0, height * 0.7)
        context.fillStyle = props.color
        context.fill()
        context.closePath()
        context.beginPath()
        context.moveTo(0, height * 0.9)
        context.bezierCurveTo(width * 0.7, height * 1.2, width * 0.8, 0, width * 1.2, 0)
        context.lineTo(0, 0)
        context.lineTo(0, height * 0.9)
        context.fillStyle = props.color
        context.fill()
        context.closePath()
        context.beginPath()
        context.moveTo(0, height * 1.1)
        context.bezierCurveTo(width * 0.7, height * 1.5, width, 0, width * 1.5, 0)
        context.lineTo(0, 0)
        context.lineTo(0, height * 1.1)
        context.fillStyle = props.color
        context.fill()
        context.closePath()
    })
    return <canvas className={`${StyleSheet.component} fillParent`} ref={ref}>Your browser does not support Canvas.</canvas>
}

export default CanvasBackground
