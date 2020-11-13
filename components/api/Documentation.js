import React from 'react'
import StyleSheet from '../../styles/common/documentation.module.css'
import DocsFragment from '../common/DocsFragment'
import Code from '../native/Code'
import FunctionName from './FunctionName'
import FunctionArgument from './FunctionArgument'
import FunctionReturnValue from './FunctionReturnValue'
import Anchor from '../native/Anchor'

const codeBase = [
    `class NativeClass {
    
\t@Pure()
\tnativeMethod() {}
}`,
    `// You can't import SaberCore

const saberCore = new SaberCore('NativeObject')
console.log(saberCore)`,
    `import { SaberObject } from '@berakocc/saber'

const tree = SaberObject.create({ fruit: 'apple' })
console.log(tree)`,
    `import { SaberObject } from '@berakocc/saber'

const car = { engine: 'v8' }
const carWithModel = SaberObject.modify(car, function() {
    return {
        ...this,
        model: 'Mercedes AMG'
    }
})
console.log(carWithModel)`,
    `import { SaberObject } from '@berakocc/saber'

const robot = SaberObject.create();
const enhancedRobot = robot.add('speak', () => {
        console.log('Greetings, human!')
})
enhancedRobot.value.speak()
`,
    `import { SaberObject } from '@berakocc/saber

const person = SaberObject.create({
    name: 'John Doe',
    age: 23
})
const personWithoutAge = person.remove('age')
console.log(personWithoutAge.value)`,
    `import { SaberObject } from '@berakocc/saber

const product = SaberObject.create({
    weight: 200,
    price: '150€'
})
const copiedProduct = product.copy()
console.log(copiedProduct.value)
console.log(copiedProduct.uid !== product.uid)`,
    `import { SaberObject } from '@berakocc/saber

const object1 = SaberObject.create({ id: 18294 })
const object2 = SaberObject.create({ value: 2854 })
const mergedObject = object1.merge(object2)
console.log(mergedObject.value)`,
    `import { SaberArray } from '@berakocc/saber'
    
const squareNumbers = SaberArray.create([1,4,9])
console.log(squareNumbers.value)
`,
]

const codeResults = [
    `SaberCore {
  className: "NativeObject",
  uid: 323920221566,
  value: "Cannot assign any value to SaberCore."
}`,
    `t {
    className: "SaberObject",
    uid: 201606621055,
    value: Object {
        fruit: "apple"
    }
}`,
    `Object {
    engine: "v8",
    model: "Mercedes AMG"
}`,
    '"Greetings, human!"',
    'Object {\n' + '\tname: "John Doe"\n' + '}',
    'Object {\n' + '\tprice: "150€",\n' + '\tweight: 200\n' + '}\n\ntrue',
    'Object {\n' + '\tid: 18294,\n' + '\tvalue: 2854\n' + '}',
    '[1, 4, 9]',
]

