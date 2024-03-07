import React, { useEffect, useState } from 'react'

function RightPascalStarPattern() {
    const [pattern, setPattern] = useState('')

    function generatePattern() {
        const n = 5
        let result = ''

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                result += '*'
            }
            result += '\n'
        }

        for (let i = n - 1; i >= 1; i--) {
            for (let j = 1; j <= i; j++) {
                result += '*'
            }
            result += '\n'
        }

        setPattern(result)
    }

    useEffect(() => {
        generatePattern()
    },[])

    return (
        <>
            <h2>RightPascalStarPattern</h2>
            <pre>{pattern}</pre>
        </>
    )
}

export default RightPascalStarPattern