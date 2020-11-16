import ReactHtmlParser from 'react-html-parser'
import StyleSheet from '../styles/native/code.module.css'
import React from 'react'
import { insertArray, replaceString, updateArray } from './utility-functions'

;(() => {
    if (!String.prototype.matchAll) {
        String.prototype.matchAll = function (regex) {
            let match = regex.exec(this)
            const matches = []
            while (match !== null) {
                matches.push(match)
                match = regex.exec(this)
            }
            return matches
        }
    }
    console.log('matchAll polyfill has been configured.')
})()

const createJSXBuilder = (className) => (v) =>
    `<span class="${className}">${v}</span>`

const getMatchArray = (content, pattern, builder) => {
    let matchArray = []
    const results = Array.from(content.matchAll(pattern))
    for (const result of results) {
        const index = result.index
        const match = result[0]
        const length = match.length
        matchArray.push([index, length, match, builder])
    }
    return matchArray
}

const sortMatchArray = (matchArray) => {
    let sortedMatchedArray = []
    let g
    for (const matchItem of matchArray) {
        if (sortedMatchedArray.length === 0) {
            sortedMatchedArray.push(matchItem)
            continue
        }
        g = true
        for (let i = 0; i < sortedMatchedArray.length; i++) {
            if (matchItem[0] < sortedMatchedArray[i][0]) {
                sortedMatchedArray = insertArray(
                    sortedMatchedArray,
                    i,
                    matchItem
                )
                g = false
                break
            }
        }
        if (g) {
            sortedMatchedArray.push(matchItem)
        }
    }
    return sortedMatchedArray
}

const parse = (content, matchArray) => {
    let secretIndex = 0
    for (const match of matchArray) {
        const jsx = match[3](match[2])
        const beginIndex = match[0] + secretIndex
        content = replaceString(content, beginIndex, beginIndex + match[1], jsx)
        secretIndex += jsx.length - match[2].length
    }
    return content
}

export function parseSourceCodeToJSX(content) {
    let matchArray = []
    const newLine = /\n/g
    const tab = /\t/g
    const parserTokenMap = [
        [/@\w+\([\w, ]*\)\n/g, createJSXBuilder(StyleSheet.annotation)],
        [/(?<!(['"@]\w*\(?))[,():+\-*\[\];{}.!](?!\w*['"])/g, createJSXBuilder(StyleSheet.symbol)],
        [/\/\/.*/g, createJSXBuilder(StyleSheet.comment)],
        [/['"].*?['"]/g, createJSXBuilder(StyleSheet.string)],
        [/\b(?<!(['"]|\/\/ )\w*)\d+\.?\d*(?!\w*['"])\b/g, createJSXBuilder(StyleSheet.number)],
        [/(?<=\.)\w+(?=\()/g, createJSXBuilder(StyleSheet.method)],
        [/(?<=\.)\w+(?!\()\b/g, createJSXBuilder(StyleSheet.property)],
        [/\bthis(?=\.)/g, createJSXBuilder(StyleSheet.number)],
        [
            /\b(number|string|boolean|object|instanceof|typeof)\b/g,
            createJSXBuilder(StyleSheet.method),
        ],
        [/(&gt|&lt)/g, createJSXBuilder(StyleSheet.method)],
        [
            /(?<=&lt)\/?(?!number|string|boolean|object|instanceof|typeof)\w*(?=&gt)/g,
            createJSXBuilder(StyleSheet.method),
        ],
        [
            /\b(((?<! )import)|new|true|extends|super|false|from|function|break|case|return|const|=|let|default|((?<! )export)|class)\b/g,
            createJSXBuilder(StyleSheet.keyword),
        ],
    ]
    for (const parserItem of parserTokenMap) {
        matchArray = matchArray.concat(
            getMatchArray(content.slice(), parserItem[0], parserItem[1])
        )
    }
    matchArray = sortMatchArray(matchArray)
    let result = parse(content, matchArray)
    result = result.replace(tab, '<span class="space"></span>')
    result = result.replace(newLine, '<br />')
    return <div dangerouslySetInnerHTML={{ __html: result }} />
}

export function parseTextToJSX(content) {
    const newLine = /\n/g
    return <>{ReactHtmlParser(content.replace(newLine, '<br/>'))}</>
}
