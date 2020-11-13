import React from 'react'
import App from '../components/App'
import Body from '../components/api/Body'

function ApiReference() {
    return (
        <App
            pageIndex={2}
            content={
                <>
                    <Body />
                </>
            }
        />
    )
}

export default ApiReference
