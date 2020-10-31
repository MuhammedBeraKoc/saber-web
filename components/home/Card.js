import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import StyleSheet from '../../styles/card.module.css'
import { addOpacity, Colors } from '../../utils/colors'
import useWindowSize from '../../hooks/useWindowSize'
import { OnShow } from '@solariss/react-on-show'

Card.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

function Card(props) {
    const ref = useRef(null)
    const { width } = useWindowSize()
    useEffect(() => {
        console.log(width)
        if (width < 935) setColor(Colors.COLOR_PRIMARY)
        else setColor(addOpacity(Colors.COLOR_PRIMARY, 0.6))
    }, [width])
    const [color, setColor] = useState(addOpacity(Colors.COLOR_PRIMARY, 0.6))
    const updateColor = () => {
        setColor(
            color === addOpacity(Colors.COLOR_PRIMARY, 0.6)
                ? Colors.COLOR_PRIMARY
                : addOpacity(Colors.COLOR_PRIMARY, 0.6)
        )
    }
    const Icon = props.icon
    const content = (
        <div
            ref={ref}
            onMouseEnter={() => updateColor()}
            onMouseLeave={() => updateColor()}
            className={StyleSheet.component}>
            <div className={StyleSheet.icon}>{<Icon color={color} />}</div>
            <div className={StyleSheet.title}>{props.title}</div>
            <div className={StyleSheet.text}>{props.text}</div>
        </div>
    )
    return width < 935 ? (
        <OnShow handler={() => {
            ref.current.style.top = '0'
            ref.current.style.opacity = '1'
        }}>
            {content}
        </OnShow>
    ) : (
        <>
            {content}
        </>
    )
}

export default Card
