import React, { useEffect, useState } from 'react'

function LeftPascalStarPattern() {
  const [pattern, starPattern] = useState('')

  const generatePattern = () => {
const n=5
let result = ''

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    result += ' '
  }
  for (let k = 0; k < i; k++) {
    result += '*'
  }
  result += '\n'
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    result += ' '
  }
  for (let k = 0; k < n - i; k++) {
    result += '*'
  }
  result += '\n' 
}
    starPattern(result)
  }

  useEffect(() => {
    generatePattern()
  }, [])

  return (
    <>
      <h2>LeftPascalStarPattern</h2>
      <pre>{pattern}</pre>
    </>
  )
}

export default LeftPascalStarPattern