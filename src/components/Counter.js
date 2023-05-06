import React, { useState } from "react";
function Counter() {
    console.log("Render Counter"); 
const [number , setNumber] = useState(0);
//   let number = 0;
  function handleClick(e){
    e.stopPropagation();
    
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);

    console.log(number);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleClick}>Add Click</button>
    </div>
  );
}
export default Counter;
