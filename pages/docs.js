import React from 'react'
import App from '../components/App'
import Body from '../components/docs/Body'


function Docs() {
    return (
        <App
            pageIndex={1}
            content={
                <Body />
            }
        />
    )
}

export default Docs
