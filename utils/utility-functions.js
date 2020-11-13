import { useMemo } from 'react'

export function memorise(data) {
    return useMemo(() => data, [])
}

export function updateArray(arr, index, value) {
    return [...arr.slice(0, index), value, ...arr.slice(index + 1)]
}

export function insertArray(arr, index, value) {
    return [...arr.slice(0, index), value, ...arr.slice(index)]
}

export function replaceString(str, begin, end, value) {
    return str.substring(0, begin) + value + str.substring(end)
}
