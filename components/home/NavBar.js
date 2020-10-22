import React from 'react'
import LogoText from './LogoText'
import StyleSheet from '../../styles/nav-bar.module.css'
import Links from './Links'

function NavBar() {
    return (
        <div className={`${StyleSheet.component}`}>
            <LogoText />
            <Links />
        </div>
    )
}

export default NavBar
