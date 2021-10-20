import React, { useState, useEffect } from "react";



function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  
  
  
  useEffect(() => {
   console.log("useEffect called") ;
  }, []);
// we put an empty array so that the page doesn't keep rendering after every thing.
 console.log("Component rendering");

  return( 
  <div>
  <button onClick={() => setCount((count) => count + 1 )}> I have been clicked {count} times</button>

  <input value={text} type="text" placeholder="Type away..." onChange={(e)=> setText(e.target.value)} />

  </div>

  )}

export default App;
