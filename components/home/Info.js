import React  from 'react'
import Button from '../native/Button'
import { Colors } from '../../utils/colors'
import StyleSheet from '../../styles/info.module.css'
import { GitHub } from 'react-feather'
import { useRouter } from 'next/router'
import { useSpring, animated } from 'react-spring'

function Info() {
    const npmContainerInitialStyle = {
        backgroundColor: Colors.COLOR_ACCENT_LIGHT,
        color: Colors.COLOR_ACCENT_DARK,
    }
    const npmContainerAnimationStyle = {
        backgroundColor: Colors.COLOR_PRIMARY,
        color: Colors.COLOR_WHITE,
    }
    const [npmStyle, setNpmStyle] = useSpring(() => ({
        ...npmContainerInitialStyle,
        config: {
            tension: 450,
            friction: 18,
            mass: 0.2
        }
    }))
    const router = useRouter()
    return (
        <div className={StyleSheet.component}>
            <div className={StyleSheet.libName}>Saber</div>
            <div className={StyleSheet.title}>Immutable JavaScript Library</div>
            <div className={StyleSheet.breaker}>
                <Button
                    color={Colors.COLOR_PRIMARY}
                    content={'Get Started'}
                    onClick={() => router.push('/docs')}
                />
            </div>
            <div className={StyleSheet.breaker}>
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
            </div>
            <animated.div
                onClick={() => {
                    setNpmStyle(npmContainerAnimationStyle)
                    const copyArea = document.createElement('textarea')
                    copyArea.value = 'npm install @berakocc/saber'
                    document.body.appendChild(copyArea)
                    copyArea.select()
                    document.execCommand('copy')
                    copyArea.remove()
                    setTimeout(
                        () => setNpmStyle(npmContainerInitialStyle),
                        1000
                    )
                }}
                style={npmStyle}
                className={StyleSheet.npm}>
                npm install @berakocc/saber
            </animated.div>
        </div>
    )
}

export default Info
