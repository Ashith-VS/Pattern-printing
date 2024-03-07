import React, { useState, useEffect } from 'react'

function LeftTrianglePattern() {
    const [state, setState] = useState('')

    useEffect(() => {
        function generatePattern() {
            let result = ''
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j <= i; j++) {
                    result += '*'
                }
                result += '\n'
            }
            setState(result)
        }
        
         generatePattern()
    }, [])


    return (
        <>
            <h2>LeftTrianglePattern</h2>
            <pre>{state}</pre>
        </>
    )
}

export default LeftTrianglePattern