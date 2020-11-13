import React, { useState } from 'react'
import StyleSheet from '../../styles/native/mobile-bar.module.css'
import MorphicButton from './MorphicButton'
import { BatteryCharging, Book, Home, Pocket } from 'react-feather'
import { memorise, updateArray } from '../../utils/utility-functions'
import Link from 'next/link'
import PropTypes from 'prop-types'

MobileBar.propTypes = {
    pageIndex: PropTypes.number.isRequired,
}

function MobileBar(props) {
    const { icons, links } = memorise({
        icons: [Home, Book, BatteryCharging, Pocket],
        links: ['/', '/docs', '/api-reference', '/support'],
    })
    const [buttonStates, setButtonStates] = useState([
        props.pageIndex === 0,
        props.pageIndex === 1,
        props.pageIndex === 2,
        props.pageIndex === 3,
    ])
    return (
        <div className={StyleSheet.component}>
            {icons.map((icon, index) =>
                index === props.pageIndex ? (
                    <MorphicButton
                        key={index}
                        content={icon}
                        handler={() => {}}
                        isActive={buttonStates[index]}
                    />
                ) : (
                    <Link key={index} href={links[index]}>
                        <a>
                            <MorphicButton
                                content={icon}
                                handler={() => {
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
                                isActive={buttonStates[index]}
                            />
                        </a>
                    </Link>
                )
            )}
        </div>
    )
}

export default MobileBar
