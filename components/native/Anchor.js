import React from 'react'
import PropTypes from 'prop-types'

Anchor.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    color: PropTypes.string
}

Anchor.defaultProps = {
    color: '#4361ee'
}

function Anchor(props) {
    return (
        <>
            <a
                rel={'noopener'}
                href={props.href}
                target={'_blank'}
                className={'anchor_56821'}>
                {props.text}
            </a>
            <style jsx>{`
                .anchor_56821 {
                    white-space: nowrap;
                    user-select: none;
                    text-align: center;
                    text-decoration: none;
                    background-color: ${props.color};
                    padding: 2px 8px;
                    color: white;
                    border-radius: 2px;
                    cursor: pointer;
                }

                .anchor_56821:active {
                    color: white;
                }
            `}</style>
        </>
    )
}

export default Anchor
