import React, { useEffect, useState } from 'react'

function ReversedPyramidStarPattern() {
const[pattern,setPattern]=useState('')

function generatePattern(){
let result = ''
let n=5;
for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
        result += ' '
    }
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
        result+='*'
}
result += '\n'
}
setPattern(result)
}

useEffect(()=>{
    generatePattern()
},[])

  return (
    <>
    <h2>ReversedPyramidStarPattern</h2>
<pre>{pattern}</pre>
</>
  )
}

export default ReversedPyramidStarPattern