import React from 'react'
import App from '../components/App'
import NavBar from '../components/common/NavBar'
import Body from '../components/home/Body'

function HomePage() {
    return (
        <App
            pageIndex={0}
            content={
                <>
                    <Body />
                </>
            }
        />
    )
}

export default HomePage
