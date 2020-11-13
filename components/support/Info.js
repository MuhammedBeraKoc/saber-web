import React from 'react'
import StyleSheet from '../../styles/support/info.module.css'

function Info() {
    return (
        <div className={StyleSheet.component}>
            <div className={StyleSheet.title}>Hello Developer!</div>
            <div className={StyleSheet.subtitle}>
                There are a lot of ways you can support this project.
            </div>
        </div>
    )
}

export default Info
