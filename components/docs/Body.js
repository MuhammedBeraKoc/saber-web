import React, { useState } from 'react'
import StyleSheet from '../../styles/common/body.module.css'
import DocBar from '../native/DocBar'
import Documentation from './Documentation'
import OutsideClickHandler from 'react-outside-click-handler'

function Body() {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const menuItems = [
        ['Intro', ['Introduction', 'Understanding Mutability']],
        ['Creating Objects', ['Creating SaberObject', 'Creating SaberArray']],
    ]
    return (
        <div className={StyleSheet.component}>
            <div className={StyleSheet.lift}>
                <OutsideClickHandler onOutsideClick={() => {
                    setMenuOpen(false)
                }}>
                    <div
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        className={`${StyleSheet.menuSignal} anim`}>
                        <div className={StyleSheet.dot} />{' '}
                    </div>
                    <DocBar
                        isOpen={isMenuOpen}
                        hrefIds={[
                            'introduction',
                            'immutability',
                            'creating-saber-object',
                            'creating-saber-array',
                        ]}
                        content={menuItems}
                    />
                </OutsideClickHandler>
            </div>
            <Documentation />
        </div>
    )
}

export default Body
