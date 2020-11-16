import React from 'react'
import App from '../components/App'
import Body from '../components/docs/Body'
import { motion } from 'framer-motion'

function Docs() {
    return (
        <motion.div exit={{ opacity: 0 }}
                    initial={'initial'}
                    animate={'animate'}>
            <App pageIndex={1} content={<Body />} />
        </motion.div>
    )
}

export default Docs
