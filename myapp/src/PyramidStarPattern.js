import React,{useState,useEffect} from 'react'

function PyramidStarPattern() {
const[pattern,setPattern]=useState('')
useEffect(()=>{
function generatePattern(){
let result= ''
for(let i=0;i<5;i++){
    for(let s=0;s<5-i-1;s++){
        result += ' '
    }
    for(let j=0;j<i*2+1;j++){
        result += '*'
    }
    result += '\n'
}
setPattern(result)
}
generatePattern()

  },[])
  return (
  <>
    <h2>PyramidStarPattern</h2>
    <pre>{pattern}</pre>
    </>
  )
}

export default PyramidStarPattern