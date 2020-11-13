import React, { useState } from 'react'
import Button from '../native/Button'
import { Colors } from '../../utils/colors'
import StyleSheet from '../../styles/home/info.module.css'
import { GitHub } from 'react-feather'
import { useRouter } from 'next/router'

function Info() {
    const [isNPMVisible, setNPMVisible] = useState(false)
    const router = useRouter()
    return (
        <div className={StyleSheet.component}>
            <div className={StyleSheet.libName}>Saber</div>
            <div className={`${StyleSheet.title} anim`}>
                Immutable JavaScript Library
            </div>
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
            <div
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
                        isNPMVisible ? StyleSheet.npmActive : StyleSheet.npmPassive
                    }`}>
                    npm install @berakocc/saber
                </div>
                npm install @berakocc/saber
            </div>
        </div>
    )
}

export default Info
