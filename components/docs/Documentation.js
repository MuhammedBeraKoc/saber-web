import React from 'react'
import StyleSheet from '../../styles/common/documentation.module.css'
import DocsFragment from '../common/DocsFragment'
import Code from '../native/Code'
import Anchor from '../native/Anchor'
import { Colors } from '../../utils/colors'

const codeBase = [
    `import { SaberObject } from '@berakocc/saber'
    
// You can create Saber objects
// with factory methods
const saberObject = SaberObject.create({
\tname: 'Adam Smith',
\tage: 38
})
saberObject.add('hasAJob', true)
console.log(saberObject.value)`,
    `import React, { Component } from 'react'
    
class TodoList extends Component {
\tconstructor(props) {
\t\tsuper(props)
\t\tthis.state = {
\t\t\ttodos: []
\t\t}\n
\tadd = (todo) => {
\t\tthis.setState([this.state.todos, todo])
\t}
}`,
    `import { SaberObject } from '@berakocc/saber'
    
const saberObjectWithDefaultInitialisation
\t= new SaberObject({ id: 2 })
const SaberObjectWithFactoryMethod
\t= SaberObject.create({ id: 3 })`,
    `import { SaberArray } from '@berakocc/saber'
    
const SaberObjectWithFactoryMethod \n\t= SaberArray.create&ltnumber&gt([1, 2, 3])`,
]

function Documentation() {
    return (
        <div className={`${StyleSheet.component} anim`}>
            <DocsFragment
                linkId={'introduction'}
                title={<>Introduction</>}
                content={
                    <>
                        <Anchor
                            text={'Saber'}
                            href={'https://github.com/MuhammedBeraKoc/saber'}
                            color={Colors.COLOR_PRIMARY}
                        />{' '}
                        is a modular and functional library oriented with
                        methods which operate on immutable data. In this chapter
                        we will look over a very basic example to give you
                        insight about how to use the library.
                    </>
                }
                codes={[
                    <Code
                        isSourceCode={false}
                        theme={'light'}
                        content={'npm install @berakocc/saber'}
                        title={'Installing as NPM package'}
                    />,
                    <Code content={codeBase[0]} title={'A Basic Example'} />,
                    <Code
                        content={
                            'Object {\n' +
                            '\tname: "Adam Smith"\n' +
                            '\tage: 48,\n' +
                            '}'
                        }
                        theme={'light'}
                        title={'Output'}
                    />,
                ]}
            />
            <DocsFragment
                linkId={'immutability'}
                hasBorder={false}
                title={
                    <>
                        Understanding{' '}
                        <Anchor
                            text={'Immutability'}
                            href={
                                'https://medium.com/tribalscale/understanding-immutability-fdd627b66e58'
                            }
                        />
                    </>
                }
                content={
                    <>
                        If data is immutable it is unchangeable. In JavaScript
                        most of the data types don't satisfy this rule. Except
                        primitive data types like numbers and String(which is a
                        special case).
                    </>
                }
            />
            <DocsFragment
                linkId={'why-should-you-use-it'}
                isSubFragment={true}
                title={<>Why should you use it?</>}
                content={
                    <>
                        The main reason to use immutable types is preventing
                        data from vanishing. When you change state in{' '}
                        <Anchor
                            color={'#61dbfb'}
                            text={'React'}
                            href={'https://reactjs.org/'}
                        />{' '}
                        or any other framework, it is recommended to change
                        state values by immutable operations since it makes
                        easier to record changing state and diagnosing errors if
                        they ever occur.
                    </>
                }
                codes={[<Code content={codeBase[1]} title={'Immutability'} />]}
            />
            <DocsFragment
                linkId={'creating-saber-object'}
                hasBorder={true}
                title={<>Creating SaberObject</>}
                content={
                    <>
                        There are two ways of creating SaberObject: classic
                        object initialisation and{' '}
                        <Anchor
                            href={
                                'https://www.baeldung.com/java-constructors-vs-static-factory-methods'
                            }
                            text={'static factory method'}
                            color={'#52b788'}
                        />{' '}
                        Although they do the same job, there is a subtle
                        difference. Static factory method has tighter type
                        definition. Hence using it would be more appropriate.
                    </>
                }
                codes={[
                    <Code
                        content={codeBase[2]}
                        title={'Initialising SaberObject'}
                    />,
                    <Code
                        content={
                            'Always use <a href="/" class="anchor">create</a> method over normal object creation.'
                        }
                        title={'Note'}
                        isSourceCode={false}
                        theme={'light'}
                    />,
                ]}
            />
            <DocsFragment
                linkId={'creating-saber-array'}
                hasBorder={false}
                title={<>Creating SaberArray</>}
                content={
                    <>
                        Same as SaberObject with one little exception. You can
                        denote types with{' '}
                        <Anchor
                            href={
                                'https://www.typescriptlang.org/docs/handbook/generics.html'
                            }
                            text={'diamond notation'}
                        />{' '}
                        You have the choice not to. But for the sake of clarity,
                        this is better. Also using arrays with one type makes
                        your code less error prone.
                    </>
                }
                codes={[
                    <Code
                        content={codeBase[3]}
                        title={'Initialising SaberArray'}
                    />,
                    <Code
                        content={
                            'Always use <a href="/" class="anchor">create</a> method over normal object creation.'
                        }
                        title={'Note'}
                        isSourceCode={false}
                        theme={'light'}
                    />,
                ]}
            />
        </div>
    )
}

export default Documentation
