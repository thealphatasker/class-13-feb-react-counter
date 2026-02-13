import { useState } from "react";

function App () {
  // const [count, setCount] = useState(0)
  // const [name, setName] = useState("Alpha")
  // function increment() {
  //   setCount(count +1)
  // }

  // function decrement() {
  //   setCount(count -1)
  // }

  const [obtMarks, setObtMarks] = useState(0)
  const [totalMarks, setTotalMarks] = useState(0)
  const [percentage, setPercentage] = useState(0)

  function calculatePercentage(e) {
    e.preventDefault()
    setPercentage(obtMarks/totalMarks*100)
  }


  return (
    <div>
       
      {/* <h1><u>Counter App</u></h1>
      <h4>{name}</h4>
      <br />
      <p>It's a Counter app.</p>
    <br />
    <h2>Count: {count}</h2>
    <br />
    <button onClick={increment}>Increment</button>
    <br />
    <button onClick={decrement}>Decrement</button> */}

    <br />
    <h1><u>Percentage Calculator</u></h1>
    <br />
    <form onSubmit={calculatePercentage}>
      <label htmlFor="user-obtmarks">Obtained Marks: </label>
      <input type="number" name="user-obtmarks" id="user-obtmarks" placeholder="e.g 879" onChange={(e)=> setObtMarks(e.target.value)}/>
      <br />
      <label htmlFor="user-totalmarks">Total Marks: </label>
      <input type="number" name="user-totalmarks" id="user-totalmarks" placeholder="e.g. 1100" onChange={(e) => setTotalMarks(e.target.value)}/>
      <br />
        <h3>Your Percentage: {percentage}</h3>
      <button>🧮 Calculate</button>
    </form>
    </div>
  )
}

export default App;