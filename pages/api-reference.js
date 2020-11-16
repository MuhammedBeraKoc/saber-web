import React from 'react'
import App from '../components/App'
import Body from '../components/api/Body'
import { motion } from 'framer-motion'

function ApiReference() {
    return (
        <motion.div exit={{ opacity: 0 }}
                    initial={'initial'}
                    animate={'animate'}>
            <App
                pageIndex={2}
                content={
                    <>
                        <Body />
                    </>
                }
            />
        </motion.div>
    )
}

export default ApiReference
