import React, { useEffect, useState } from 'react'

function HollowPyramidStarPattern() {
    const [pattern, setPattern] = useState('')

    const generatePattern = () => {
        
    let n = 5; 
    let result  = ''
for (let i = 1; i <= n; i++) { 
   
    for(let j = 1; j <= 2*n-1 ; ++j){ 
        if(i+j === n +1||(i+n===j+1) ||i===n) 
        result +='*'; 
        else
        result +=' '; 
    } 
  result += "\n"
}
setPattern(result); 
    }

    useEffect(() => {
        generatePattern()
    }, [])

    return (
        <>
            <h2>HollowPyramidStarPattern</h2>
            <pre>{pattern}</pre>
        </>
    )
}

export default HollowPyramidStarPattern