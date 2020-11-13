import React, { useState } from 'react'
import StyleSheet from '../../styles/common/body.module.css'
import DocBar from '../native/DocBar'
import Documentation from './Documentation'
import OutsideClickHandler from 'react-outside-click-handler'

function Body() {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const menuItems = [
        ['Intro', ['Pure']],
        ['Intro', ['SaberCore']],
        [
            'SaberObject',
            ['class', 'create', 'modify', 'add', 'remove', 'copy', 'merge'],
        ],
        [
            'SaberArray',
            [
                'class',
                'create',
                'append',
                'prepend',
                'copy',
                'merge',
                'insert',
                'update',
                'remove',
            ],
        ],
    ]
    return (
        <div className={StyleSheet.component}>
            <div className={StyleSheet.lift}>
                <OutsideClickHandler
                    onOutsideClick={() => {
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
                            'pure',
                            'saber-core',
                            'saber-object-class',
                            'create-object',
                            'modify',
                            'add',
                            'remove',
                            'copy',
                            'merge',
                            'saber-array-class',
                            'create-array',
                            'append',
                            'prepend',
                            'copy',
                            'merge',
                            'insert',
                            'update',
                            'remove',
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
