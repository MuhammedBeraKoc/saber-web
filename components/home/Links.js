import React, { useState } from 'react'
import Link from 'next/link'
import StyleSheet from '../../styles/home/links.module.css'
import { ExternalLink } from 'react-feather'
import { Colors } from '../../utils/colors'
import { memorise, updateArray } from '../../utils/utility-functions'
import PropTypes from 'prop-types'

Links.propTypes = {
    pageIndex: PropTypes.number.isRequired,
}

const Linky = (index, color, text) => (
    <div key={index}>
        {text}
    </div>
)

function Links(props) {
    const currentLinks = memorise([
        {
            Content: (index, color) => Linky(index, color, 'Home'),
            ref: '/',
        },
        {
            Content: (index, color) => Linky(index, color, 'Docs'),
            ref: '/docs',
        },
        {
            Content: (index, color) => Linky(index, color, 'API Reference'),
            ref: '/api-reference',
        },
        {
            Content: (index, color) => Linky(index, color, 'Support'),
            ref: '/support',
        },
        /*        {
            content: (
                <>
                    GitHub{' '}
                    <ExternalLink size={12} color={Colors.COLOR_ACCENT_DARK} />
                </>
            ),
            ref: 'https://github.com/MuhammedBeraKoc/saber',
        },*/
    ])
    const [buttonStates, setButtonStates] = useState([
        props.pageIndex === 0,
        props.pageIndex === 1,
        props.pageIndex === 2,
        props.pageIndex === 3,
    ])
    return (
        <div className={StyleSheet.component}>
            {currentLinks.map((link, index) =>
                index === props.pageIndex ? (
                    <div
                        key={index}
                        className={`${StyleSheet.link} ${
                            buttonStates[index]
                                ? StyleSheet.active
                                : StyleSheet.notActive
                        } anim`}>
                        {link.Content(index, Colors.COLOR_PRIMARY_DARK)}
                    </div>
                ) : (
                    <Link key={index} href={link.ref}>
                        <a>
                            {
                                <div
                                    onClick={() => {
                                        if (!buttonStates[index]) {
                                            setButtonStates(
                                                buttonStates.fill(false)
                                            )
                                            setButtonStates(
                                                updateArray(
                                                    buttonStates,
                                                    index,
                                                    true
                                                )
                                            )
                                        }
                                    }}
                                    className={`${StyleSheet.link} ${
                                        buttonStates[index]
                                            ? StyleSheet.active
                                            : StyleSheet.notActive
                                    } anim`}>
                                    {link.Content(Colors.COLOR_PRIMARY)}
                                </div>
                            }
                        </a>
                    </Link>
                )
            )}
        </div>
    )
}

export default Links
