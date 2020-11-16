import React from 'react'
import App from '../components/App'
import NavBar from '../components/common/NavBar'
import Body from '../components/support/Body'
import { motion } from 'framer-motion'

function Support() {
    return (
        <motion.div exit={{ opacity: 0 }}
                    initial={'initial'}
                    animate={'animate'}>
            <App
                pageIndex={3}
                content={
                    <>
                        <Body />
                    </>
                }
            />
        </motion.div>
    )
}

export default Support
