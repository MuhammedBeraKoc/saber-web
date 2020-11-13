import React from 'react'
import StyleSheet from '../../styles/common/docs-fragment.module.css'
import PropTypes from 'prop-types'

DocsFragment.propTypes = {
    codes: PropTypes.arrayOf(PropTypes.element),
    title: PropTypes.element.isRequired,
    content: PropTypes.element.isRequired,
    linkId: PropTypes.string.isRequired,
    hasBorder: PropTypes.bool,
    isSubFragment: PropTypes.bool,
}

DocsFragment.defaultProps = {
    hasBorder: true,
    isSubFragment: false,
}

function DocsFragment(props) {
    return (
        <>
            <a id={props.linkId}/>
            <div
                className={`${StyleSheet.component} ${
                    !props.hasBorder ? '' : StyleSheet.border
                } ${props.isSubFragment ? StyleSheet.subFragment : ''} ${props.isSubFragment ? StyleSheet.lowMargin : StyleSheet.highMargin}`}>
                <div className={StyleSheet.leftPart}>
                    <div className={StyleSheet.title}>{props.title}</div>
                    <div className={StyleSheet.content}>{props.content}</div>
                </div>
                {props.codes ? (
                    <div className={StyleSheet.codes}>
                        {props.codes.map((code, index) => (
                            <div key={index}>{code}</div>
                        ))}
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    )
}

export default DocsFragment
