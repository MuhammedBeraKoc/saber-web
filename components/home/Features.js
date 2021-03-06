import React from 'react'
import StyleSheet from '../../styles/home/features.module.css'
import { memorise } from '../../utils/utility-functions'
import Card from './Card'
import { Box, Layers, Settings } from 'react-feather'
import { motion } from 'framer-motion'

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

function Features() {
    const features = memorise([
        {
            icon: Settings,
            title: 'Functional',
            text:
                'All the library methods are created with functional programming paradigms',
        },
        {
            icon: Box,
            title: 'Minimal',
            text: 'Only contains the most basic methods for core prototypes',
        },
        {
            icon: Layers,
            title: 'Versatile',
            text:
                'Decorated with dozens of utility functions for future development',
        },
    ])
    return (
        <motion.div variants={stagger} className={StyleSheet.component}>
            {features.map((feature, index) => {
                return (
                    <Card
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        text={feature.text}
                    />
                )
            })}
        </motion.div>
    )
}

export default Features
