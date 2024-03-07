import React, { useEffect, useState } from 'react'

function HollowDiamondPattern() {
    const [pattern, setPattern] = useState('')

    const generatePattern = () => {
        let n = 5;
        let result = ''
        for (let i = 1; i <= n; i++) {
            for (let j = n; j > i; j--) {
                result += ' '
            }
            for (let k = 0; k < i * 2 - 1; k++) {
                if (k === 0 || k === 2 * i - 2) {
                    result += '*'
                }
                else {
                    result += " "
                }
            }
            result += '\n'
        }

        for (let i = 1; i <= n - 1; i++) {
            for (let j = 0; j < i; j++) {
                result += ' '
            }
            for (let k = (n - i) * 2 - 1; k >= 1; k--) {
                if (k === 1 || k === (n - i) * 2 - 1) {
                    result += "*"
                }
                else {
                    result += " "
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
            <h2>HollowDiamondPattern</h2>
            <pre>{pattern}</pre>
        </>
    )
}

export default HollowDiamondPattern





