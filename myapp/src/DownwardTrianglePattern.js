import React,{useState,useEffect} from 'react'

function DownwardTrianglePattern() {
    const [pattern,setPattern] = useState('')

    useEffect(() => {
      function generatePattern(){
let result = ''
for(let i=0;i<5;i++){
for(let j=0;j<5-i;j++){
    result += '*'
}
result += '\n'
}
setPattern(result)
      }
     generatePattern()
    }, [])
    

  return (
    <>
    <h2>DownwardTrianglePattern</h2>
    <pre>{pattern}</pre>
    </>
  )
}

export default DownwardTrianglePattern