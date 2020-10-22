import React from 'react'
import { memorise } from '../../utils/utility-functions'
import { GitHub, Linkedin, Package } from 'react-feather'
import StyleSheet from '../../styles/social-media.module.css'

function SocialMedia() {
    const icons = memorise([
        {
            ref: 'https://www.linkedin.com/in/muhammed-bera-koc/',
            content: <Linkedin />,
        },
        {
            ref: 'https://github.com/MuhammedBeraKoc',
            content: <GitHub />,
        },
        {
            ref: 'https://www.npmjs.com/~berakoc',
            content: <Package />,
        },
    ])
    return (
        <div className={StyleSheet.component}>
            {icons.map((icon, index) => (
                <a
                    key={index}
                    href={icon.ref}
                    className={StyleSheet.icon}
                    target={'_blank'}>
                    {icon.content}
                </a>
            ))}
        </div>
    )
}

export default SocialMedia
