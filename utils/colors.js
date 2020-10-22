export const Colors = {
    COLOR_PRIMARY: '#8900F2',
    COLOR_PRIMARY_DARK: '#240046',
    COLOR_BACKGROUND: '#FFFFFF',
    COLOR_ACCENT: '#C4C4C4',
    COLOR_ACCENT_DARK: '#888',
    COLOR_ACCENT_LIGHT: '#F6F6F6',
    COLOR_SUCCESS: '#73e2a7',
    COLOR_WHITE: '#FFF'
}

export const addOpacity = (color, opacity) => {
    const hexOpacity = (255 * opacity).toString(16)
    return `#${color.substring(1)}${hexOpacity.substring(0, hexOpacity.indexOf('.') === -1 ? hexOpacity.length : hexOpacity.indexOf('.'))}`
}
