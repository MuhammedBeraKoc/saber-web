import React, { useEffect } from 'react'
import StyleSheet from '../../styles/native/doc-bar.module.css'
import PropTypes from 'prop-types'
import PureAnchor from './PureAnchor'
import useWindowSize from '../../hooks/useWindowSize'

DocBar.propTypes = {
    content: PropTypes.array.isRequired,
    hrefIds: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
}

DocBar.defaultProps = {
    isOpen: true,
}

function DocBar(props) {
    const { width } = useWindowSize()
    let i = 0
    return (
        <div
            className={`${StyleSheet.component} ${
                width < 1200
                    ? props.isOpen
                        ? StyleSheet.open
                        : StyleSheet.close
                    : ''
            }`}>
            {props.content.map((section, index) => (
                <div key={index}>
                    {section[0] === 'Intro' ? null : (
                        <div className={StyleSheet.sectionTitle}>
                            {section[0]}
                        </div>
                    )}
                    {section[1].map((menuItem, index) =>
                        (
                            <div
                                className={`${StyleSheet.menuItem} anim`}
                                key={index}>
                                <PureAnchor
                                    href={'#'.concat(props.hrefIds[i++])}
                                    content={<>{menuItem}</>}
                                />
                            </div>
                        )
                    )}
                </div>
            ))}
        </div>
    )
}

export default DocBar
