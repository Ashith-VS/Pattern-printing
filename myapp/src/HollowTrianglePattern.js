import React, { useState, useEffect } from 'react'

function HollowTrianglePattern() {
    const [pattern, setPattern] = useState('')

    function generatePattern() {
        let n = 6;
        let result = ""
        for (let i = 1; i <= n; i++) {
          for (let j = 0; j < i; j++) {
            if(i === n) {
              result += '*'
            }
            else {
              if (j === 0 || j === i - 1) {
                result += '*'
              }
              else {
                result += " "
              }
            }
          }
          result +='\n'
        }
        setPattern(result)
    }

    useEffect(() => {
       
        generatePattern()
    })


    return (
        <>
            <h2>HollowTrianglePattern</h2>
            <pre>{pattern}</pre>
        </>
    )
}

export default HollowTrianglePattern

