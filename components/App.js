import React from 'react'
import Head from 'next/head'
import { Colors } from '../utils/colors'
import PropTypes from 'prop-types'
import MobileBar from './native/MobileBar'
import NavBar from './common/NavBar'

App.propTypes = {
    content: PropTypes.element.isRequired,
    pageIndex: PropTypes.number.isRequired,
}

function App(props) {
    return (
        <div>
            <Head>
                <title>Saber - Immutable JavaScript</title>
                <link
                    rel={'icon'}
                    type={'image/png'}
                    href={'favicon-32x32.png'}
                    sizes={'32x32'}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content={Colors.COLOR_WHITE} />
                <meta
                    name="msapplication-navbutton-color"
                    content={Colors.COLOR_WHITE}
                />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content={Colors.COLOR_PRIMARY}
                />
                <link
                    rel={'icon'}
                    type={'image/png'}
                    href={'favicon-16x16.png'}
                    sizes={'16x16'}
                />
            </Head>
            {props.content}
            <NavBar pageIndex={props.pageIndex} />
            <MobileBar pageIndex={props.pageIndex} />
        </div>
    )
}

export default App
