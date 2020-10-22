import React, { useEffect } from 'react'
import StyleSheet from '../../styles/body.module.css'
import Info from './Info'
import { useSpring, animated } from 'react-spring'
import Features from './Features'
import Footer from './Footer'

function Body() {
    const [fadeInAnim, setFadeInAnim] = useSpring(() => ({
        opacity: 0,
        config: {
            tension: 28
        },
    }))
    useEffect(() => {
        setFadeInAnim({
            opacity: 1,
        })
        return () =>
            setFadeInAnim({
                opacity: 0,
            })
    })
    return (
        <div className={StyleSheet.component}>
            <div className={StyleSheet.head}>
                <animated.object
                    style={fadeInAnim}
                    className={StyleSheet.icon}
                    type="image/svg+xml"
                    data={'./app_icon.svg'}>
                    <img src={'./app_icon.svg'} alt={'animated'} />
                </animated.object>
                <Info />
            </div>
            <Features />
            <Footer />
        </div>
    )
}

export default Body
