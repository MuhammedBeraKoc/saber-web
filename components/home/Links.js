import React from 'react'
import Link from 'next/link'
import StyleSheet from '../../styles/links.module.css'
import { ExternalLink } from 'react-feather'
import { Colors } from '../../utils/colors'
import { memorise } from '../../utils/utility-functions'

function Links() {
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
        <div>
            {currentLinks.map((link, index) => (
                <Link key={index} href={link.ref}>
                    <a className={StyleSheet.link}>{link.content}</a>
                </Link>
            ))}
        </div>
    )
}

export default Links
