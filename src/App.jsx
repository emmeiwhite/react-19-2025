import './App.css'
import Popup from './components/Popup'
import Title from './components/Title'
import Todo from './components/Todo'

function App() {
  // A normal variable
  let isPopupOpen = false

  // trying to handle popup without useState

  function togglePopup() {
    isPopupOpen = !isPopupOpen
    console.log(isPopupOpen)
  }
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
        <button onClick={togglePopup}>add item</button>
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
      {isPopupOpen ? <Popup title="Are your sure?" /> : null}
    </>
  )
}

export default App
