import React from 'react'
import App from '../components/App'
import { motion } from 'framer-motion'
import Body from '../components/home/Body'

function HomePage() {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={'initial'}
            animate={'animate'}>
            <App
                pageIndex={0}
                content={
                    <>
                        <Body />
                    </>
                }
            />
        </motion.div>
    )
}

export default HomePage
