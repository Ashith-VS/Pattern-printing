import React, { useEffect, useState } from 'react'

function HourGlassStarPattern() {
    const [pattern, setPattern] = useState('')

    const generatePattern = () => {
        const n = 5
        let result = ''


        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= 2 * n - 1; j++) {
                result += ' '
                if (j >= i && j <= 2 * n - i) {
                    result += '*'
                } else {
                    result += ' '
                }
            }
            result += " \n"
        }


        for (let i = n - 1; i >= 1; i--) {
            for (let j = 1; j <= 2 * n - 1; j++) {
                result += ' '
                if (j >= i && j <= 2 * n - i) {
                    result += '*'
                } else {
                    result += ' '
                }
            }
            result += '\n'
        }

        setPattern(result)
    }
    useEffect(() => {
        generatePattern()
    }, [])

    return (
        <>
            <h2>HourGlassStarPattern</h2>
            <pre>{pattern}</pre>
        </>
    )
}

export default HourGlassStarPattern