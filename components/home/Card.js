import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import StyleSheet from '../../styles/home/card.module.css'
import { Colors } from '../../utils/colors'
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
    const Icon = props.icon
    const content = (
        <div
            ref={ref}
            className={StyleSheet.component}>
            <div className={StyleSheet.icon}>{<Icon color={Colors.COLOR_PRIMARY} />}</div>
            <div className={StyleSheet.title}>{props.title}</div>
            <div className={StyleSheet.text}>{props.text}</div>
        </div>
    )
    return width < 935 ? (
        <OnShow handlers={{enter: () => {
            if (ref.current) {
                ref.current.style.top = '0'
                ref.current.style.opacity = '1'
            }
        }}} conditionSet={[(graphics) => graphics.windowHeightValue >=
        graphics.selectedComponentClientRect.y + 150, (graphics) => graphics.selectedComponentClientRect.y >=
            -graphics.selectedComponentClientRect.height]}>
            {content}
        </OnShow>
    ) : (
        <>
            {content}
        </>
    )
}

export default Card
