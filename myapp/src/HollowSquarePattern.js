import React,{useState,useEffect} from 'react'

function HollowSquarePattern() {
const [pattern,setPattern] =useState('')

useEffect(()=>{
    function generatePattern(){
let result = ''
for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        if(i===0||i===4||j===0||j===4){
        result += '*'
        }
        else{
            result += ' '
        }
    }
    result += '\n'
}
setPattern(result)
    }
    generatePattern()
},[])
  return (
    <>
    <h2>HollowSquarePattern</h2>
<pre>{pattern}</pre>
</>
  )
}

export default HollowSquarePattern