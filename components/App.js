import React from 'react'
import NavBar from './home/NavBar'
import Body from './home/Body'
import Head from 'next/head'
import { Colors } from '../utils/colors'

function App() {
    return (
        <>
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
                <meta name="theme-color" content={Colors.COLOR_PRIMARY} />
                <meta name="msapplication-navbutton-color" content={Colors.COLOR_PRIMARY} />
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
            <NavBar />
            <Body />
        </>
    )
}

export default App
