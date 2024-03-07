import React, { useEffect, useState } from "react";

function SquarePattern() {
  const [pattern, setPattern] = useState("");

  function generatePattern() {
    let result = "";
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        result += "*";
      }
      result += "\n";
    }
    setPattern(result);
  }

  useEffect(() => {
    generatePattern();
  }, []);

  return (
    <div>
      <h2>Square Pattern</h2>
      <pre>{pattern}</pre>
    </div>
  );
}

export default SquarePattern;
