import React from 'react'
import { memorise } from '../../utils/utility-functions'
import { ExternalLink } from 'react-feather'
import { Colors } from '../../utils/colors'
import StyleSheet from '../../styles/mobile-links.module.css'
import Link from 'next/link'

function MobileLinks() {
    const currentLinks = memorise([
        {
            content: 'Docs',
            ref: '/docs',
        },
        {
            content: 'API Reference',
            ref: '/api',
        },
        {
            content: 'Support',
            ref: '/support',
        },
        {
            content: (
                <>
                    GitHub{' '}
                    <ExternalLink size={12} color={Colors.COLOR_ACCENT_DARK} />
                </>
            ),
            ref: 'https://github.com/MuhammedBeraKoc/saber',
        },
    ])
    return (
        <div className={StyleSheet.component}>
            {currentLinks.map((link, index) => (
                <>
                    {index === 0 && <div className={StyleSheet.separator} />}
                    <Link key={index} href={link.ref}>
                        <a className={StyleSheet.link}>{link.content}</a>
                    </Link>
                    <div className={StyleSheet.separator} />
                </>
            ))}
        </div>
    )
}

export default MobileLinks
