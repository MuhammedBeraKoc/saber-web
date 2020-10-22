import React from 'react'
import StyleSheet from '../../styles/footer.module.css'
import SocialMedia from '../home/SocialMedia'

function Footer() {
    return (
        <div className={StyleSheet.component}>
            <SocialMedia />
            <div className={StyleSheet.text}>
                Released under the MIT License<br/>Copyright © 2020 Muhammed Bera Koc
            </div>
        </div>
    )
}

export default Footer
