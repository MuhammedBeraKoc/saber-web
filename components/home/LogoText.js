import React, { useEffect, useState } from 'react'
import StyleSheet from '../../styles/logo-text.module.css'
import { Menu } from 'react-feather'
import { Colors } from '../../utils/colors'
import Link from 'next/link'
import moveRightAnim from '../../anims/moveRightAnim'
import Vector from '../../utils/vector'
import HamburgerMenu from './HamburgerMenu'
import Mask from '../native/Mask'

function LogoText() {
    const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)
    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [hamburgerMenuVisible])
    const anim = moveRightAnim(hamburgerMenuVisible, new Vector([-windowWidth * 0.7, 0], 2))
    return (
        <div className={StyleSheet.container}>
            <HamburgerMenu anim={anim} />
            {hamburgerMenuVisible && <Mask handleClick={() => setHamburgerMenuVisible(false)} />}
            <div className={StyleSheet.menuButton} onClick={() => setHamburgerMenuVisible(true)}>
                <Menu
                    className={StyleSheet.menu}
                    color={Colors.COLOR_PRIMARY_DARK}
                />
            </div>
            <img
                className={StyleSheet.image}
                src={'app_icon.png'}
                alt={'Icon'}
            />
            <Link href={'/'}>
                <a className={StyleSheet.link}>Saber</a>
            </Link>
        </div>
    )
}

export default LogoText