function Documentation() {
    return (
        <div className={`${StyleSheet.component} anim`}>
            <DocsFragment
                linkId={'pure'}
                title={
                    <div className={StyleSheet.apiTypeHeader}>
                        <FunctionName name={'Pure'} />
                    </div>
                }
                content={
                    <>
                        <div className={StyleSheet.annotation}>
                            <span className={StyleSheet.bold}>Annotation</span>
                        </div>
                        <div className={StyleSheet.infoText}>
                            An annotation which is shared among all Saber
                            methods. Enforces developer to make a method pure.
                            Other than this, it has nothing but an empty body.
                            Since the library is{' '}
                            <Anchor
                                href={
                                    'https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
                                }
                                text={'functional'}
                            />{' '}
                            an annotation like that is crucial.
                        </div>
                    </>
                }
                codes={[
                    <Code content={codeBase[0]} title={'Pure Annotation'} />,
                    <Code
                        isSourceCode={false}
                        theme={'light'}
                        content={
                            'PureMethod annotation is used in every Saber method.'
                        }
                        title={'Important Note'}
                    />,
                ]}
            />
            <DocsFragment
                linkId={'saber-core'}
                title={<FunctionName name={'SaberCore'} />}
                content={
                    <>
                        <div className={StyleSheet.apiTypeHeader}>
                            <FunctionArgument
                                name={'className'}
                                types={['string']}
                            />
                            <FunctionReturnValue name={'SaberCore'} />
                            <div className={StyleSheet.implement}>
                                Implements{' '}
                                <span className={StyleSheet.bold}>IHash</span>{' '}
                                and{' '}
                                <span className={StyleSheet.bold}>
                                    IStringIndex
                                </span>
                            </div>
                        </div>
                        <div className={StyleSheet.infoText}>
                            Creates a new SaberCore. When a class implements{' '}
                            <span className={`${StyleSheet.name}`}>IHash</span>
                            it contains a{' '}
                            <span className={`${StyleSheet.name}`}>uid</span>
                            property. Implementing{' '}
                            <span className={`${StyleSheet.name}`}>
                                IStringIndex
                            </span>{' '}
                            interface is merely for object indexing in
                            TypeScript. SaberCore is a class which every Saber
                            class should extend. It also has a readonly{' '}
                            <span className={`${StyleSheet.name}`}>value</span>{' '}
                            for holding value type in a Saber class. But it
                            cannot write the value in the constructor. This
                            property is only defined to compel developer.
                        </div>
                    </>
                }
                codes={[
                    <Code
                        content={codeBase[1]}
                        title={'Class Initialisation'}
                    />,
                    <Code
                        content={codeResults[0]}
                        theme={'light'}
                        title={'Output'}
                    />,
                    <Code
                        isSourceCode={false}
                        theme={'light'}
                        content={'Every Saber class extends this core class.'}
                        title={'Important Note'}
                    />,
                ]}
            />
            <DocsFragment
                linkId={'saber-object-class'}
                title={<FunctionName name={'SaberObject'} />}
                content={
                    <>
                        <div className={StyleSheet.implement}>
                            Extends{' '}
                            <span className={StyleSheet.bold}>SaberCore</span>
                        </div>
                        <div className={StyleSheet.infoText}>
                            A class that encapsulates a JavaScript{' '}
                            <Anchor
                                href={
                                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'
                                }
                                text={'Object'}
                            />{' '}
                            with enhanced immutable methods.
                        </div>
                    </>
                }
                codes={[]}
            />
            <DocsFragment
                linkId={'create-object'}
                title={<FunctionName name={'create'} />}
                content={
                    <>
                        <div className={StyleSheet.apiTypeHeader}>
                            <FunctionArgument
                                name={'value'}
                                types={['SaberObject', 'object', 'any']}
                            />
                            <FunctionReturnValue name={'SaberObject'} />
                        </div>
                        <div className={StyleSheet.implement}>static</div>
                        <div className={StyleSheet.infoText}>
                            Creates a new SaberObject. Designed as a{' '}
                            <span className={StyleSheet.name}>
                                static factory method
                            </span>
                            . I totally recommend using this over normal
                            initialisation.
                        </div>
                    </>
                }
                codes={[
                    <Code
                        content={codeBase[2]}
                        title={'Creating A Tree Object'}
                    />,
                    <Code
                        content={codeResults[1]}
                        theme={'light'}
                        title={'Output'}
                    />,
                ]}
            />
            <DocsFragment
                linkId={'modify'}
                title={<FunctionName name={'modify'} />}
                content={
                    <>
                        <div className={StyleSheet.apiTypeHeader}>
                            <FunctionArgument name={'o'} types={['object']} />
                            <FunctionArgument
                                name={'objectFunction'}
                                types={['ObjectFunction']}
                            />
                            <FunctionArgument
                                name={'propertyChain?'}
                                types={['string[ ]']}
                            />
                            <FunctionReturnValue name={'object'} />
                            <div className={StyleSheet.implement}>static</div>
                        </div>
                        <div className={StyleSheet.infoText}>
                            Modifies an object without mutating it. Then returns
                            the new object. When{' '}
                            <span className={StyleSheet.name}>
                                propertyChain
                            </span>{' '}
                            is not given it, function mutates the property at
                            the root level. This is a utility function for the
                            rest of the class.{' '}
                            <span className={StyleSheet.name}>
                                ObjectFunction
                            </span>{' '}
                            is a function which uses bound object as
                            <span className={StyleSheet.name}>this</span> and
                            returns an{' '}
                            <span className={StyleSheet.name}>object</span>
                        </div>
                    </>
                }
                codes={[
                    <Code
                        content={codeBase[3]}
                        title={'Manufacturing a Mercedes AMG'}
                    />,
                    <Code
                        content={codeResults[2]}
                        theme={'light'}
                        title={'Output'}
                    />,
                    <Code
                        isSourceCode={false}
                        theme={'light'}
                        content={
                            'Never use ObjectFunction as an <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" class="anchor">arrow function</a>.'
                        }
                        title={'Important Note'}
                    />,
                ]}
            />
            <DocsFragment
                linkId={'add'}
                title={<FunctionName name={'add<T>'} />}
                content={
                    <>
                        <div className={StyleSheet.apiTypeHeader}>
                            <FunctionArgument
                                name={'property'}
                                types={['string']}
                            />
                            <FunctionArgument name={'value'} types={['T']} />
                            <FunctionArgument
                                name={'propertyChain?'}
                                types={['string[ ]']}
                            />
                            <FunctionReturnValue name={'SaberObject'} />
                            <div className={StyleSheet.implement}>generic</div>
                        </div>
                        <div className={StyleSheet.infoText}>
                            Adds or updates the given property with the given
                            value.
                        </div>
                    </>
                }
                codes={[
                    <Code
                        content={codeBase[4]}
                        title={'Creating a robot that can speak'}
                    />,
                    <Code
                        content={codeResults[3]}
                        theme={'light'}
                        title={'Output'}
                    />,
                    <Code
                        isSourceCode={false}
                        theme={'light'}
                        content={
                            '<a class="anchor" href="https://www.typescriptlang.org/docs/handbook/generics.html" target="_blank">Generics</a> are not supported in <a class="anchor" href="http://vanilla-js.com/" target="_blank">Vanilla JS</a>.'
                        }
                        title={'Important Note'}
                    />,
                ]}
            />
            <DocsFragment
                linkId={'remove'}
                title={<FunctionName name={'remove'} />}
                content={
                    <>
                        <div className={StyleSheet.apiTypeHeader}>
                            <FunctionArgument
                                name={'property'}
                                types={['string']}
                            />
                            <FunctionArgument
                                name={'propertyChain?'}
                                types={['string[ ]']}
                            />
                            <FunctionReturnValue name={'SaberObject'} />
                        </div>
                        <div className={StyleSheet.infoText}>
                            Removes the given property.
                        </div>
                    </>
                }
                codes={[
                    <Code
                        content={codeBase[5]}
                        title={'Creating a robot that can speak'}
                    />,
                    <Code
                        content={codeResults[4]}
                        theme={'light'}
                        title={'Output'}
                    />,
                ]}
            />
            <DocsFragment
                linkId={'copy'}
                title={<FunctionName name={'copy'} />}
                content={
                    <>
                        <div className={StyleSheet.infoText}>
                            Copies the object value and returns a new
                            SaberObject.
                        </div>
                    </>
                }
                codes={[
                    <Code content={codeBase[6]} title={'Copying a product'} />,
                    <Code
                        content={codeResults[5]}
                        theme={'light'}
                        title={'Output'}
                    />,
                ]}
            />
            <DocsFragment
                linkId={'merge'}
                title={<FunctionName name={'merge'} />}
                content={
                    <>
                        <div className={StyleSheet.apiTypeHeader}>
                            <FunctionArgument
                                name={'s'}
                                types={['SaberObject']}
                            />
                            <FunctionReturnValue name={'SaberObject'} />
                        </div>
                        <div className={StyleSheet.infoText}>
                            Merges two SaberObjects.
                        </div>
                    </>
                }
                codes={[
                    <Code
                        content={codeBase[7]}
                        title={'Creating a robot that can speak'}
                    />,
                    <Code
                        content={codeResults[6]}
                        theme={'light'}
                        title={'Output'}
                    />,
                ]}
            />
            <DocsFragment
                linkId={'saber-array-class'}
                title={<FunctionName name={'SaberArray<T>'} />}
                content={
                    <>
                        <div className={StyleSheet.implement}>
                            Extends{' '}
                            <span className={StyleSheet.bold}>SaberCore</span>
                        </div>
                        <span className={StyleSheet.implement}>
                                generic
                        </span>
                        <div className={StyleSheet.infoText}>
                            A class that encapsulates a JavaScript{' '}
                            <Anchor
                                href={
                                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
                                }
                                text={'Array'}
                            />{' '}
                            with enhanced immutable methods.
                        </div>
                    </>
                }
                codes={[]}
            />
            <DocsFragment
                linkId={'create-array'}
                title={<FunctionName name={'create<T>'} />}
                content={
                    <>
                        <div className={StyleSheet.apiTypeHeader}>
                            <FunctionArgument
                                name={'value?'}
                                types={['T', 'T[ ]', 'SaberArray<T>']}
                            />
                            <FunctionReturnValue name={'SaberArray'} />
                            <div className={StyleSheet.implement}>
                                generic static
                            </div>
                        </div>
                        <div className={StyleSheet.infoText}>
                            Creates a new SaberArray.Designed as a{' '}
                            <span className={StyleSheet.name}>
                                static factory method
                            </span>
                            . I totally recommend using this over normal
                            initialisation.
                        </div>
                    </>
                }
                codes={[
                    <Code
                        content={codeBase[8]}
                        title={'Creating square number set'}
                    />,
                    <Code
                        content={codeResults[7]}
                        theme={'light'}
                        title={'Output'}
                    />,
                ]}
            />
            <DocsFragment
                linkId={'create-array'}
                title={<FunctionName name={'create<T>'} />}
                content={
                    <>
                        <div className={StyleSheet.apiTypeHeader}>
                            <FunctionArgument
                                name={'value?'}
                                types={['T', 'T[ ]', 'SaberArray<T>']}
                            />
                            <FunctionReturnValue name={'SaberArray'} />
                            <div className={StyleSheet.implement}>
                                generic
                            </div>

                        </div>
                        <div className={StyleSheet.infoText}>
                            Creates a new SaberArray.Designed as a{' '}
                            <span className={StyleSheet.name}>
                                static factory method
                            </span>
                            . I totally recommend using this over normal
                            initialisation.
                        </div>
                    </>
                }
                codes={[
                    <Code
                        content={codeBase[8]}
                        title={'Creating square number set'}
                    />,
                    <Code
                        content={codeResults[7]}
                        theme={'light'}
                        title={'Output'}
                    />,
                ]}
            />
        </div>
    )
}

export default Documentation
