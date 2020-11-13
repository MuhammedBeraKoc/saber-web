import React, { useState } from 'react'
import StyleSheet from '../../styles/native/morphic-button.module.css'
import PropTypes from 'prop-types'
import { memorise } from '../../utils/utility-functions'
import { Colors } from '../../utils/colors'

MorphicButton.propTypes = {
    content: PropTypes.oneOfType([PropTypes.elementType])
        .isRequired,
    handler: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    isIconic: PropTypes.bool,
}

MorphicButton.defaultProps = {
    isIconic: true,
}

function MorphicButton(props) {
    const Content = memorise(props.content)
    return (
        <div
            onClick={props.handler}
            className={`${StyleSheet.component} ${
                props.isActive ? StyleSheet.active : StyleSheet.notActive
            } anim`}>
            {props.isIconic ? (
                <Content
                    color={
                        props.isActive
                            ? Colors.COLOR_PRIMARY
                            : Colors.COLOR_PRIMARY_DARK
                    }
                    size={18}
                />
            ) : (
                Content(props.isActive
                    ? Colors.COLOR_PRIMARY
                    : Colors.COLOR_PRIMARY_DARK)
            )}
        </div>
    )
}

export default MorphicButton
