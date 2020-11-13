import React from 'react'
import PropTypes from 'prop-types'
import StyleSheet from '../../styles/native/code.module.css'
import { FileText } from 'react-feather'
import { parseTextToJSX, parseSourceCodeToJSX } from '../../utils/jsx-parse-engine'

Code.propTypes = {
    content: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    title: PropTypes.string,
    isSourceCode: PropTypes.bool
}

Code.defaultProps = {
    theme: 'dark',
    title: '',
    isSourceCode: true
}

const generateLineNumberComponent = (content) => {
    const numberOfLines = content.split(/\r\n|\r|\n/).length
    const lineSet = []
    for (let i = 0; i < numberOfLines; ++i) {
        lineSet.push(i + 1)
    }
    return (
        <>
            {lineSet.map((line) => (
                <div
                    className={`centerFlex ${StyleSheet.line}`}
                    key={line}>
                    {line}
                </div>
            ))}
        </>
    )
}

function Code(props) {
    const themeClass = props.theme === 'dark' ? StyleSheet.dark : StyleSheet.light
    return (
        <div className={`${StyleSheet.Code} ${themeClass}`}>
            <div className={StyleSheet.header}>
                <div className={StyleSheet.title}>{props.title}</div>
                {props.theme === 'dark' && (
                    <div className={`${StyleSheet.copyWidget} anim`}>
                        <FileText color={'#3c4257'} size={20} />
                    </div>
                )}
            </div>
            <div className={StyleSheet.body}>
                {props.theme === 'dark' && (
                    <div className={StyleSheet.lineNumbers}>
                        {generateLineNumberComponent(props.content)}
                    </div>
                )}
                <div className={`${StyleSheet.content}`}>
                    {props.isSourceCode
                        ? parseSourceCodeToJSX(props.content)
                        : parseTextToJSX(props.content)}
                </div>
            </div>
        </div>
    )
}

export default Code
