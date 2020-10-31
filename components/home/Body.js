import React, { useState, useEffect, useRef } from 'react'
import StyleSheet from '../../styles/body.module.css'
import Info from './Info'
import Features from './Features'
import Footer from './Footer'

function Body() {
    const ref = useRef(null)
    useEffect(() => {
        setTimeout(() => ref.current.style.opacity = '1', 100)
    })
    return (
        <div className={StyleSheet.component}>
            <div className={StyleSheet.head}>
                <object
                    ref={ref}
                    className={`${StyleSheet.icon}`}
                    type="image/svg+xml"
                    data={'./app_icon.svg'}>
                    <img src={'./app_icon.svg'} alt={'animated'} />
                </object>
                <Info />
            </div>
            <Features />
            <Footer />
        </div>
    )
}

export default Body
