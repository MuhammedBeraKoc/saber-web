import { useMemo } from 'react'

export function memorise(data) {
    return useMemo(() => data, [])
}
