import React, { useEffect, useState } from 'react'

function RightTriangleStarPattern() {
    const [pattern, setPattern] = useState('')

    function generatePattern() {
        const n = 5
        let result = ''

        for (let i = 1; i <= n; i++) {

            for (let j = 1; j <= n; j++) {
                if (j <= n - i) {
                    result += '  '
                } else {
                    result += '* '
                }
            }
            result += '\n';
        }

        setPattern(result)
    }

    useEffect(() => {
        generatePattern()
    }, [])
    return (
        <>
            <h2>RightTriangleStarPattern</h2>
            <pre>{pattern}</pre>
        </>
    )
}

export default RightTriangleStarPattern