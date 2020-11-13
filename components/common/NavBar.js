import React from 'react'
import StyleSheet from '../../styles/common/nav-bar.module.css'
import Links from '../home/Links'
import PropTypes from 'prop-types'

NavBar.propTypes = {
    pageIndex: PropTypes.number.isRequired
}

function NavBar(props) {
    return (
        <div className={`${StyleSheet.component}`}>
            <div className={StyleSheet.navBar}>
                <Links pageIndex={props.pageIndex} />
            </div>
        </div>
    )
}

export default NavBar
