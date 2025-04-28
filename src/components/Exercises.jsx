import { useState } from 'react'

const Exercises = () => {
  // 1. counter example
  const [count, setCount] = useState(0)

  function handleIncrease() {
    setCount(prevCount => prevCount + 1)
  }

  function handleDecrease() {
    setCount(prevCount => prevCount - 1)
  }

  function reset() {
    setCount(0)
  }
  return (
    <>
      <section>
        <h2>{count}</h2>
        <button onClick={handleDecrease}>decrease</button>
        <button onClick={reset}>reset</button>
        <button onClick={handleIncrease}>increase</button>
      </section>
    </>
  )
}
export default Exercises
