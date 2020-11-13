import React from 'react'
import StyleSheet from '../../styles/support/body.module.css'
import Info from './Info'
import { CloudLightning, GitPullRequest } from 'react-feather'
import Card from './Card'

function Body(props) {
    return (
        <div className={StyleSheet.component}>
            <Info />
            <div className={StyleSheet.cardContainer}>
                <Card
                    handler={() => {
                        window.open('https://github.com/MuhammedBeraKoc/saber/issues', '_blank')
                    }}
                    svgClass={'CloudLighting'}
                    color={'#06d6a0'}
                    svgFill={'#80eace'}
                    title={'Creating Issues'}
                    icon={CloudLightning}
                    buttonText={'create'}
                    text={
                        'One the most effective ways to make me noticed about a problem or an enhancement in this project is to create a new issue about anything you think.'
                    }
                />
                <Card
                    handler={() => {
                        window.open('https://github.com/MuhammedBeraKoc/saber/pulls', '_blank')
                    }}
                    svgClass={'GithubPullRequest'}
                    color={'#118ab2'}
                    svgFill={'#8ac5d9'}
                    buttonText={'create'}
                    title={'Pull Requests'}
                    icon={GitPullRequest}
                    text={
                        'The best way to contribute codebase directly is to create well-crafted pull requests. You can fork the project and change it then create a pull request.'
                    }
                />
            </div>
        </div>
    )
}

export default Body
