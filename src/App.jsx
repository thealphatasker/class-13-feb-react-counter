import { useState } from "react";

function App () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Alpha")
  function increment() {
    setCount(count +1)
  }

  function decrement() {
    setCount(count -1)
  }
  return (
    <div>
      <h1><u>Counter App</u></h1>
      <h4>{name}</h4>
      <br />
      <p>It's a Counter app.</p>
    <br />
    <h2>Count: {count}</h2>
    <br />
    <button onClick={increment}>Increment</button>
    <br />
    <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App;