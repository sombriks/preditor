import {useState} from "react";

export function App() {
  const [count, setCount] = useState(0)
  console.log('Hello World from react')
  return (
    <>
      <h1>Hello World from react</h1>
      <button onClick={() => setCount(count + 1)}>Count is: {count}</button>
    </>
  )
}
