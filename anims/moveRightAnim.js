import Vector from '../utils/vector'
import { useTransition } from 'react-spring'
/**
 * @param bindValue {any} A state value for animation binding
 * @param positionVector {Vector} A two dimensional vector for animation point
 */
const Anim =  (bindValue, positionVector) => {
    return useTransition(bindValue, null, {
        from: {
            left: positionVector.v[0],
        },
        enter: {
            left: positionVector.v[1],
        },
        leave: {
            left: positionVector.v[0],
        }
    })
}

export default Anim
