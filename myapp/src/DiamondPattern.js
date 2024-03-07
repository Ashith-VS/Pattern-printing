import React, { useEffect, useState } from 'react'

function DiamondPattern() {
const [pattern,setPattern]=useState('')

function generatePattern(){
    let n=5;
    let result = ''
for( let i=0;i<n;i++){
    for( let j=0;j<n-i;j++){
result += " "
    }
    for (let k = 0; k < 2 * i - 1; k++) { 
        result += "*"
}
result += '\n'
}
for (let i = 1; i <= n - 1; i++) {
    
    for (let j = 0; j < i; j++) {
       result += " "
    }
    
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
      result += "*"
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
    <h2>DiamondPattern</h2>
<pre>{pattern}</pre>
    </>
  )
}

export default DiamondPattern


