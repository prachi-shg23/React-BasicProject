import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<p>
  Project 1: &nbsp; My first React Counter project featuring increment  and decrement  functionality, <br/>with a constraint that prevents the counter from going below zero.
</p>
    <div  className="card">   
      <h1>Counter</h1>
      <div>
        <h4> count is {count} </h4>
        <button onClick={() => setCount((count) => count + 1)}>
           Add+
        </button>
         <button onClick={() => setCount((count) => Math.max(0, count - 1))}>
           Sub-
        </button>
      </div>
      </div>
 
    </>
  )
}

export default App
