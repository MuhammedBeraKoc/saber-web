import React from 'react'
import StyleSheet from '../../styles/logo-text.module.css'
import { Menu } from 'react-feather'
import { Colors } from '../../utils/colors'
import Link from 'next/link'

function LogoText() {
    return (
        <div className={StyleSheet.container}>
            <div onClick={() => console.log('Icon Clicked.')}>
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
