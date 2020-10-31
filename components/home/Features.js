import React from 'react'
import StyleSheet from '../../styles/features.module.css'
import { memorise } from '../../utils/utility-functions'
import Card from './Card'
import { Box, Layers, Settings } from 'react-feather'

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
        <div className={StyleSheet.component}>
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
        </div>
    )
}

export default Features
