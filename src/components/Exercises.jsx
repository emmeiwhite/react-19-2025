import { useState } from 'react'
/*
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
  */

function Exercises() {
  const [user, setUser] = useState({ name: 'imran', age: 32 })

  function handleAge() {
    setUser({
      ...user,
      age: user.age + 1
    })
  }
  return (
    <>
      <article
        style={{ marginTop: '2rem', marginLeft: '1rem', padding: '1rem', border: '1px solid' }}>
        <h1>User Details</h1>
        <h2>{user.name}</h2>
        <h3>{user.age}</h3>

        <button onClick={handleAge}>update age</button>
      </article>
    </>
  )
}
export default Exercises
