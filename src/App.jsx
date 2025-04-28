import { useState } from 'react'
import './App.css'
import Popup from './components/Popup'
import Title from './components/Title'
import Todo from './components/Todo'
import Exercises from './components/Exercises'

function App() {
  // Reactive variable declared with useState --- When a reactive variable is updated with reactive function --- the component re-renders
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  /* --
  // A normal variable
  let isPopupOpen = false

  // trying to handle popup without useState

  function togglePopup() {
    isPopupOpen = !isPopupOpen
    console.log(isPopupOpen)
  }
  -- */
  const handleChange = e => {
    console.log(e.target.value)
  }
  return (
    <>
      <Title />
      <div>
        <input
          type="text"
          onChange={handleChange}
          style={{ padding: '0.25rem 1rem' }}
        />
        <button onClick={() => setIsPopupOpen(true)}>add item</button>
      </div>

      <Todo
        task="Master the game and fear will fade away"
        description="code every 3-4 hours"
      />
      <Todo
        task="Live and let live"
        description="set aside time for your well being"
      />
      <Todo
        task="life is a race"
        description="Do not forget to sleep on time"
      />
      <Todo
        task="never you quit!"
        description="life will throw challenges at you, but do not quit"
      />
      {isPopupOpen ? (
        <Popup
          title="Are your sure?"
          setIsPopupOpen={setIsPopupOpen}
        />
      ) : null}

      {/* Exercise Tasks for Practice */}

      <h2>Exercises: </h2>

      <Exercises />
    </>
  )
}

export default App
