import React, { useState } from 'react'
import Link from 'next/link'
import StyleSheet from '../../styles/home/links.module.css'
import { ExternalLink } from 'react-feather'
import { Colors } from '../../utils/colors'
import { memorise, updateArray } from '../../utils/utility-functions'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

Links.propTypes = {
    pageIndex: PropTypes.number.isRequired,
}

const Linky = (index, color, text) => <div key={index}>{text}</div>

const easing = [0.6, -0.5, 0.01, 0.99]
const scaleUp = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
    },
    transition: {
        duration: 0.3,
        ease: easing,
    },
}
const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.2,
        },
    },
}

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
        <motion.div variants={stagger} className={StyleSheet.component}>
            {currentLinks.map((link, index) =>
                index === props.pageIndex ? (
                    <motion.div
                        variants={scaleUp}
                        key={index}
                        className={`${StyleSheet.link} ${
                            buttonStates[index]
                                ? StyleSheet.active
                                : StyleSheet.notActive
                        } anim`}>
                        {link.Content(index, Colors.COLOR_PRIMARY_DARK)}
                    </motion.div>
                ) : (
                    <Link key={index} href={link.ref}>
                        <a>
                            {
                                <motion.div
                                    variants={scaleUp}
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
                                </motion.div>
                            }
                        </a>
                    </Link>
                )
            )}
        </motion.div>
    )
}

export default Links
