import React from 'react'
import '../styles/app.css'
import { AnimatePresence } from 'framer-motion'

export default function App(props) {
    const { Component, pageProps, router } = props
    return (
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
        </AnimatePresence>
    )
}
